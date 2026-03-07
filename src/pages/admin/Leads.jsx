import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTag,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineRefresh,
} from 'react-icons/hi';
import DataTable from '../../components/admin/DataTable';
import api from '../../services/api';

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [sortField, setSortField] = useState('createdAt');
  const [sortDirection, setSortDirection] = useState('desc');
  const [selectedLead, setSelectedLead] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [subAdmins, setSubAdmins] = useState([]);
  
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchLeads();
    if (user?.role === 'ADMIN') {
      fetchSubAdmins();
    }
  }, [currentPage, sortField, sortDirection]);

  const fetchLeads = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/admin/leads?page=${currentPage}&size=10&sort=${sortField},${sortDirection}`);
      setLeads(response.data.data.content);
      setTotalPages(response.data.data.totalPages);
    } catch (error) {
      toast.error('Failed to fetch leads');
      console.error('Error fetching leads:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSubAdmins = async () => {
    try {
      const response = await api.get('/admin/users?page=0&size=100');
      setSubAdmins(response.data.data.content.filter(u => u.role === 'SUB_ADMIN'));
    } catch (error) {
      console.error('Error fetching sub-admins:', error);
    }
  };

  const handleStatusChange = async (leadId, status) => {
    try {
      await api.put(`/admin/leads/${leadId}/status?status=${status}`);
      toast.success(`Lead status updated to ${status}`);
      fetchLeads();
    } catch (error) {
      toast.error('Failed to update lead status');
    }
  };

  const handleAssign = async (leadId, subAdminId) => {
    try {
      await api.put(`/admin/leads/${leadId}/assign?subAdminId=${subAdminId}`);
      toast.success('Lead assigned successfully');
      setShowModal(false);
      fetchLeads();
    } catch (error) {
      toast.error('Failed to assign lead');
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      NEW: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'New' },
      CONTACTED: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Contacted' },
      QUALIFIED: { bg: 'bg-green-100', text: 'text-green-800', label: 'Qualified' },
    };
    const config = statusConfig[status] || statusConfig.NEW;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  };

  const getSourceBadge = (source) => {
    return source === 'WHATSAPP_CLICK' ? (
      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
        WhatsApp
      </span>
    ) : (
      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        Contact Form
      </span>
    );
  };

  const columns = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <HiOutlineUser className="text-primary-600" size={16} />
          </div>
          <div>
            <p className="font-medium text-secondary-900">{value || 'N/A'}</p>
            <p className="text-xs text-secondary-500">{row.email || 'No email'}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'phone',
      label: 'Phone',
      render: (value) => (
        <div className="flex items-center text-secondary-600">
          <HiOutlinePhone className="mr-2" size={16} />
          {value || 'N/A'}
        </div>
      ),
    },
    {
      key: 'source',
      label: 'Source',
      render: (value) => getSourceBadge(value),
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => getStatusBadge(value),
    },
    {
      key: 'serviceInterest',
      label: 'Service',
      render: (value) => (
        <div className="flex items-center text-secondary-600">
          <HiOutlineTag className="mr-2" size={16} />
          {value || 'Not specified'}
        </div>
      ),
    },
    {
      key: 'createdAt',
      label: 'Date',
      sortable: true,
      render: (value) => (
        <div className="flex items-center text-secondary-600">
          <HiOutlineCalendar className="mr-2" size={16} />
          {new Date(value).toLocaleDateString()}
        </div>
      ),
    },
    {
      key: 'assignedTo',
      label: 'Assigned To',
      render: (value) => (
        <span className="text-secondary-600">
          {value?.fullName || 'Unassigned'}
        </span>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleStatusChange(row.id, 'CONTACTED')}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded"
            title="Mark as Contacted"
          >
            <HiOutlineCheckCircle size={18} />
          </button>
          <button
            onClick={() => handleStatusChange(row.id, 'QUALIFIED')}
            className="p-1 text-green-600 hover:bg-green-50 rounded"
            title="Mark as Qualified"
          >
            <HiOutlineCheckCircle size={18} />
          </button>
          {user?.role === 'ADMIN' && (
            <button
              onClick={() => {
                setSelectedLead(row);
                setShowModal(true);
              }}
              className="p-1 text-primary-600 hover:bg-primary-50 rounded"
              title="Assign"
            >
              <HiOutlineRefresh size={18} />
            </button>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Leads Management - Nebulytix Admin</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900">Leads Management</h1>
            <p className="text-secondary-600">Manage and track all your leads</p>
          </div>
          <button
            onClick={fetchLeads}
            className="px-4 py-2 bg-secondary-100 text-secondary-600 rounded-lg hover:bg-secondary-200 transition-colors flex items-center"
          >
            <HiOutlineRefresh className="mr-2" />
            Refresh
          </button>
        </div>

        {/* Leads Table */}
        <DataTable
          columns={columns}
          data={leads}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          onSort={(field) => {
            if (field === sortField) {
              setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
            } else {
              setSortField(field);
              setSortDirection('asc');
            }
          }}
          sortField={sortField}
          sortDirection={sortDirection}
          isLoading={isLoading}
        />
      </div>

      {/* Assign Modal */}
      {showModal && selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full mx-4"
          >
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Assign Lead</h3>
            <p className="text-secondary-600 mb-4">
              Assign "{selectedLead.name}" to a sub-admin
            </p>
            
            <div className="space-y-3 mb-6">
              {subAdmins.map((admin) => (
                <button
                  key={admin.id}
                  onClick={() => handleAssign(selectedLead.id, admin.id)}
                  className="w-full p-3 text-left border border-secondary-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
                >
                  <p className="font-medium text-secondary-900">{admin.fullName}</p>
                  <p className="text-sm text-secondary-500">{admin.email}</p>
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-secondary-600 hover:bg-secondary-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Leads;