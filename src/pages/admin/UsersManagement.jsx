import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  HiOutlinePlus,
  HiOutlineTrash,
  HiOutlineX,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineShieldCheck,
  HiOutlineClock,
} from 'react-icons/hi';
import DataTable from '../../components/admin/DataTable';
import api from '../../services/api';

const UsersManagement = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/admin/users?page=${currentPage}&size=10`);
      setUsers(response.data.data.content);
      setTotalPages(response.data.data.totalPages);
    } catch (error) {
      toast.error('Failed to fetch users');
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      await api.post('/admin/users', data);
      toast.success('Sub-admin created successfully');
      setShowModal(false);
      reset();
      fetchUsers();
    } catch (error) {
      toast.error('Failed to create sub-admin');
      console.error('Error creating user:', error);
    }
  };

  const handleDeactivate = async (id) => {
    if (window.confirm('Are you sure you want to deactivate this user?')) {
      try {
        await api.put(`/admin/users/${id}/deactivate`);
        toast.success('User deactivated successfully');
        fetchUsers();
      } catch (error) {
        toast.error('Failed to deactivate user');
      }
    }
  };

  const getRoleBadge = (role) => {
    return role === 'ADMIN' ? (
      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
        Admin
      </span>
    ) : (
      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        Sub-Admin
      </span>
    );
  };

  const getStatusBadge = (isActive) => {
    return isActive ? (
      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
        Active
      </span>
    ) : (
      <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
        Inactive
      </span>
    );
  };

  const columns = [
    {
      key: 'fullName',
      label: 'Name',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <HiOutlineUser className="text-primary-600" size={16} />
          </div>
          <div>
            <p className="font-medium text-secondary-900">{value}</p>
            <p className="text-xs text-secondary-500">{row.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'email',
      label: 'Email',
      render: (value) => (
        <div className="flex items-center text-secondary-600">
          <HiOutlineMail className="mr-2" size={16} />
          {value}
        </div>
      ),
    },
    {
      key: 'role',
      label: 'Role',
      render: (value) => getRoleBadge(value),
    },
    {
      key: 'isActive',
      label: 'Status',
      render: (value) => getStatusBadge(value),
    },
    {
      key: 'createdAt',
      label: 'Created',
      render: (value) => (
        <div className="flex items-center text-secondary-600">
          <HiOutlineClock className="mr-2" size={16} />
          {new Date(value).toLocaleDateString()}
        </div>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        row.role !== 'ADMIN' && row.isActive && (
          <button
            onClick={() => handleDeactivate(row.id)}
            className="p-1 text-red-600 hover:bg-red-50 rounded"
            title="Deactivate"
          >
            <HiOutlineTrash size={18} />
          </button>
        )
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Users Management - Nebulytix Admin</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900">Users Management</h1>
            <p className="text-secondary-600">Manage admin and sub-admin users</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary flex items-center"
          >
            <HiOutlinePlus className="mr-2" />
            Add Sub-Admin
          </button>
        </div>

        {/* Users Table */}
        <DataTable
          columns={columns}
          data={users}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          isLoading={isLoading}
        />
      </div>

      {/* Add Sub-Admin Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full mx-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-secondary-900">Add Sub-Admin</h3>
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
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('fullName', { required: 'Full name is required' })}
                  className={`input-field ${errors.fullName ? 'border-red-500' : ''}`}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Role
                </label>
                <div className="flex items-center space-x-2 p-3 bg-secondary-50 rounded-lg">
                  <HiOutlineShieldCheck className="text-primary-600" size={20} />
                  <span className="text-secondary-700">Sub-Admin</span>
                </div>
                <input type="hidden" {...register('role')} value="SUB_ADMIN" />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  A temporary password will be generated and sent to the user's email.
                </p>
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
                  Create Sub-Admin
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default UsersManagement;