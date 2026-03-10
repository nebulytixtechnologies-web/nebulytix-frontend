import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { HiOutlinePlus, HiOutlinePencil, HiOutlineTrash, HiOutlineEye, HiOutlineX } from 'react-icons/hi';
import DataTable from '../../components/admin/DataTable';
import api from '../../services/api';

const PartnersManagement = () => {
    const [partners, setPartners] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [editingPartner, setEditingPartner] = useState(null);

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        fetchPartners();
    }, [currentPage]);

    const fetchPartners = async () => {
        try {
            setIsLoading(true);
            try {
                const response = await api.get(`/admin/partners?page=${currentPage}&size=10`);
                setPartners(response.data.data.content || []);
                setTotalPages(response.data.data.totalPages || 0);
            } catch (e) {
                setPartners([]);
                setTotalPages(0);
            }
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmit = async (data) => {
        try {
            if (editingPartner) {
                await api.put(`/admin/partners/${editingPartner.id}`, data);
                toast.success('Partner updated successfully');
            } else {
                await api.post('/admin/partners', data);
                toast.success('Partner added successfully');
            }
            setShowModal(false);
            reset();
            setEditingPartner(null);
            fetchPartners();
        } catch (error) {
            toast.error(editingPartner ? 'Failed to update partner' : 'Failed to add partner');
        }
    };

    const handleEdit = (partner) => {
        setEditingPartner(partner);
        setValue('name', partner.name);
        setValue('websiteUrl', partner.websiteUrl);
        setValue('description', partner.description);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to remove this partner?')) {
            try {
                await api.delete(`/admin/partners/${id}`);
                toast.success('Partner removed successfully');
                fetchPartners();
            } catch (error) {
                toast.error('Failed to remove partner');
            }
        }
    };

    const columns = [
        { key: 'name', label: 'Partner Name', sortable: true },
        { key: 'websiteUrl', label: 'Website' },
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
            <Helmet><title>Partners Management - Nebulytix Admin</title></Helmet>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-secondary-900">Partners Management</h1>
                        <p className="text-secondary-600">Manage your associated partners</p>
                    </div>
                    <button onClick={() => { setEditingPartner(null); reset(); setShowModal(true); }} className="btn-primary flex items-center">
                        <HiOutlinePlus className="mr-2" /> Add Partner
                    </button>
                </div>
                <DataTable columns={columns} data={partners} currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} isLoading={isLoading} />
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 my-8">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold">{editingPartner ? 'Edit Partner' : 'Add New Partner'}</h3>
                            <button onClick={() => setShowModal(false)} className="text-secondary-500 hover:text-secondary-700">
                                <HiOutlineX size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Partner Name *</label>
                                <input type="text" {...register('name', { required: 'Name is required' })} className={`input-field ${errors.name ? 'border-red-500' : ''}`} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Website URL</label>
                                <input type="url" {...register('websiteUrl')} className="input-field" placeholder="https://" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Description</label>
                                <textarea rows="3" {...register('description')} className="input-field resize-none" />
                            </div>
                            <div className="flex justify-end space-x-3 pt-4">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-secondary-600 hover:bg-secondary-100 rounded-lg">Cancel</button>
                                <button type="submit" className="btn-primary">{editingPartner ? 'Update Partner' : 'Add Partner'}</button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </>
    );
};
export default PartnersManagement;
