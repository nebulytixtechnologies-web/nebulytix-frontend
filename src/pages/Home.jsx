import { Helmet } from 'react-helmet-async'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Projects from '../components/home/Projects'
import Testimonials from '../components/home/Testimonials'
import Contact from '../components/home/Contact'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Nebulytix Technologies - Innovative Software Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge software solutions from Nebulytix Technologies. We specialize in web development, mobile apps, cloud solutions, and AI." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}

export default Home