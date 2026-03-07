import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Card from '../components/common/Card';
import { HiOutlineLocationMarker, HiOutlineBriefcase, HiOutlineClock, HiOutlineCurrencyDollar } from 'react-icons/hi';
import api from '../services/api';
import toast from 'react-hot-toast';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/public/jobs?page=0&size=100');
      setJobs(response.data.data.content || []);
    } catch (error) {
      toast.error('Failed to fetch jobs');
      console.error('Error fetching jobs:', error);
      
      // Sample data for demo
      const sampleJobs = [
        {
          id: 1,
          title: 'Senior Full Stack Developer',
          department: 'Engineering',
          location: 'Remote',
          type: 'FULL_TIME',
          description: 'We are looking for an experienced Full Stack Developer to join our growing team...',
          requirements: '• 5+ years of experience with React and Node.js\n• Strong understanding of database design\n• Experience with cloud platforms (AWS/Azure)\n• Excellent problem-solving skills',
          postedAt: '2024-02-15T10:00:00Z',
        },
        {
          id: 2,
          title: 'UI/UX Designer',
          department: 'Design',
          location: 'New York',
          type: 'FULL_TIME',
          description: 'Join our creative team to design beautiful and intuitive user experiences...',
          requirements: '• 3+ years of UI/UX design experience\n• Proficiency in Figma and Adobe Creative Suite\n• Strong portfolio demonstrating user-centered design\n• Experience with design systems',
          postedAt: '2024-02-10T10:00:00Z',
        },
        {
          id: 3,
          title: 'DevOps Engineer',
          department: 'Engineering',
          location: 'Remote',
          type: 'FULL_TIME',
          description: 'Help us build and maintain our cloud infrastructure and CI/CD pipelines...',
          requirements: '• Experience with AWS/Azure/GCP\n• Knowledge of Docker and Kubernetes\n• Familiarity with CI/CD tools (Jenkins/GitHub Actions)\n• Infrastructure as Code experience',
          postedAt: '2024-02-05T10:00:00Z',
        },
        {
          id: 4,
          title: 'Mobile Developer (React Native)',
          department: 'Engineering',
          location: 'San Francisco',
          type: 'FULL_TIME',
          description: 'Build cross-platform mobile applications using React Native...',
          requirements: '• 3+ years React Native experience\n• Knowledge of native iOS/Android development\n• Experience with state management (Redux/MobX)\n• Published apps on App Store/Google Play',
          postedAt: '2024-02-01T10:00:00Z',
        },
        {
          id: 5,
          title: 'Data Scientist',
          department: 'Data Science',
          location: 'Remote',
          type: 'FULL_TIME',
          description: 'Apply machine learning and statistical analysis to solve complex business problems...',
          requirements: '• Master\'s/PhD in Computer Science, Statistics, or related field\n• Experience with Python and ML frameworks\n• Strong background in statistics\n• Experience with big data technologies',
          postedAt: '2024-01-28T10:00:00Z',
        },
        {
          id: 6,
          title: 'QA Engineer',
          department: 'Quality Assurance',
          location: 'Austin',
          type: 'FULL_TIME',
          description: 'Ensure the quality of our software through comprehensive testing...',
          requirements: '• Experience with automated testing frameworks\n• Knowledge of CI/CD pipelines\n• Attention to detail\n• Excellent communication skills',
          postedAt: '2024-01-25T10:00:00Z',
        },
      ];
      setJobs(sampleJobs);
    } finally {
      setIsLoading(false);
    }
  };

  const getJobTypeColor = (type) => {
    switch(type) {
      case 'FULL_TIME': return 'bg-green-100 text-green-800';
      case 'PART_TIME': return 'bg-blue-100 text-blue-800';
      case 'CONTRACT': return 'bg-purple-100 text-purple-800';
      case 'INTERN': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
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
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Join Our <span className="text-primary-600">Team</span>
              </h1>
              <p className="text-lg text-secondary-600">
                We're always looking for passionate individuals to help us build the future of technology
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Why Join Nebulytix?</h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                We offer more than just a job - we offer a career with purpose
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Growth Opportunities',
                  description: 'Continuous learning and career advancement opportunities',
                  icon: '📈',
                },
                {
                  title: 'Work-Life Balance',
                  description: 'Flexible hours and remote work options',
                  icon: '⚖️',
                },
                {
                  title: 'Competitive Benefits',
                  description: 'Excellent compensation, health insurance, and perks',
                  icon: '🎯',
                },
                {
                  title: 'Innovative Culture',
                  description: 'Work with cutting-edge technologies and talented teams',
                  icon: '💡',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{item.title}</h3>
                  <p className="text-secondary-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-secondary-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-title">Open Positions</h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                Find your next role and join our team of innovators
              </p>
            </motion.div>

            {isLoading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Job Listings */}
                <div className="space-y-4">
                  {jobs.map((job) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      onClick={() => setSelectedJob(job)}
                      className={`bg-white rounded-xl shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedJob?.id === job.id ? 'ring-2 ring-primary-500' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-secondary-900">{job.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getJobTypeColor(job.type)}`}>
                          {job.type.replace('_', ' ')}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-secondary-600 text-sm">
                        <div className="flex items-center">
                          <HiOutlineBriefcase className="mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <HiOutlineLocationMarker className="mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <HiOutlineClock className="mr-1" />
                          Posted {new Date(job.postedAt).toLocaleDateString()}
                        </div>
                      </div>

                      <p className="text-secondary-600 line-clamp-2">{job.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Job Details */}
                <div className="lg:sticky lg:top-24 h-fit">
                  {selectedJob ? (
                    <Card>
                      <h3 className="text-2xl font-semibold text-secondary-900 mb-4">{selectedJob.title}</h3>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getJobTypeColor(selectedJob.type)}`}>
                          {selectedJob.type.replace('_', ' ')}
                        </span>
                        <span className="flex items-center text-secondary-600">
                          <HiOutlineBriefcase className="mr-1" />
                          {selectedJob.department}
                        </span>
                        <span className="flex items-center text-secondary-600">
                          <HiOutlineLocationMarker className="mr-1" />
                          {selectedJob.location}
                        </span>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-secondary-900 mb-2">Description</h4>
                        <p className="text-secondary-600">{selectedJob.description}</p>
                      </div>

                      <div className="mb-8">
                        <h4 className="font-semibold text-secondary-900 mb-2">Requirements</h4>
                        <p className="text-secondary-600 whitespace-pre-line">{selectedJob.requirements}</p>
                      </div>

                      <Link
                        to={`/contact?job=${selectedJob.id}`}
                        className="btn-primary w-full text-center"
                      >
                        Apply for this Position
                      </Link>
                    </Card>
                  ) : (
                    <Card className="text-center py-12">
                      <p className="text-secondary-500">Select a position to view details</p>
                    </Card>
                  )}
                </div>
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
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Send us your resume and we'll keep you in mind for future opportunities
              </p>
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors inline-block"
              >
                Send Your Resume
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Careers;