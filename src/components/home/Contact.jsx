import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';
import api from '../../services/api';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      await api.post('/public/leads/contact', {
        ...data,
        source: 'CONTACT_FORM'
      });
      toast.success('Thank you for contacting us! We\'ll get back to you soon.');
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
      // Log the WhatsApp click
      await api.post('/public/leads/whatsapp-click', {
        source: 'WHATSAPP_CLICK',
        pageUrl: window.location.href
      });
      
      // Open WhatsApp
      window.open('https://wa.me/1234567890?text=Hi%2C%20I%27m%20interested%20in%20your%20services', '_blank');
    } catch (error) {
      // Still open WhatsApp even if logging fails
      window.open('https://wa.me/1234567890?text=Hi%2C%20I%27m%20interested%20in%20your%20services', '_blank');
    }
  };

  const contactInfo = [
    {
      icon: HiOutlineMail,
      title: 'Email Us',
      content: 'info@nebulytix.com',
      subContent: 'support@nebulytix.com',
    },
    {
      icon: HiOutlinePhone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      subContent: 'Mon-Fri, 9am-6pm',
    },
    {
      icon: HiOutlineLocationMarker,
      title: 'Visit Us',
      content: '123 Tech Street',
      subContent: 'Silicon Valley, CA 94025',
    },
    {
      icon: HiOutlineClock,
      title: 'Working Hours',
      content: 'Monday - Friday',
      subContent: '9:00 AM - 6:00 PM',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Ready to start your next project? Contact us today for a free consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary-50 rounded-xl p-6 flex items-start space-x-4"
              >
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                  <info.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">{info.title}</h3>
                  <p className="text-secondary-600">{info.content}</p>
                  <p className="text-sm text-secondary-500">{info.subContent}</p>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl p-6 flex items-center justify-center space-x-3 transition-colors group"
            >
              <FaWhatsapp size={28} className="group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Chat on WhatsApp</span>
            </motion.button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="input-field"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Service Interested In
                </label>
                <select
                  {...register('serviceInterest')}
                  className="input-field"
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Apps">Mobile Apps</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows="5"
                  className={`input-field resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;