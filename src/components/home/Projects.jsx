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
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      {/* Background glow */}
      <div
        className="glow-orb"
        style={{
          width: 500, height: 500,
          bottom: '-10%', right: '-8%',
          background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1 rounded-full"
            style={{ color: 'var(--color-glow)', background: 'rgba(224,64,251,0.1)', border: '1px solid rgba(224,64,251,0.2)' }}
          >
            Our Portfolio
          </span>
          <h2 className="section-title">Recent <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Explore successful projects that have helped businesses grow
          </p>
        </motion.div>

        {/* Grid */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div
              className="animate-spin rounded-full h-12 w-12 border-b-2"
              style={{ borderColor: 'var(--color-primary)' }}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="overflow-hidden group p-0 h-full flex flex-col" hover={true}>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Category badge */}
                    <span
                      className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: 'rgba(124,58,237,0.85)', color: '#f0eaff', backdropFilter: 'blur(8px)' }}
                    >
                      {project.category}
                    </span>
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{ background: 'linear-gradient(to top, rgba(7,4,15,0.85), rgba(124,58,237,0.3))' }}
                    >
                      <a
                        href="#"
                        className="p-3 rounded-full transition-all duration-200 hover:scale-110"
                        style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
                      >
                        <HiOutlineExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="mb-4 line-clamp-2 flex-1"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {project.description}
                    </p>
                    <div
                      className="flex items-center text-sm mt-auto pt-4"
                      style={{ color: 'var(--color-text-muted)', borderTop: '1px solid var(--glass-border)' }}
                    >
                      <HiOutlineCode className="mr-2 flex-shrink-0" />
                      <span>{project.technologies}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
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