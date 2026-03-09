import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Card from '../components/common/Card';
import {
  HiOutlineCode, HiOutlineDeviceMobile, HiOutlineCloud, HiOutlineChip,
  HiOutlineChartBar, HiOutlineShieldCheck, HiOutlineDatabase, HiOutlineCube, HiOutlineSparkles
} from 'react-icons/hi';

const services = [
  { icon: HiOutlineCode, title: 'Web Development', description: 'Custom web applications built with modern frameworks like React, Vue, Angular, and Spring Boot.', features: ['Single Page Applications', 'E-commerce Platforms', 'Content Management Systems', 'Progressive Web Apps', 'RESTful APIs', 'Microservices Architecture'], iconColor: '#00e5ff', iconBg: 'rgba(0,229,255,0.12)', iconBorder: 'rgba(0,229,255,0.3)' },
  { icon: HiOutlineDeviceMobile, title: 'Mobile App Development', description: 'Native and cross-platform mobile applications for iOS and Android devices.', features: ['iOS Development (Swift)', 'Android Development (Kotlin)', 'Cross-platform (React Native, Flutter)', 'Mobile UI/UX Design', 'App Store Optimization', 'Push Notifications'], iconColor: '#a855f7', iconBg: 'rgba(168,85,247,0.12)', iconBorder: 'rgba(168,85,247,0.3)' },
  { icon: HiOutlineCloud, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure on AWS, Azure, and Google Cloud.', features: ['Cloud Migration', 'Infrastructure as Code', 'Serverless Architecture', 'Container Orchestration', 'Cloud Security', 'Cost Optimization'], iconColor: '#00e5cc', iconBg: 'rgba(0,229,204,0.12)', iconBorder: 'rgba(0,229,204,0.3)' },
  { icon: HiOutlineChip, title: 'AI & Machine Learning', description: 'Intelligent solutions powered by cutting-edge AI and machine learning algorithms.', features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Recommendation Systems', 'Chatbots & Virtual Assistants', 'Data Science Consulting'], iconColor: '#e040fb', iconBg: 'rgba(224,64,251,0.12)', iconBorder: 'rgba(224,64,251,0.3)' },
  { icon: HiOutlineChartBar, title: 'DevOps Consulting', description: 'Streamline your development and deployment processes with DevOps practices.', features: ['CI/CD Pipeline Setup', 'Infrastructure Automation', 'Monitoring & Logging', 'Performance Optimization', 'Security Integration', 'Kubernetes Management'], iconColor: '#a855f7', iconBg: 'rgba(124,58,237,0.12)', iconBorder: 'rgba(124,58,237,0.3)' },
  { icon: HiOutlineShieldCheck, title: 'Cybersecurity', description: 'Protect your applications with advanced security measures and best practices.', features: ['Security Audits', 'Penetration Testing', 'Vulnerability Assessment', 'Identity Management', 'Data Encryption', 'Compliance Consulting'], iconColor: '#00e5ff', iconBg: 'rgba(0,229,255,0.12)', iconBorder: 'rgba(0,229,255,0.3)' },
  { icon: HiOutlineDatabase, title: 'Database Solutions', description: 'Design and optimize database systems for performance and scalability.', features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery', 'Data Warehousing', 'Real-time Analytics'], iconColor: '#e040fb', iconBg: 'rgba(224,64,251,0.12)', iconBorder: 'rgba(224,64,251,0.3)' },
  { icon: HiOutlineCube, title: 'Blockchain Development', description: 'Build decentralized applications and smart contracts on blockchain platforms.', features: ['Smart Contracts', 'DApp Development', 'NFT Platforms', 'DeFi Solutions', 'Cryptocurrency Integration', 'Blockchain Consulting'], iconColor: '#00e5cc', iconBg: 'rgba(0,229,204,0.12)', iconBorder: 'rgba(0,229,204,0.3)' },
  { icon: HiOutlineSparkles, title: 'UI/UX Design', description: 'Create beautiful and intuitive user experiences that engage and convert.', features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing', 'Design Systems'], iconColor: '#a855f7', iconBg: 'rgba(168,85,247,0.12)', iconBorder: 'rgba(168,85,247,0.3)' },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Nebulytix Technologies</title>
        <meta name="description" content="Explore our comprehensive software development services including web development, mobile apps, cloud solutions, AI, and more." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
          <div className="glow-orb" style={{ width: 600, height: 600, top: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)' }} />
          <div className="container-custom relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                We offer end-to-end software development services to help businesses innovate and scale
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative" style={{ background: 'var(--color-bg-surface)' }}>
          <div className="glow-orb" style={{ width: 400, height: 400, bottom: '10%', right: '-5%', background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)' }} />
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 3) * 0.1 }}>
                  <Card className="h-full">
                    {/* Icon */}
                    <div className="inline-flex p-4 rounded-2xl mb-5 transition-transform duration-300 hover:scale-110"
                      style={{ background: service.iconBg, border: `1px solid ${service.iconBorder}`, color: service.iconColor, boxShadow: `0 0 18px ${service.iconBorder}` }}>
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{service.title}</h3>
                    <p className="mb-5" style={{ color: 'var(--color-text-secondary)' }}>{service.description}</p>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider" style={{ color: service.iconColor }}>Key Features</h4>
                    <ul className="space-y-1.5 mb-6">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                          <span className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" style={{ background: service.iconColor }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-flex items-center text-sm font-semibold transition-all hover:gap-2" style={{ color: service.iconColor }}>
                      Get Started
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
          <div className="glow-orb" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 65%)' }} />
          <div className="container-custom text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>Ready to Start Your Project?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>Let's discuss how we can help bring your ideas to life</p>
              <Link to="/contact" className="btn-primary text-base px-8 py-4">Get a Free Consultation</Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;