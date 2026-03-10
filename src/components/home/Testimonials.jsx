import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineBadgeCheck, HiOutlineLibrary, HiOutlineCash, HiOutlineOfficeBuilding, HiOutlineAcademicCap, HiOutlineShoppingBag, HiOutlineChip } from 'react-icons/hi';

const Testimonials = () => {
  const achievements = [
    "Faster digital transformation initiatives",
    "Reduced implementation risk",
    "Access to trusted technology partners",
    "Scalable AI-driven systems and platforms"
  ];

  const industries = [
    { name: 'Healthcare', icon: HiOutlineLibrary },
    { name: 'Financial Services', icon: HiOutlineCash },
    { name: 'Government & Public Sector', icon: HiOutlineOfficeBuilding },
    { name: 'Education', icon: HiOutlineAcademicCap },
    { name: 'Retail', icon: HiOutlineShoppingBag },
    { name: 'Enterprise Technology', icon: HiOutlineChip }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      <div className="container-custom relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          {/* Why Organizations Choose Nebulytix */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
              Our Approach
            </span>
            <h2 className="section-title mt-3">Why Organizations <br /><span className="text-gradient">Choose Nebulytix</span></h2>
            <p className="text-base mb-8 leading-relaxed max-w-lg" style={{ color: 'var(--color-text-secondary)' }}>
              Enterprises choose Nebulytix because we combine technology expertise, scalable platforms, and a collaborative ecosystem approach.
            </p>

            <div className="rounded-3xl p-8" style={{ background: 'var(--color-bg-surface)', border: '1px solid rgba(0,102,255,0.08)' }}>
              <h4 className="font-bold text-lg mb-4" style={{ color: 'var(--color-text-primary)' }}>Our solutions help organizations achieve:</h4>
              <ul className="space-y-4">
                {achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiOutlineBadgeCheck className="shrink-0 mt-0.5 text-xl" style={{ color: 'var(--color-primary)' }} />
                    <span className="text-base font-medium" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image / Graphic placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-3xl overflow-hidden hidden lg:block"
            style={{ border: '1px solid rgba(0,102,255,0.1)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-cyan-500/20 mix-blend-multiply z-10" />
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Enterprise Technology Operations"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Industries We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-eyebrow" style={{ color: 'var(--color-accent)', background: 'rgba(0,200,255,0.06)', border: '1px solid rgba(0,200,255,0.12)' }}>
            Industries
          </span>
          <h2 className="section-title mt-3"><span className="text-gradient" style={{ backgroundImage: 'linear-gradient(to right, var(--color-accent), #00e5ff)' }}>Industries We Serve</span></h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: 'var(--color-text-secondary)' }}>
            Nebulytix delivers intelligent technology solutions across multiple industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
              style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors" style={{ background: 'rgba(0,102,255,0.05)', color: 'var(--color-primary)' }}>
                <ind.icon size={24} />
              </div>
              <h4 className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>{ind.name}</h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;