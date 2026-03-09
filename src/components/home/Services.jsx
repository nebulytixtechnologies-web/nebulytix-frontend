import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineCode, 
  HiOutlineDeviceMobile, 
  HiOutlineCloud, 
  HiOutlineChip,
  HiOutlineChartBar,
  HiOutlineShieldCheck 
} from 'react-icons/hi';
import Card from '../common/Card';

const Services = () => {
  const services = [
    {
      icon: HiOutlineCode,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Vue, and Spring Boot.',
      color: 'blue',
    },
    {
      icon: HiOutlineDeviceMobile,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      color: 'green',
    },
    {
      icon: HiOutlineCloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure on AWS, Azure, and Google Cloud.',
      color: 'purple',
    },
    {
      icon: HiOutlineChip,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by cutting-edge AI and ML algorithms.',
      color: 'orange',
    },
    {
      icon: HiOutlineChartBar,
      title: 'DevOps Consulting',
      description: 'Streamline your development and deployment processes with DevOps practices.',
      color: 'pink',
    },
    {
      icon: HiOutlineShieldCheck,
      title: 'Cybersecurity',
      description: 'Protect your applications with advanced security measures and best practices.',
      color: 'red',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We offer comprehensive software solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center group">
                <div className={`inline-flex p-4 rounded-2xl bg-${service.color}-100 text-${service.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-600">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}   
        </motion.div>
      </div>
    </section>
  );
};

export default Services;