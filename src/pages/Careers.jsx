import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Card from '../components/common/Card';
import { HiOutlineLocationMarker, HiOutlineBriefcase, HiOutlineClock } from 'react-icons/hi';
import api from '../services/api';
import toast from 'react-hot-toast';

const getJobTypeBadge = (type) => {
  const map = {
    FULL_TIME: { bg: 'rgba(0,229,204,0.15)', border: 'rgba(0,229,204,0.4)', text: '#00e5cc', label: 'Full Time' },
    PART_TIME: { bg: 'rgba(0,229,255,0.12)', border: 'rgba(0,229,255,0.35)', text: '#00e5ff', label: 'Part Time' },
    CONTRACT: { bg: 'rgba(168,85,247,0.12)', border: 'rgba(168,85,247,0.35)', text: '#a855f7', label: 'Contract' },
    INTERN: { bg: 'rgba(224,64,251,0.12)', border: 'rgba(224,64,251,0.35)', text: '#e040fb', label: 'Internship' },
  };
  return map[type] || { bg: 'rgba(168,85,247,0.12)', border: 'rgba(168,85,247,0.3)', text: '#a855f7', label: type };
};

const perks = [
  { title: 'Growth Opportunities', description: 'Continuous learning and career advancement', icon: '📈' },
  { title: 'Work-Life Balance', description: 'Flexible hours and remote options', icon: '⚖️' },
  { title: 'Competitive Benefits', description: 'Great compensation, health & perks', icon: '🎯' },
  { title: 'Innovative Culture', description: 'Work with cutting-edge technologies', icon: '💡' },
];

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => { fetchJobs(); }, []);

  const fetchJobs = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/public/jobs?page=0&size=100');
      setJobs(response.data.data.content || []);
    } catch {
      const sample = [
        { id: 1, title: 'Senior Full Stack Developer', department: 'Engineering', location: 'Remote', type: 'FULL_TIME', description: 'We are looking for an experienced Full Stack Developer to join our growing team...', requirements: '• 5+ years with React and Node.js\n• Strong understanding of database design\n• Experience with cloud platforms (AWS/Azure)\n• Excellent problem-solving skills', postedAt: '2024-02-15T10:00:00Z' },
        { id: 2, title: 'UI/UX Designer', department: 'Design', location: 'New York', type: 'FULL_TIME', description: 'Join our creative team to design beautiful and intuitive user experiences...', requirements: '• 3+ years of UI/UX design experience\n• Proficiency in Figma and Adobe Creative Suite\n• Strong portfolio demonstrating user-centered design\n• Experience with design systems', postedAt: '2024-02-10T10:00:00Z' },
        { id: 3, title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', type: 'FULL_TIME', description: 'Help us build and maintain our cloud infrastructure and CI/CD pipelines...', requirements: '• Experience with AWS/Azure/GCP\n• Knowledge of Docker and Kubernetes\n• CI/CD tools familiarity\n• Infrastructure as Code experience', postedAt: '2024-02-05T10:00:00Z' },
        { id: 4, title: 'Mobile Developer (React Native)', department: 'Engineering', location: 'San Francisco', type: 'FULL_TIME', description: 'Build cross-platform mobile applications using React Native...', requirements: '• 3+ years React Native experience\n• Knowledge of native iOS/Android\n• State management (Redux/MobX)\n• Published apps on App Store/Google Play', postedAt: '2024-02-01T10:00:00Z' },
        { id: 5, title: 'Data Scientist', department: 'Data Science', location: 'Remote', type: 'FULL_TIME', description: 'Apply machine learning and statistical analysis to solve complex business problems...', requirements: "• Master's/PhD in CS, Statistics or related\n• Python and ML frameworks experience\n• Strong statistics background\n• Big data technologies experience", postedAt: '2024-01-28T10:00:00Z' },
        { id: 6, title: 'QA Engineer', department: 'Quality Assurance', location: 'Austin', type: 'FULL_TIME', description: 'Ensure the quality of our software through comprehensive testing...', requirements: '• Automated testing frameworks experience\n• Knowledge of CI/CD pipelines\n• Attention to detail\n• Excellent communication skills', postedAt: '2024-01-25T10:00:00Z' },
      ];
      setJobs(sample);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers - Nebulytix Technologies</title>
        <meta name="description" content="Join our team at Nebulytix Technologies. We're always looking for talented individuals to help us build innovative software solutions." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
          <div className="glow-orb" style={{ width: 600, height: 600, top: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(0,229,204,0.18) 0%, transparent 70%)' }} />
          <div className="container-custom relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                Join Our <span className="text-gradient">Team</span>
              </h1>
              <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                We're always looking for passionate individuals to help us build the future of technology
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 relative" style={{ background: 'var(--color-bg-surface)' }}>
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="section-title">Why Join <span className="text-gradient">Nebulytix?</span></h2>
              <p className="section-subtitle max-w-2xl mx-auto">We offer more than just a job — we offer a career with purpose</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2"
                  style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
                  <div className="text-4xl mb-4">{perk.icon}</div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{perk.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{perk.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 relative" style={{ background: 'var(--color-bg)' }}>
          <div className="glow-orb" style={{ width: 400, height: 400, bottom: '10%', right: '-5%', background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)' }} />
          <div className="container-custom relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="section-title">Open <span className="text-gradient">Positions</span></h2>
              <p className="section-subtitle max-w-2xl mx-auto">Find your next role and join our team of innovators</p>
            </motion.div>

            {isLoading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: 'var(--color-primary)' }} />
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Listings */}
                <div className="space-y-4">
                  {jobs.map((job) => {
                    const badge = getJobTypeBadge(job.type);
                    return (
                      <motion.div key={job.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        onClick={() => setSelectedJob(job)}
                        className="rounded-xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1"
                        style={{
                          background: selectedJob?.id === job.id ? 'rgba(124,58,237,0.15)' : 'var(--glass-bg)',
                          border: `1px solid ${selectedJob?.id === job.id ? 'rgba(124,58,237,0.5)' : 'var(--glass-border)'}`,
                          backdropFilter: 'blur(16px)',
                          boxShadow: selectedJob?.id === job.id ? 'var(--shadow-glow-primary)' : 'var(--shadow-card)',
                        }}>
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>{job.title}</h3>
                          <span className="text-xs font-medium px-3 py-1 rounded-full flex-shrink-0 ml-2"
                            style={{ background: badge.bg, border: `1px solid ${badge.border}`, color: badge.text }}>
                            {badge.label}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 mb-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                          <span className="flex items-center gap-1"><HiOutlineBriefcase />{job.department}</span>
                          <span className="flex items-center gap-1"><HiOutlineLocationMarker />{job.location}</span>
                          <span className="flex items-center gap-1"><HiOutlineClock />Posted {new Date(job.postedAt).toLocaleDateString()}</span>
                        </div>
                        <p className="text-sm line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>{job.description}</p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Detail Panel */}
                <div className="lg:sticky lg:top-24 h-fit">
                  {selectedJob ? (
                    <Card>
                      <div className="flex justify-between items-start mb-4 flex-wrap gap-3">
                        <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>{selectedJob.title}</h3>
                        {(() => {
                          const b = getJobTypeBadge(selectedJob.type); return (
                            <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: b.bg, border: `1px solid ${b.border}`, color: b.text }}>{b.label}</span>
                          );
                        })()}
                      </div>
                      <div className="flex flex-wrap gap-4 mb-6 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <span className="flex items-center gap-1"><HiOutlineBriefcase />{selectedJob.department}</span>
                        <span className="flex items-center gap-1"><HiOutlineLocationMarker />{selectedJob.location}</span>
                      </div>
                      <div className="mb-5">
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>Description</h4>
                        <p style={{ color: 'var(--color-text-secondary)' }}>{selectedJob.description}</p>
                      </div>
                      <div className="mb-8">
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>Requirements</h4>
                        <p className="whitespace-pre-line" style={{ color: 'var(--color-text-secondary)' }}>{selectedJob.requirements}</p>
                      </div>
                      <Link to={`/contact?job=${selectedJob.id}`} className="btn-primary w-full justify-center py-3">
                        Apply for this Position
                      </Link>
                    </Card>
                  ) : (
                    <div className="rounded-2xl p-12 text-center" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
                      <div className="text-5xl mb-4">💼</div>
                      <p style={{ color: 'var(--color-text-muted)' }}>Select a position to view details</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-bg-surface)' }}>
          <div className="glow-orb" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 65%)' }} />
          <div className="container-custom text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>Don't See Your Perfect Role?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>Send us your resume and we'll keep you in mind for future opportunities</p>
              <Link to="/contact" className="btn-primary text-base px-8 py-4">Send Your Resume</Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Careers;