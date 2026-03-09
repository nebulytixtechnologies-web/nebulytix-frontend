import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HiOutlineAcademicCap,
  HiOutlineChip,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
} from 'react-icons/hi';

const solutions = [
  {
    icon: HiOutlineAcademicCap,
    title: 'AI Upskilling',
    description: 'Training enterprises and professionals in next-generation AI capabilities — from foundations to advanced certification.',
    path: '/solutions/ai-upskilling',
    color: 'var(--color-primary)',
  },
  {
    icon: HiOutlineChip,
    title: 'AI Automation Services',
    description: 'Implementing intelligent automation across business processes — workflows, agents, and decision systems.',
    path: '/solutions/ai-automation',
    color: 'var(--color-accent)',
  },
  {
    icon: HiOutlineGlobeAlt,
    title: 'Digital Transformation Consulting',
    description: 'Helping organizations redesign operations using modern technology platforms and cloud-native architectures.',
    path: '/solutions/digital-transformation',
    color: 'var(--color-text-primary)',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Partner Product Promotion',
    description: 'Promoting partner solutions through the Nebulytix enterprise ecosystem — joint selling, integrations, and co-innovation.',
    path: '/partners',
    color: 'var(--color-primary)',
  },
];

const Solutions = () => {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-eyebrow" style={{ color: 'var(--color-accent)', background: 'rgba(0,200,255,0.07)', border: '1px solid rgba(0,200,255,0.15)' }}>
            Solutions
          </span>
          <h2 className="section-title">Solutions <span className="text-gradient">Snapshot</span></h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Four core solution areas driving measurable transformation for enterprises and partners worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((sol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="card group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col gap-4"
              style={{ border: '1px solid rgba(0,102,255,0.07)' }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-1 transition-all duration-200 group-hover:scale-110"
                style={{ background: `${sol.color}10`, color: sol.color }}
              >
                <sol.icon size={18} />
              </div>
              <h3 className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                {sol.title}
              </h3>
              <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--color-text-secondary)' }}>
                {sol.description}
              </p>
              <Link
                to={sol.path}
                className="text-xs font-semibold mt-auto inline-flex items-center gap-1 transition-colors duration-200"
                style={{ color: sol.color }}
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;