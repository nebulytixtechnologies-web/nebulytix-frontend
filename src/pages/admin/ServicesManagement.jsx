import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { HiOutlinePlus, HiOutlinePencil, HiOutlineTrash, HiOutlineEye, HiOutlineX } from 'react-icons/hi';
import DataTable from '../../components/admin/DataTable';
import api from '../../services/api';

const ServicesManagement = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [editingService, setEditingService] = useState(null);

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        fetchServices();
    }, [currentPage]);

    const fetchServices = async () => {
        try {
            setIsLoading(true);
            // Fallback mock if API endpoint doesn't exist yet
            try {
                const response = await api.get(`/admin/services?page=${currentPage}&size=10`);
                setServices(response.data.data.content || []);
                setTotalPages(response.data.data.totalPages || 0);
            } catch (e) {
                setServices([]);
                setTotalPages(0);
            }
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmit = async (data) => {
        try {
            if (editingService) {
                await api.put(`/admin/services/${editingService.id}`, data);
                toast.success('Service updated successfully');
            } else {
                await api.post('/admin/services', data);
                toast.success('Service created successfully');
            }
            setShowModal(false);
            reset();
            setEditingService(null);
            fetchServices();
        } catch (error) {
            toast.error(editingService ? 'Failed to update service' : 'Failed to create service');
            console.error('Error saving service:', error);
        }
    };

    const handleEdit = (service) => {
        setEditingService(service);
        setValue('title', service.title);
        setValue('description', service.description);
        setValue('category', service.category);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            try {
                await api.delete(`/admin/services/${id}`);
                toast.success('Service deleted successfully');
                fetchServices();
            } catch (error) {
                toast.error('Failed to delete service');
            }
        }
    };

    const columns = [
        { key: 'title', label: 'Service Name', sortable: true },
        { key: 'category', label: 'Category' },
        { key: 'description', label: 'Description', render: (val) => <span className="line-clamp-1">{val}</span> },
        {
            key: 'actions',
            label: 'Actions',
            render: (_, row) => (
                <div className="flex space-x-2">
                    <button onClick={() => handleEdit(row)} className="p-1 text-green-600 hover:bg-green-50 rounded" title="Edit">
                        <HiOutlinePencil size={18} />
                    </button>
                    <button onClick={() => handleDelete(row.id)} className="p-1 text-red-600 hover:bg-red-50 rounded" title="Delete">
                        <HiOutlineTrash size={18} />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <>
            <Helmet><title>Services Management - Nebulytix Admin</title></Helmet>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-secondary-900">Services Management</h1>
                        <p className="text-secondary-600">Manage your company services</p>
                    </div>
                    <button onClick={() => { setEditingService(null); reset(); setShowModal(true); }} className="btn-primary flex items-center">
                        <HiOutlinePlus className="mr-2" /> Add Service
                    </button>
                </div>
                <DataTable columns={columns} data={services} currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} isLoading={isLoading} />
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 my-8">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold">{editingService ? 'Edit Service' : 'Add New Service'}</h3>
                            <button onClick={() => setShowModal(false)} className="text-secondary-500 hover:text-secondary-700">
                                <HiOutlineX size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Service Title *</label>
                                <input type="text" {...register('title', { required: 'Title is required' })} className={`input-field ${errors.title ? 'border-red-500' : ''}`} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Category *</label>
                                <input type="text" {...register('category', { required: 'Category is required' })} className={`input-field ${errors.category ? 'border-red-500' : ''}`} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Description *</label>
                                <textarea rows="4" {...register('description', { required: 'Description is required' })} className={`input-field resize-none ${errors.description ? 'border-red-500' : ''}`} />
                            </div>
                            <div className="flex justify-end space-x-3 pt-4">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-secondary-600 hover:bg-secondary-100 rounded-lg">Cancel</button>
                                <button type="submit" className="btn-primary">{editingService ? 'Update Service' : 'Create Service'}</button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </>
    );
};
export default ServicesManagement;
