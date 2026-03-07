import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  HiOutlineDocumentText,
  HiOutlineDownload,
  HiOutlineEye,
  HiOutlineX,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineXCircle,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
} from 'react-icons/hi';
import DataTable from '../../components/admin/DataTable';
import api from '../../services/api';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');

  useEffect(() => {
    fetchApplications();
    fetchJobs();
  }, [currentPage, selectedJob]);

  const fetchApplications = async () => {
    try {
      setIsLoading(true);
      const url = selectedJob 
        ? `/hr/jobs/${selectedJob}/applications?page=${currentPage}&size=10`
        : `/hr/applications?page=${currentPage}&size=10`;
      const response = await api.get(url);
      setApplications(response.data.data.content);
      setTotalPages(response.data.data.totalPages);
    } catch (error) {
      toast.error('Failed to fetch applications');
      console.error('Error fetching applications:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchJobs = async () => {
    try {
      const response = await api.get('/hr/jobs?page=0&size=100');
      setJobs(response.data.data.content);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await api.put(`/hr/applications/${id}/status?status=${status}`);
      toast.success(`Application status updated to ${status}`);
      fetchApplications();
      setShowModal(false);
    } catch (error) {
      toast.error('Failed to update application status');
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      APPLIED: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Applied', icon: HiOutlineClock },
      REVIEWED: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Reviewed', icon: HiOutlineEye },
      REJECTED: { bg: 'bg-red-100', text: 'text-red-800', label: 'Rejected', icon: HiOutlineXCircle },
      HIRED: { bg: 'bg-green-100', text: 'text-green-800', label: 'Hired', icon: HiOutlineCheckCircle },
    };
    const config = statusConfig[status] || statusConfig.APPLIED;
    const Icon = config.icon;
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        <Icon className="mr-1" size={12} />
        {config.label}
      </span>
    );
  };

  const columns = [
    {
      key: 'applicantName',
      label: 'Applicant',
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
      key: 'job',
      label: 'Position',
      render: (value) => value?.title || 'N/A',
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
      key: 'status',
      label: 'Status',
      render: (value) => getStatusBadge(value),
    },
    {
      key: 'appliedAt',
      label: 'Applied Date',
      sortable: true,
      render: (value) => new Date(value).toLocaleDateString(),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => {
              setSelectedApplication(row);
              setShowModal(true);
            }}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded"
            title="View Details"
          >
            <HiOutlineEye size={18} />
          </button>
          <a
            href={row.resumeUrl}
            download
            className="p-1 text-green-600 hover:bg-green-50 rounded"
            title="Download Resume"
          >
            <HiOutlineDownload size={18} />
          </a>
        </div>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Applications - Nebulytix Admin</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Job Applications</h1>
          <p className="text-secondary-600">Manage and review candidate applications</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-64">
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Filter by Job
              </label>
              <select
                value={selectedJob}
                onChange={(e) => {
                  setSelectedJob(e.target.value);
                  setCurrentPage(0);
                }}
                className="input-field"
              >
                <option value="">All Jobs</option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Applications Table */}
        <DataTable
          columns={columns}
          data={applications}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          isLoading={isLoading}
        />
      </div>

      {/* Application Details Modal */}
      {showModal && selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-secondary-900">Application Details</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-secondary-500 hover:text-secondary-700"
              >
                <HiOutlineX size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Status */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-secondary-700">Current Status:</span>
                {getStatusBadge(selectedApplication.status)}
              </div>

              {/* Personal Info */}
              <div className="bg-secondary-50 rounded-xl p-4">
                <h4 className="font-semibold text-secondary-900 mb-3">Personal Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-secondary-500">Full Name</p>
                    <p className="font-medium text-secondary-900">{selectedApplication.applicantName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Email</p>
                    <p className="font-medium text-secondary-900">{selectedApplication.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Phone</p>
                    <p className="font-medium text-secondary-900">{selectedApplication.phone || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Applied For</p>
                    <p className="font-medium text-secondary-900">{selectedApplication.job?.title}</p>
                  </div>
                </div>
              </div>

              {/* Cover Letter */}
              {selectedApplication.coverLetter && (
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Cover Letter</h4>
                  <p className="text-secondary-600 whitespace-pre-wrap bg-secondary-50 rounded-xl p-4">
                    {selectedApplication.coverLetter}
                  </p>
                </div>
              )}

              {/* Resume */}
              <div>
                <h4 className="font-semibold text-secondary-900 mb-2">Resume</h4>
                <a
                  href={selectedApplication.resumeUrl}
                  download
                  className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors"
                >
                  <HiOutlineDownload className="mr-2" />
                  Download Resume
                </a>
              </div>

              {/* Update Status */}
              <div>
                <h4 className="font-semibold text-secondary-900 mb-2">Update Status</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleStatusChange(selectedApplication.id, 'REVIEWED')}
                    className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors"
                  >
                    Mark as Reviewed
                  </button>
                  <button
                    onClick={() => handleStatusChange(selectedApplication.id, 'HIRED')}
                    className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors"
                  >
                    Hire Candidate
                  </button>
                  <button
                    onClick={() => handleStatusChange(selectedApplication.id, 'REJECTED')}
                    className="px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors"
                  >
                    Reject Application
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Applications;