export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const ROLES = {
  ADMIN: 'ADMIN',
  SUB_ADMIN: 'SUB_ADMIN',
};

export const LEAD_STATUS = {
  NEW: 'NEW',
  CONTACTED: 'CONTACTED',
  QUALIFIED: 'QUALIFIED',
};

export const LEAD_SOURCE = {
  CONTACT_FORM: 'CONTACT_FORM',
  WHATSAPP_CLICK: 'WHATSAPP_CLICK',
};

export const JOB_TYPES = {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  CONTRACT: 'CONTRACT',
  INTERN: 'INTERN',
};

export const APPLICATION_STATUS = {
  APPLIED: 'APPLIED',
  REVIEWED: 'REVIEWED',
  REJECTED: 'REJECTED',
  HIRED: 'HIRED',
};

export const WHATSAPP_NUMBER = '1234567890'; // Replace with your WhatsApp number

export const WHATSAPP_MESSAGE = 'Hi%2C%20I%27m%20interested%20in%20your%20services';

export const COMPANY_INFO = {
  name: 'Nebulytix Technologies',
  email: 'info@nebulytix.com',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Street, Silicon Valley, CA 94025',
  social: {
    facebook: 'https://facebook.com/nebulytix',
    twitter: 'https://twitter.com/nebulytix',
    linkedin: 'https://linkedin.com/company/nebulytix',
    github: 'https://github.com/nebulytix',
    instagram: 'https://instagram.com/nebulytix',
  },
};

export const NAVIGATION = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    icon: 'HiOutlineCode',
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications',
    icon: 'HiOutlineDeviceMobile',
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure on AWS, Azure, and GCP',
    icon: 'HiOutlineCloud',
  },
  // Add more services...
];