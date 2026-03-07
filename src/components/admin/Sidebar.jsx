import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlineMail,
  HiOutlineFolder,
  HiOutlineLogout,
  HiX,
} from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import toast from 'react-hot-toast';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const menuItems = [
    { path: '/admin', icon: HiOutlineHome, label: 'Dashboard' },
    { path: '/admin/leads', icon: HiOutlineMail, label: 'Leads' },
    { path: '/admin/projects', icon: HiOutlineFolder, label: 'Projects' },
    { path: '/admin/jobs', icon: HiOutlineBriefcase, label: 'Jobs' },
    { path: '/admin/applications', icon: HiOutlineDocumentText, label: 'Applications' },
  ];

  // Add Users menu only for Admin
  if (user?.role === 'ADMIN') {
    menuItems.push({ path: '/admin/users', icon: HiOutlineUsers, label: 'Users' });
  }

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black lg:hidden z-20"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ type: 'tween' }}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-30 lg:translate-x-0 ${
          sidebarOpen ? '' : 'lg:translate-x-0'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-20 flex items-center justify-between px-6 border-b border-secondary-200">
            <div>
              <span className="text-xl font-bold text-primary-600">Nebulytix</span>
              <span className="text-secondary-600 text-sm block">Admin Panel</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-secondary-500 hover:text-secondary-700"
            >
              <HiX size={24} />
            </button>
          </div>

          {/* User Info */}
          <div className="p-6 border-b border-secondary-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-600 font-semibold">
                  {user?.fullName?.charAt(0) || 'A'}
                </span>
              </div>
              <div>
                <p className="font-medium text-secondary-900">{user?.fullName}</p>
                <p className="text-xs text-secondary-500">{user?.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-secondary-600 hover:bg-secondary-100'
                  }`
                }
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-secondary-200">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-4 py-3 w-full rounded-lg text-secondary-600 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <HiOutlineLogout size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;