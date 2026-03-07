import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight mb-6">
              Transforming Ideas into{' '}
              <span className="text-primary-600">Powerful Software</span>
            </h1>
            
            <p className="text-lg text-secondary-600 mb-8 max-w-lg">
              We help businesses innovate and scale with cutting-edge software solutions. 
              From web and mobile apps to AI and cloud solutions, we've got you covered.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary group">
                Get Started
                <HiArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="btn-secondary">
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-primary-600">100+</div>
                <div className="text-secondary-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-secondary-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">5+</div>
                <div className="text-secondary-600">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team working on software development"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero