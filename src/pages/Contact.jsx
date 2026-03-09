import React, { useEffect } from 'react';
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
    if (jobId) console.log('Applying for job:', jobId);
  }, [jobId]);

  return (
    <>
      <Helmet>
        <title>Contact Us - Nebulytix Technologies</title>
        <meta name="description" content="Get in touch with Nebulytix Technologies for your software development needs. We're here to help bring your ideas to life." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
          <div className="glow-orb" style={{ width: 600, height: 600, top: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(0,229,255,0.18) 0%, transparent 70%)' }} />
          <div className="container-custom relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                Get In <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Have a project in mind? We&apos;d love to hear about it. Contact us today for a free consultation.
              </p>
              {jobId && (
                <div className="mt-6 p-4 rounded-xl text-sm font-medium"
                  style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.35)', color: 'var(--color-accent)' }}>
                  You're applying for a position. Please mention the job title in your message.
                </div>
              )}
            </motion.div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;