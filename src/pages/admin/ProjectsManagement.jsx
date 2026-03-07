import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  HiOutlinePlus,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineEye,
  HiOutlineX,
  HiOutlineUpload,
} from 'react-icons/hi';
import DataTable from '../../components/admin/DataTable';
import api from '../../services/api';

const ProjectsManagement = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    fetchProjects();
  }, [currentPage]);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/admin/projects?page=${currentPage}&size=10`);
      setProjects(response.data.data.content);
      setTotalPages(response.data.data.totalPages);
    } catch (error) {
      toast.error('Failed to fetch projects');
      console.error('Error fetching projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('technologies', data.technologies);
      formData.append('liveUrl', data.liveUrl);
      formData.append('projectDate', data.projectDate);
      
      if (imageFile) {
        formData.append('image', imageFile);
      }

      if (editingProject) {
        await api.put(`/admin/projects/${editingProject.id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Project updated successfully');
      } else {
        await api.post('/admin/projects', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Project created successfully');
      }

      setShowModal(false);
      reset();
      setImageFile(null);
      setImagePreview('');
      setEditingProject(null);
      fetchProjects();
    } catch (error) {
      toast.error(editingProject ? 'Failed to update project' : 'Failed to create project');
      console.error('Error saving project:', error);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setValue('title', project.title);
    setValue('description', project.description);
    setValue('category', project.category);
    setValue('technologies', project.technologies);
    setValue('liveUrl', project.liveUrl);
    setValue('projectDate', project.projectDate?.split('T')[0]);
    setImagePreview(project.imageUrl);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await api.delete(`/admin/projects/${id}`);
        toast.success('Project deleted successfully');
        fetchProjects();
      } catch (error) {
        toast.error('Failed to delete project');
      }
    }
  };

  const columns = [
    {
      key: 'image',
      label: 'Image',
      render: (_, row) => (
        <img
          src={row.imageUrl || 'https://via.placeholder.com/60'}
          alt={row.title}
          className="w-12 h-12 object-cover rounded-lg"
        />
      ),
    },
    {
      key: 'title',
      label: 'Title',
      sortable: true,
    },
    {
      key: 'category',
      label: 'Category',
    },
    {
      key: 'technologies',
      label: 'Technologies',
      render: (value) => (
        <span className="text-sm text-secondary-600 line-clamp-1">{value}</span>
      ),
    },
    {
      key: 'projectDate',
      label: 'Date',
      render: (value) => new Date(value).toLocaleDateString(),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex space-x-2">
          <a
            href={row.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-blue-600 hover:bg-blue-50 rounded"
            title="View Live"
          >
            <HiOutlineEye size={18} />
          </a>
          <button
            onClick={() => handleEdit(row)}
            className="p-1 text-green-600 hover:bg-green-50 rounded"
            title="Edit"
          >
            <HiOutlinePencil size={18} />
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="p-1 text-red-600 hover:bg-red-50 rounded"
            title="Delete"
          >
            <HiOutlineTrash size={18} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Projects Management - Nebulytix Admin</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900">Projects Management</h1>
            <p className="text-secondary-600">Manage your portfolio projects</p>
          </div>
          <button
            onClick={() => {
              setEditingProject(null);
              reset();
              setImagePreview('');
              setShowModal(true);
            }}
            className="btn-primary flex items-center"
          >
            <HiOutlinePlus className="mr-2" />
            Add Project
          </button>
        </div>

        {/* Projects Table */}
        <DataTable
          columns={columns}
          data={projects}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          isLoading={isLoading}
        />
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 my-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-secondary-900">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-secondary-500 hover:text-secondary-700"
              >
                <HiOutlineX size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  {...register('title', { required: 'Title is required' })}
                  className={`input-field ${errors.title ? 'border-red-500' : ''}`}
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Category *
                  </label>
                  <select
                    {...register('category', { required: 'Category is required' })}
                    className={`input-field ${errors.category ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="IoT">IoT</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Project Date
                  </label>
                  <input
                    type="date"
                    {...register('projectDate')}
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Technologies Used
                </label>
                <input
                  type="text"
                  {...register('technologies')}
                  className="input-field"
                  placeholder="React, Spring Boot, MySQL"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Live URL
                </label>
                <input
                  type="url"
                  {...register('liveUrl')}
                  className="input-field"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Description *
                </label>
                <textarea
                  {...register('description', { required: 'Description is required' })}
                  rows="4"
                  className={`input-field resize-none ${errors.description ? 'border-red-500' : ''}`}
                ></textarea>
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Project Image
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex items-center justify-center px-4 py-3 border-2 border-dashed border-secondary-300 rounded-lg cursor-pointer hover:border-primary-500 transition-colors"
                    >
                      <HiOutlineUpload className="mr-2 text-secondary-400" />
                      <span className="text-secondary-600">Choose image</span>
                    </label>
                  </div>
                  {imagePreview && (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImageFile(null);
                          setImagePreview('');
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <HiOutlineX size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-secondary-600 hover:bg-secondary-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  {editingProject ? 'Update Project' : 'Create Project'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectsManagement;