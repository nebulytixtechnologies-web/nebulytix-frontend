import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import Leads from './pages/admin/Leads'
import ProjectsManagement from './pages/admin/ProjectsManagement'
import JobsManagement from './pages/admin/JobsManagement'
import Applications from './pages/admin/Applications'
import UsersManagement from './pages/admin/UsersManagement'
import Login from './pages/admin/Login'
import PrivateRoute from './components/admin/PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/careers',
    element: <Careers />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/admin/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <PrivateRoute><AdminLayout /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'leads',
        element: <Leads />,
      },
      {
        path: 'projects',
        element: <ProjectsManagement />,
      },
      {
        path: 'jobs',
        element: <JobsManagement />,
      },
      {
        path: 'applications',
        element: <Applications />,
      },
      {
        path: 'users',
        element: <UsersManagement />,
      },
    ],
  },
])