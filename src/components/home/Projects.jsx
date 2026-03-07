import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi';
import Card from '../common/Card';
import api from '../../services/api';
import toast from 'react-hot-toast';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/public/projects?page=0&size=6');
      setProjects(response.data.data.content || []);
    } catch (error) {
      toast.error('Failed to fetch projects');
      console.error('Error fetching projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Sample projects data (will be replaced by API data)
  const sampleProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration and inventory management.',
      imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Web Development',
      technologies: 'React, Spring Boot, MySQL',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication.',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Mobile Development',
      technologies: 'Flutter, Node.js, MongoDB',
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare platform for patient management and telemedicine.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Web Development',
      technologies: 'Angular, Python, PostgreSQL',
    },
  ];

  const displayProjects = projects.length > 0 ? projects : sampleProjects;

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Recent Projects</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Explore some of our successful projects that have helped businesses grow
          </p>
        </motion.div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group p-0">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <a
                        href="#"
                        className="bg-white text-primary-600 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                      >
                        <HiOutlineExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-sm text-primary-600 font-semibold mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-secondary-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center text-secondary-500 text-sm">
                      <HiOutlineCode className="mr-2" />
                      <span>{project.technologies}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="/projects" className="btn-primary inline-flex">
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;