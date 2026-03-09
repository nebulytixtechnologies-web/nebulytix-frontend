import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';
import api from '../../services/api';

const contactInfo = [
  { icon: HiOutlineMail, title: 'Email Us', content: 'info@nebulytix.com', subContent: 'support@nebulytix.com', color: '#00e5ff' },
  { icon: HiOutlinePhone, title: 'Call Us', content: '+1 (555) 123-4567', subContent: 'Mon-Fri, 9am-6pm', color: '#a855f7' },
  { icon: HiOutlineLocationMarker, title: 'Visit Us', content: '123 Tech Street', subContent: 'Silicon Valley, CA 94025', color: '#00e5cc' },
  { icon: HiOutlineClock, title: 'Working Hours', content: 'Monday - Friday', subContent: '9:00 AM - 6:00 PM', color: '#e040fb' },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      await api.post('/public/leads/contact', { ...data, source: 'CONTACT_FORM' });
      toast.success("Thank you for contacting us! We'll get back to you soon.");
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = async () => {
    try {
      await api.post('/public/leads/whatsapp-click', { source: 'WHATSAPP_CLICK', pageUrl: window.location.href });
    } catch (_) { }
    window.open('https://wa.me/1234567890?text=Hi%2C%20I%27m%20interested%20in%20your%20services', '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      {/* Glow */}
      <div className="glow-orb" style={{ width: 400, height: 400, top: '10%', right: '-5%', background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)' }} />
      <div className="glow-orb" style={{ width: 300, height: 300, bottom: '10%', left: '-5%', background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1 rounded-full" style={{ color: 'var(--color-accent)', background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.2)' }}>
            Contact Us
          </span>
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Ready to start your next project? Contact us today for a free consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl p-5 flex items-start space-x-4"
                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(16px)' }}
              >
                <div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ background: `${info.color}20`, border: `1px solid ${info.color}40`, color: info.color }}
                >
                  <info.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold mb-0.5" style={{ color: 'var(--color-text-primary)' }}>{info.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{info.content}</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{info.subContent}</p>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={handleWhatsAppClick}
              className="w-full rounded-xl p-5 flex items-center justify-center space-x-3 transition-all duration-300 group"
              style={{ background: 'linear-gradient(135deg, #128c7e, #25d366)', boxShadow: '0 0 25px rgba(37,211,102,0.3)' }}
            >
              <FaWhatsapp size={26} className="group-hover:scale-110 transition-transform text-white" />
              <span className="font-semibold text-white">Chat on WhatsApp</span>
            </motion.button>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl p-8"
            style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(20px)' }}
          >
            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--color-text-primary)' }}>Send us a message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>Your Name *</label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>Your Email *</label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' } })}
                    className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>Phone Number</label>
                <input type="tel" {...register('phone')} className="input-field" placeholder="+1 234 567 8900" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>Service Interested In</label>
                <select {...register('serviceInterest')} className="input-field">
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Apps">Mobile Apps</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                  <option value="AI & Machine Learning">AI &amp; Machine Learning</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-secondary)' }}>Your Message *</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows="5"
                  className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;