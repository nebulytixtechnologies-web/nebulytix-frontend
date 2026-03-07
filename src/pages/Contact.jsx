import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Contact from '../components/home/Contact';

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get('job');

  useEffect(() => {
    if (jobId) {
      // You can pre-fill the form or show a message
      console.log('Applying for job:', jobId);
    }
  }, [jobId]);

  return (
    <>
      <Helmet>
        <title>Contact Us - Nebulytix Technologies</title>
        <meta name="description" content="Get in touch with Nebulytix Technologies for your software development needs. We're here to help bring your ideas to life." />
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
                Get In <span className="text-primary-600">Touch</span>
              </h1>
              <p className="text-lg text-secondary-600">
                Have a project in mind? We'd love to hear about it. Contact us today for a free consultation.
              </p>
              {jobId && (
                <div className="mt-6 p-4 bg-primary-100 text-primary-800 rounded-lg">
                  You're applying for a position. Please mention the job title in your message.
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;