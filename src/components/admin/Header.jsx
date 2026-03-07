import React from 'react';
import { HiOutlineMenu, HiOutlineBell, HiOutlineSearch } from 'react-icons/hi';

const Header = ({ setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center px-4 lg:px-8">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden text-secondary-500 hover:text-secondary-700 mr-4"
      >
        <HiOutlineMenu size={24} />
      </button>

      {/* Search Bar */}
      <div className="flex-1 max-w-md hidden md:block">
        <div className="relative">
          <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Notifications */}
        <button className="relative text-secondary-600 hover:text-primary-600 transition-colors">
          <HiOutlineBell size={24} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
          <span className="text-primary-600 font-semibold text-sm">A</span>
        </div>
      </div>
    </header>
  );
};

export default Header;