import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const solutions = [
  {
    title: 'AI & Machine Learning\nSolutions',
    image: '/services/ai_machine_learning.png',
    path: '/solutions/ai-machine-learning',
  },
  {
    title: 'AI Upskilling &\nWorkforce\nDevelopment',
    image: '/services/ai_upskilling.png',
    path: '/solutions/ai-upskilling',
  },
  {
    title: 'Digital\nTransformation\nServices',
    image: '/services/digital_transformation.png',
    path: '/solutions/digital-transformation',
  },
  {
    title: 'Technology\nStaffing\nSolutions',
    image: '/services/tech_staffing.png',
    path: '/solutions/tech-staffing',
  },
  {
    title: 'AI Automation\nServices',
    image: '/services/ai_automation.png',
    path: '/solutions/ai-automation',
  },
  {
    title: 'Technology\nIntegration\nServices',
    image: '/services/tech_integration.png',
    path: '/solutions/tech-integration',
  },
];

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#EAF6FF' }}>
      <div className="container-custom mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between">

          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[400px] flex-shrink-0"
          >
            <div className="relative mb-6">
              <h2 className="text-[48px] md:text-[56px] leading-tight font-normal text-black mb-[18px]">
                Services
              </h2>
              {/* Blue Outline Line from Figma */}
              <div
                className="w-48 h-0 absolute left-0"
                style={{ bottom: '-10px', outline: '3px #2076B3 solid', outlineOffset: '-1.5px', background: '#2076B3' }}
              />
            </div>

            <p className="text-[14px] md:text-[16px] text-black mt-10 leading-relaxed font-normal">
              From AI-driven automation to workforce capability development and technology integration, Nebulytix enables organizations to build efficient, future-ready digital ecosystems.
            </p>
          </motion.div>

          {/* Right Side: Staggered Image Grid */}
          <div className="flex-1 w-full overflow-x-auto pb-6 scrollbar-hide lg:overflow-visible flex items-center lg:justify-end">
            <div className="flex flex-col gap-6 min-w-max">
              {/* Row 1 */}
              <div className="flex gap-4 lg:gap-6 justify-start">
                {solutions.slice(0, 3).map((sol, index) => (
                  <motion.Link
                    key={index}
                    to={sol.path}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group rounded-[15px] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.15)] block w-[200px] h-[160px] sm:w-[220px] sm:h-[180px] lg:w-[240px] lg:h-[200px]"
                  >
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-300 group-hover:opacity-90" />
                    <div className="absolute inset-0 p-5 flex items-end">
                      <h3 className="text-sm lg:text-base font-bold text-white transition-opacity duration-300 drop-shadow-md">
                        {sol.title.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < sol.title.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </h3>
                    </div>
                  </motion.Link>
                ))}
              </div>

              {/* Row 2 - Staggered slightly to the right */}
              <div className="flex gap-4 lg:gap-6 justify-start ml-10 lg:ml-16">
                {solutions.slice(3, 6).map((sol, index) => (
                  <motion.Link
                    key={index}
                    to={sol.path}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 3) * 0.1 }}
                    className="relative group rounded-[15px] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.15)] block w-[200px] h-[160px] sm:w-[220px] sm:h-[180px] lg:w-[240px] lg:h-[200px]"
                  >
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-300 group-hover:opacity-90" />
                    <div className="absolute inset-0 p-5 flex items-end">
                      <h3 className="text-sm lg:text-base font-bold text-white transition-opacity duration-300 drop-shadow-md">
                        {sol.title.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < sol.title.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </h3>
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
