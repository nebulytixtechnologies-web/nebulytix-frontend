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

  useEffect(() => { fetchProjects(); }, []);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/public/projects?page=0&size=100');
      const data = response.data.data.content || [];
      setProjects(data);
      setCategories(['all', ...new Set(data.map(p => p.category))]);
    } catch {
      const sample = [
        { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with payment integration and inventory management.', imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Web Development', technologies: 'React, Spring Boot, MySQL', liveUrl: '#' },
        { id: 2, title: 'Mobile Banking App', description: 'Secure mobile banking application with biometric authentication.', imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Mobile Development', technologies: 'Flutter, Node.js, MongoDB', liveUrl: '#' },
        { id: 3, title: 'Healthcare Management System', description: 'Comprehensive healthcare platform for patient management and telemedicine.', imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Web Development', technologies: 'Angular, Python, PostgreSQL', liveUrl: '#' },
        { id: 4, title: 'AI-Powered Analytics Dashboard', description: 'Real-time analytics dashboard with AI-driven insights.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'AI & Machine Learning', technologies: 'Python, TensorFlow, React', liveUrl: '#' },
        { id: 5, title: 'Cloud Migration Project', description: 'Migration of legacy infrastructure to AWS cloud.', imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Cloud Solutions', technologies: 'AWS, Docker, Kubernetes', liveUrl: '#' },
        { id: 6, title: 'IoT Smart Home Platform', description: 'Platform for controlling and monitoring smart home devices.', imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'IoT', technologies: 'Node.js, MQTT, React Native', liveUrl: '#' },
      ];
      setProjects(sample);
      setCategories(['all', 'Web Development', 'Mobile Development', 'AI & Machine Learning', 'Cloud Solutions', 'IoT']);
    } finally {
      setIsLoading(false);
    }
  };

  const filtered = selectedCategory === 'all' ? projects : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Our Projects - Nebulytix Technologies</title>
        <meta name="description" content="Explore our portfolio of successful software development projects across various industries and technologies." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: 'var(--color-page-bg)' }}>
          <div className="glow-orb" style={{ width: 600, height: 600, top: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(224,64,251,0.18) 0%, transparent 70%)' }} />
          <div className="container-custom relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                Our <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Explore our portfolio of successful projects that have helped businesses transform and grow
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 relative" style={{ background: 'var(--color-page-surface)' }}>
          <div className="container-custom relative z-10">
            {/* Filter */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <div className="flex items-center justify-center flex-wrap gap-3">
                <HiOutlineFilter style={{ color: 'var(--color-text-muted)' }} size={20} />
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setSelectedCategory(cat)}
                    className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                    style={selectedCategory === cat
                      ? { background: 'var(--gradient-btn)', color: '#fff', boxShadow: 'var(--shadow-glow-primary)' }
                      : { background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--color-text-secondary)' }
                    }
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>

            {isLoading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: 'var(--color-primary)' }} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {filtered.map((project, index) => (
                  <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="h-full">
                    <Card className="overflow-hidden group p-0 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden flex-shrink-0">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(124,58,237,0.85)', color: '#f0eaff', backdropFilter: 'blur(8px)' }}>
                          {project.category}
                        </span>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                          style={{ background: 'linear-gradient(to top, rgba(7,4,15,0.85), rgba(124,58,237,0.25))' }}>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            className="p-3 rounded-full border transition-all hover:scale-110"
                            style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                            <HiOutlineExternalLink size={20} />
                          </a>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{project.title}</h3>
                        <p className="mb-4 flex-1" style={{ color: 'var(--color-text-secondary)' }}>{project.description}</p>
                        <div className="flex items-center text-sm mt-auto pt-4" style={{ color: 'var(--color-text-muted)', borderTop: '1px solid var(--glass-border)' }}>
                          <HiOutlineCode className="mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{project.technologies}</span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {!isLoading && filtered.length === 0 && (
              <div className="text-center py-12">
                <p style={{ color: 'var(--color-text-muted)' }}>No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-page-bg)' }}>
          <div className="glow-orb" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(0,229,255,0.18) 0%, transparent 65%)' }} />
          <div className="container-custom text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>Have a Project in Mind?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>Let's create something amazing together</p>
              <a href="/contact" className="btn-primary text-base px-8 py-4">Start Your Project</a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;