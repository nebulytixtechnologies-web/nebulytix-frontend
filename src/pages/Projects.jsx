import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Card from '../components/common/Card';
import { HiOutlineExternalLink, HiOutlineCode, HiOutlineFilter } from 'react-icons/hi';
import api from '../services/api';
import toast from 'react-hot-toast';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/public/projects?page=0&size=100');
      const projectsData = response.data.data.content || [];
      setProjects(projectsData);
      
      // Extract unique categories
      const uniqueCategories = ['all', ...new Set(projectsData.map(p => p.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      toast.error('Failed to fetch projects');
      console.error('Error fetching projects:', error);
      
      // Sample data for demo
      const sampleProjects = [
        {
          id: 1,
          title: 'E-Commerce Platform',
          description: 'A full-featured online store with payment integration and inventory management.',
          imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'Web Development',
          technologies: 'React, Spring Boot, MySQL',
          liveUrl: 'https://demo.com',
        },
        {
          id: 2,
          title: 'Mobile Banking App',
          description: 'Secure mobile banking application with biometric authentication.',
          imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'Mobile Development',
          technologies: 'Flutter, Node.js, MongoDB',
          liveUrl: 'https://demo.com',
        },
        {
          id: 3,
          title: 'Healthcare Management System',
          description: 'Comprehensive healthcare platform for patient management and telemedicine.',
          imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'Web Development',
          technologies: 'Angular, Python, PostgreSQL',
          liveUrl: 'https://demo.com',
        },
        {
          id: 4,
          title: 'AI-Powered Analytics Dashboard',
          description: 'Real-time analytics dashboard with AI-driven insights.',
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'AI & Machine Learning',
          technologies: 'Python, TensorFlow, React',
          liveUrl: 'https://demo.com',
        },
        {
          id: 5,
          title: 'Cloud Migration Project',
          description: 'Migration of legacy infrastructure to AWS cloud.',
          imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'Cloud Solutions',
          technologies: 'AWS, Docker, Kubernetes',
          liveUrl: 'https://demo.com',
        },
        {
          id: 6,
          title: 'IoT Smart Home Platform',
          description: 'Platform for controlling and monitoring smart home devices.',
          imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'IoT',
          technologies: 'Node.js, MQTT, React Native',
          liveUrl: 'https://demo.com',
        },
      ];
      setProjects(sampleProjects);
      setCategories(['all', 'Web Development', 'Mobile Development', 'AI & Machine Learning', 'Cloud Solutions', 'IoT']);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Our Projects - Nebulytix Technologies</title>
        <meta name="description" content="Explore our portfolio of successful software development projects across various industries and technologies." />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Our <span className="text-primary-600">Projects</span>
              </h1>
              <p className="text-lg text-secondary-600">
                Explore our portfolio of successful projects that have helped businesses transform and grow
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center justify-center flex-wrap gap-4">
                <HiOutlineFilter className="text-secondary-400" size={20} />
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Projects Grid */}
            {isLoading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden group p-0 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary-600 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                          >
                            <HiOutlineExternalLink size={20} />
                          </a>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <span className="text-sm text-primary-600 font-semibold mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-secondary-600 mb-4 flex-1">
                          {project.description}
                        </p>
                        <div className="flex items-center text-secondary-500 text-sm mt-auto">
                          <HiOutlineCode className="mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{project.technologies}</span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {!isLoading && filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-secondary-500">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Have a Project in Mind?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Let's create something amazing together
              </p>
              <a
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors inline-block"
              >
                Start Your Project
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Projects;