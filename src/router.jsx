import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Projects from './pages/Projects'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Partners from './pages/Partners'
import AIAutomation from './pages/AIAutomation'
import DigitalTransformation from './pages/DigitalTransformation'
import AIUpskilling from './pages/AIUpskilling'
import Industries from './pages/Industries'
import Insights from './pages/Insights'
import SolutionsPage from './pages/SolutionsPage'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import Leads from './pages/admin/Leads'
import ProjectsManagement from './pages/admin/ProjectsManagement'
import JobsManagement from './pages/admin/JobsManagement'
import ServicesManagement from './pages/admin/ServicesManagement'
import PartnersManagement from './pages/admin/PartnersManagement'
import Applications from './pages/admin/Applications'
import UsersManagement from './pages/admin/UsersManagement'
import Login from './pages/admin/Login'
import PrivateRoute from './components/admin/PrivateRoute'
import RootLayout from './components/common/RootLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'products', element: <Products /> },
      { path: 'projects', element: <Projects /> },
      { path: 'careers', element: <Careers /> },
      { path: 'contact', element: <Contact /> },
      { path: 'partners', element: <Partners /> },
      { path: 'solutions', element: <SolutionsPage /> },
      { path: 'solutions/ai-automation', element: <AIAutomation /> },
      { path: 'solutions/digital-transformation', element: <DigitalTransformation /> },
      { path: 'solutions/ai-upskilling', element: <AIUpskilling /> },
      { path: 'industries', element: <Industries /> },
      { path: 'insights', element: <Insights /> },
    ],
  },
  {
    path: '/admin/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <PrivateRoute><AdminLayout /></PrivateRoute>,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'leads', element: <Leads /> },
      { path: 'projects', element: <ProjectsManagement /> },
      { path: 'services', element: <ServicesManagement /> },
      { path: 'partners', element: <PartnersManagement /> },
      { path: 'jobs', element: <JobsManagement /> },
      { path: 'applications', element: <Applications /> },
      { path: 'users', element: <UsersManagement /> },
    ],
  },
])