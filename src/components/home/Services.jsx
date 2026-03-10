import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const solutions = [
  {
    title: 'AI Upskilling',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
    path: '/solutions/ai-upskilling',
  },
  {
    title: 'AI Automation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    path: '/solutions/ai-automation',
    isSmall: true, // to slightly change height or layout if needed
  },
  {
    title: 'Digital Consulting',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    path: '/solutions/digital-transformation',
  },
  {
    title: 'Product Promotion',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
    path: '/partners',
  },
];

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      {/* Background network lines if needed */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, var(--color-primary) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: 'var(--color-text-primary)' }}>SERVICES</span>
              <div className="w-16 h-[2px]" style={{ background: 'var(--color-primary)' }} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>End-to-End <br />Solutions</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              Nebulytix provides end-to-end solutions that help organizations adopt emerging technologies and scale innovation across their entire ecosystem.
            </p>

            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-3" style={{ color: 'var(--color-primary)' }}>
              Explore All Services <HiArrowRight />
            </Link>
          </motion.div>

          {/* Right Side: Image Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">

              {/* Column 1 */}
              <div className="flex flex-col gap-4 lg:gap-6 pt-0 sm:pt-8">
                {solutions.slice(0, 2).map((sol, index) => (
                  <motion.Link
                    key={index}
                    to={sol.path}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group rounded-3xl overflow-hidden shadow-lg block h-[260px] lg:h-[300px]"
                  >
                    <img src={sol.image} alt={sol.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{sol.title}</h3>
                    </div>
                  </motion.Link>
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4 lg:gap-6 pb-0 sm:pb-8">
                {solutions.slice(2, 4).map((sol, index) => (
                  <motion.Link
                    key={index}
                    to={sol.path}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 2) * 0.1 }}
                    className="relative group rounded-3xl overflow-hidden shadow-lg block h-[260px] lg:h-[300px]"
                  >
                    <img src={sol.image} alt={sol.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{sol.title}</h3>
                    </div>
                  </motion.Link>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;