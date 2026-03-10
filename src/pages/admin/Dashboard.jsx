import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  HiOutlineBriefcase,
  HiOutlineFolder,
  HiOutlineUsers,
  HiOutlineViewGridAdd,
  HiOutlinePlus
} from 'react-icons/hi'
import api from '../../services/api'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalLeads: 0,
    totalJobs: 0,
    totalProjects: 0,
    totalServices: 0,
    totalPartners: 0,
  })
  const [recentLeads, setRecentLeads] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setIsLoading(true)

      const leadsRes = await api.get('/admin/leads?page=0&size=5').catch(() => ({ data: { data: { totalElements: 0, content: [] } } }));
      const jobsRes = await api.get('/hr/jobs?page=0&size=100').catch(() => ({ data: { data: { totalElements: 0 } } }));
      const projectsRes = await api.get('/admin/projects?page=0&size=100').catch(() => ({ data: { data: { totalElements: 0 } } }));
      const servicesRes = await api.get('/admin/services?page=0&size=100').catch(() => ({ data: { data: { totalElements: 0 } } }));
      const partnersRes = await api.get('/admin/partners?page=0&size=100').catch(() => ({ data: { data: { totalElements: 0 } } }));

      setStats({
        totalLeads: leadsRes.data?.data?.totalElements || 0,
        totalJobs: jobsRes.data?.data?.totalElements || 0,
        totalProjects: projectsRes.data?.data?.totalElements || 0,
        totalServices: servicesRes.data?.data?.totalElements || 0,
        totalPartners: partnersRes.data?.data?.totalElements || 0,
      })

      setRecentLeads(leadsRes.data?.data?.content?.slice(0, 5) || [])
    } catch (error) {
      toast.error('Failed to fetch dashboard data')
      console.error('Dashboard error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const managementActions = [
    {
      title: 'Manage Projects',
      description: 'Add or edit your portfolio projects.',
      icon: HiOutlineFolder,
      path: '/admin/projects',
      count: stats.totalProjects,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Manage Jobs',
      description: 'Post and manage active job listings.',
      icon: HiOutlineBriefcase,
      path: '/admin/jobs',
      count: stats.totalJobs,
      color: 'bg-green-500',
      lightColor: 'bg-green-50 text-green-600',
    },
    {
      title: 'Manage Services',
      description: 'Update your service offerings and details.',
      icon: HiOutlineViewGridAdd,
      path: '/admin/services',
      count: stats.totalServices,
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Manage Partners',
      description: 'Add new integration or business partners.',
      icon: HiOutlineUsers,
      path: '/admin/partners',
      count: stats.totalPartners,
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50 text-orange-600',
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Action Hub - Nebulytix Admin</title>
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Admin Action Hub</h1>
          <p className="text-secondary-600">Quickly add and manage your critical website data</p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {managementActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-secondary-100 p-6 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${action.lightColor}`}>
                  <action.icon className="text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-1">{action.title}</h3>
                <p className="text-sm text-secondary-600 mb-4 h-10">{action.description}</p>
                <div className="text-2xl font-black text-secondary-900 mb-6 flex items-center gap-2">
                  {action.count} <span className="text-xs font-semibold text-secondary-400 uppercase tracking-wide">Entries</span>
                </div>
              </div>

              <Link
                to={action.path}
                className="btn-primary w-full flex items-center justify-center py-2.5"
              >
                <HiOutlinePlus className="mr-2" />
                Add New
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Recent Leads Table (Kept for Utility) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg border border-secondary-100 p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Latest Incoming Leads</h2>
            <Link to="/admin/leads" className="text-sm font-semibold text-primary-600 hover:text-primary-700">View All →</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-secondary-200">
              <thead className="bg-secondary-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Source
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-secondary-200">
                {recentLeads.length > 0 ? recentLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-secondary-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">
                      {lead.name || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-600">
                      {lead.email || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${lead.source === 'WHATSAPP_CLICK'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                        }`}>
                        {lead.source === 'WHATSAPP_CLICK' ? 'WhatsApp' : 'Contact Form'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-600">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-8 text-center text-secondary-500">
                      No leads found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Dashboard