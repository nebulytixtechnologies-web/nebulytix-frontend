import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlineMail,
} from 'react-icons/hi'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import api from '../../services/api'
import DashboardStats from '../../components/admin/DashboardStats'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalLeads: 0,
    totalJobs: 0,
    totalApplications: 0,
    totalProjects: 0,
    newLeads: 0,
  })
  const [recentLeads, setRecentLeads] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setIsLoading(true)
      
      // Fetch all data in parallel
      const [leadsRes, jobsRes, applicationsRes, projectsRes] = await Promise.all([
        api.get('/admin/leads?page=0&size=5'),
        api.get('/hr/jobs?page=0&size=100'),
        api.get('/hr/applications?page=0&size=100'),
        api.get('/admin/projects?page=0&size=100'),
      ])

      setStats({
        totalLeads: leadsRes.data.data.totalElements || 0,
        totalJobs: jobsRes.data.data.totalElements || 0,
        totalApplications: applicationsRes.data.data.totalElements || 0,
        totalProjects: projectsRes.data.data.totalElements || 0,
        newLeads: leadsRes.data.data.content?.filter(l => l.status === 'NEW').length || 0,
      })

      setRecentLeads(leadsRes.data.data.content?.slice(0, 5) || [])
    } catch (error) {
      toast.error('Failed to fetch dashboard data')
      console.error('Dashboard error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Sample chart data
  const leadTrendData = [
    { name: 'Mon', leads: 4 },
    { name: 'Tue', leads: 7 },
    { name: 'Wed', leads: 5 },
    { name: 'Thu', leads: 8 },
    { name: 'Fri', leads: 6 },
    { name: 'Sat', leads: 3 },
    { name: 'Sun', leads: 2 },
  ]

  const leadSourceData = [
    { name: 'Contact Form', value: 65 },
    { name: 'WhatsApp', value: 35 },
  ]

  const COLORS = ['#3b82f6', '#10b981']

  const statsCards = [
    {
      title: 'Total Leads',
      value: stats.totalLeads,
      icon: HiOutlineUsers,
      change: '+12%',
      color: 'blue',
    },
    {
      title: 'Active Jobs',
      value: stats.totalJobs,
      icon: HiOutlineBriefcase,
      change: '+5%',
      color: 'green',
    },
    {
      title: 'Applications',
      value: stats.totalApplications,
      icon: HiOutlineDocumentText,
      change: '+23%',
      color: 'purple',
    },
    {
      title: 'New Leads',
      value: stats.newLeads,
      icon: HiOutlineMail,
      change: '+8%',
      color: 'orange',
    },
  ]

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
        <title>Dashboard - Nebulytix Admin</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Dashboard</h1>
          <p className="text-secondary-600">Welcome back! Here's what's happening with your business.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => (
            <DashboardStats key={index} stat={stat} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Lead Trend Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-lg font-semibold mb-4">Lead Trend (Last 7 Days)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={leadTrendData}>
                <defs>
                  <linearGradient id="leadGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="leads"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="url(#leadGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Lead Source Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-lg font-semibold mb-4">Lead Sources</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={leadSourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {leadSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Recent Leads Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-lg font-semibold mb-4">Recent Leads</h2>
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
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-secondary-200">
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-secondary-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">
                      {lead.name || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-600">
                      {lead.email || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        lead.source === 'WHATSAPP_CLICK' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {lead.source === 'WHATSAPP_CLICK' ? 'WhatsApp' : 'Contact Form'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        lead.status === 'NEW' 
                          ? 'bg-yellow-100 text-yellow-800'
                          : lead.status === 'CONTACTED'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-600">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Dashboard