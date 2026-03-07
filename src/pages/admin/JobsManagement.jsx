import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import {
  HiOutlinePlus,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineEye,
  HiOutlineX,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineClock,
} from 'react-icons/hi';
import DataTable from '../../components/admin/DataTable';
import api from '../../services/api';

const JobsManagement = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  
  const { user } = useSelector((state) => state.auth);
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    fetchJobs();
  }, [currentPage]);

  const fetchJobs = async () => {
    try {
      setIsLoading(true);
      const endpoint = user?.role === 'ADMIN' 
        ? `/hr/jobs?page=${currentPage}&size=10`
        : `/hr/jobs?page=${currentPage}&size=10`; // Sub-admin sees their own jobs
      const response = await api.get(endpoint);
      setJobs(response.data.data.content);
      setTotalPages(response.data.data.totalPages);
    } catch (error) {
      toast.error('Failed to fetch jobs');
      console.error('Error fetching jobs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (editingJob) {
        await api.put(`/hr/jobs/${editingJob.id}`, data);
        toast.success('Job updated successfully');
      } else {
        await api.post('/hr/jobs', data);
        toast.success('Job created successfully');
      }

      setShowModal(false);
      reset();
      setEditingJob(null);
      fetchJobs();
    } catch (error) {
      toast.error(editingJob ? 'Failed to update job' : 'Failed to create job');
      console.error('Error saving job:', error);
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setValue('title', job.title);
    setValue('department', job.department);
    setValue('location', job.location);
    setValue('description', job.description);
    setValue('requirements', job.requirements);
    setValue('type', job.type);
    setValue('expiryDate', job.expiryDate?.split('T')[0]);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await api.delete(`/hr/jobs/${id}`);
        toast.success('Job deleted successfully');
        fetchJobs();
      } catch (error) {
        toast.error('Failed to delete job');
      }
    }
  };

  const getJobTypeBadge = (type) => {
    const typeConfig = {
      FULL_TIME: { bg: 'bg-green-100', text: 'text-green-800', label: 'Full Time' },
      PART_TIME: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Part Time' },
      CONTRACT: { bg: 'bg-purple-100', text: 'text-purple-800', label: 'Contract' },
      INTERN: { bg: 'bg-orange-100', text: 'text-orange-800', label: 'Intern' },
    };
    const config = typeConfig[type] || typeConfig.FULL_TIME;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  };

  const columns = [
    {
      key: 'title',
      label: 'Title',
      sortable: true,
    },
    {
      key: 'department',
      label: 'Department',
    },
    {
      key: 'location',
      label: 'Location',
      render: (value) => (
        <div className="flex items-center text-secondary-600">
          <HiOutlineLocationMarker className="mr-1" size={14} />
          {value}
        </div>
      ),
    },
    {
      key: 'type',
      label: 'Type',
      render: (value) => getJobTypeBadge(value),
    },
    {
      key: 'postedAt',
      label: 'Posted',
      render: (value) => (
        <div className="flex items-center text-secondary-600">
          <HiOutlineClock className="mr-1" size={14} />
          {new Date(value).toLocaleDateString()}
        </div>
      ),
    },
    {
      key: 'expiryDate',
      label: 'Expires',
      render: (value) => value ? new Date(value).toLocaleDateString() : 'Never',
    },
    {
      key: 'isActive',
      label: 'Status',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {value ? 'Active' : 'Inactive'}
        </span>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => window.open(`/careers?job=${row.id}`, '_blank')}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded"
            title="View on Site"
          >
            <HiOutlineEye size={18} />
          </button>
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
        <title>Jobs Management - Nebulytix Admin</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900">Jobs Management</h1>
            <p className="text-secondary-600">Manage job openings and positions</p>
          </div>
          <button
            onClick={() => {
              setEditingJob(null);
              reset();
              setShowModal(true);
            }}
            className="btn-primary flex items-center"
          >
            <HiOutlinePlus className="mr-2" />
            Post New Job
          </button>
        </div>

        {/* Jobs Table */}
        <DataTable
          columns={columns}
          data={jobs}
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
                {editingJob ? 'Edit Job' : 'Post New Job'}
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
                  Job Title *
                </label>
                <input
                  type="text"
                  {...register('title', { required: 'Title is required' })}
                  className={`input-field ${errors.title ? 'border-red-500' : ''}`}
                  placeholder="e.g., Senior Full Stack Developer"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Department *
                  </label>
                  <input
                    type="text"
                    {...register('department', { required: 'Department is required' })}
                    className={`input-field ${errors.department ? 'border-red-500' : ''}`}
                    placeholder="e.g., Engineering"
                  />
                  {errors.department && (
                    <p className="mt-1 text-sm text-red-600">{errors.department.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    {...register('location', { required: 'Location is required' })}
                    className={`input-field ${errors.location ? 'border-red-500' : ''}`}
                    placeholder="e.g., Remote, New York"
                  />
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Job Type *
                  </label>
                  <select
                    {...register('type', { required: 'Job type is required' })}
                    className={`input-field ${errors.type ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select type</option>
                    <option value="FULL_TIME">Full Time</option>
                    <option value="PART_TIME">Part Time</option>
                    <option value="CONTRACT">Contract</option>
                    <option value="INTERN">Internship</option>
                  </select>
                  {errors.type && (
                    <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    {...register('expiryDate')}
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  {...register('description', { required: 'Description is required' })}
                  rows="4"
                  className={`input-field resize-none ${errors.description ? 'border-red-500' : ''}`}
                  placeholder="Describe the role, responsibilities, and ideal candidate..."
                ></textarea>
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Requirements *
                </label>
                <textarea
                  {...register('requirements', { required: 'Requirements are required' })}
                  rows="4"
                  className={`input-field resize-none ${errors.requirements ? 'border-red-500' : ''}`}
                  placeholder="List the requirements (one per line)..."
                ></textarea>
                {errors.requirements && (
                  <p className="mt-1 text-sm text-red-600">{errors.requirements.message}</p>
                )}
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
                  {editingJob ? 'Update Job' : 'Post Job'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default JobsManagement;