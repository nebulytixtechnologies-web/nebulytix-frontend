import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Card from '../components/common/Card';
import { 
  HiOutlineCode, 
  HiOutlineDeviceMobile, 
  HiOutlineCloud, 
  HiOutlineChip,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineDatabase,
  HiOutlineCube,
  HiOutlineSparkles
} from 'react-icons/hi';

const Services = () => {
  const services = [
    {
      icon: HiOutlineCode,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Vue, Angular, and Spring Boot.',
      features: [
        'Single Page Applications',
        'E-commerce Platforms',
        'Content Management Systems',
        'Progressive Web Apps',
        'RESTful APIs',
        'Microservices Architecture'
      ],
      color: 'blue',
    },
    {
      icon: HiOutlineDeviceMobile,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      features: [
        'iOS Development (Swift)',
        'Android Development (Kotlin)',
        'Cross-platform (React Native, Flutter)',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Push Notifications'
      ],
      color: 'green',
    },
    {
      icon: HiOutlineCloud,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure on AWS, Azure, and Google Cloud.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Serverless Architecture',
        'Container Orchestration',
        'Cloud Security',
        'Cost Optimization'
      ],
      color: 'purple',
    },
    {
      icon: HiOutlineChip,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by cutting-edge AI and machine learning algorithms.',
      features: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Recommendation Systems',
        'Chatbots & Virtual Assistants',
        'Data Science Consulting'
      ],
      color: 'orange',
    },
    {
      icon: HiOutlineChartBar,
      title: 'DevOps Consulting',
      description: 'Streamline your development and deployment processes with DevOps practices.',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure Automation',
        'Monitoring & Logging',
        'Performance Optimization',
        'Security Integration',
        'Kubernetes Management'
      ],
      color: 'pink',
    },
    {
      icon: HiOutlineShieldCheck,
      title: 'Cybersecurity',
      description: 'Protect your applications with advanced security measures and best practices.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Vulnerability Assessment',
        'Identity Management',
        'Data Encryption',
        'Compliance Consulting'
      ],
      color: 'red',
    },
    {
      icon: HiOutlineDatabase,
      title: 'Database Solutions',
      description: 'Design and optimize database systems for performance and scalability.',
      features: [
        'Database Design',
        'Performance Tuning',
        'Data Migration',
        'Backup & Recovery',
        'Data Warehousing',
        'Real-time Analytics'
      ],
      color: 'indigo',
    },
    {
      icon: HiOutlineCube,
      title: 'Blockchain Development',
      description: 'Build decentralized applications and smart contracts on blockchain platforms.',
      features: [
        'Smart Contracts',
        'DApp Development',
        'NFT Platforms',
        'DeFi Solutions',
        'Cryptocurrency Integration',
        'Blockchain Consulting'
      ],
      color: 'teal',
    },
    {
      icon: HiOutlineSparkles,
      title: 'UI/UX Design',
      description: 'Create beautiful and intuitive user experiences that engage and convert.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems'
      ],
      color: 'amber',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Nebulytix Technologies</title>
        <meta name="description" content="Explore our comprehensive software development services including web development, mobile apps, cloud solutions, AI, and more." />
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
                Our <span className="text-primary-600">Services</span>
              </h1>
              <p className="text-lg text-secondary-600">
                We offer end-to-end software development services to help businesses innovate and scale
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className={`inline-flex p-4 rounded-2xl bg-${service.color}-100 text-${service.color}-600 mb-6`}>
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold text-secondary-900 mb-3">{service.title}</h3>
                    <p className="text-secondary-600 mb-6">{service.description}</p>
                    
                    <h4 className="font-semibold text-secondary-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-secondary-600">
                          <span className={`w-1.5 h-1.5 rounded-full bg-${service.color}-600 mr-2`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`inline-flex items-center text-${service.color}-600 font-semibold hover:underline`}
                    >
                      Get Started
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help bring your ideas to life
              </p>
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors inline-block"
              >
                Get a Free Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;