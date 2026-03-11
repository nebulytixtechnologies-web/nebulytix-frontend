import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';
import { HiOutlineLightBulb, HiOutlineGlobeAlt, HiOutlineAcademicCap, HiOutlineChip, HiOutlineChartBar, HiOutlineRefresh, HiOutlineLink } from 'react-icons/hi';

const Services = () => {

  const PageHero = ({ title, accent, subtitle }) => (
    <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: 'var(--color-page-bg)' }}>
      <div className="glow-orb" style={{ width: 600, height: 600, top: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)' }} />
      <div className="container-custom relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <span className="section-eyebrow" style={{ color: 'var(--color-accent)', background: 'rgba(200,85,247,0.06)', border: '1px solid rgba(200,85,247,0.12)' }}>
            End-to-End Solutions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-6 mb-6" style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
            {title} <br /><span className="text-gradient" style={{ backgroundImage: 'linear-gradient(to right, #a855f7, #6366f1)' }}>{accent}</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );

  return (
    <>
      <Helmet>
        <title>Solutions & Services - Nebulytix Technologies</title>
        <meta name="description" content="Nebulytix delivers intelligent solutions that help organizations harness the power of artificial intelligence, transform digitally, and upskill their workforce." />
      </Helmet>
      <Navbar />
      <main>
        <PageHero
          title="Intelligent"
          accent="Solutions & Services"
          subtitle="Nebulytix delivers intelligent solutions that help organizations harness the power of artificial intelligence, digital transformation, and workforce enablement."
        />

        {/* Section 1: Intelligent Automation & AI Adoption */}
        <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-page-surface)' }}>
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>Intelligent <span className="text-gradient">Automation Applications</span></h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Nebulytix provides a comprehensive suite of AI automation platforms tailored for enterprise scale.
                By integrating intelligent automation into existing processes, enterprises can accelerate operations and reduce manual workloads.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Process Automation", desc: "Automate routine operations and eliminate manual, repetitive workflows.", icon: HiOutlineRefresh },
                { title: "Data Workflows", desc: "Streamline data processing and analytics workflows for faster insights.", icon: HiOutlineChartBar },
                { title: "Autonomous Agents", desc: "Deploy intelligent agents for complex decision-making and dynamic process execution.", icon: HiOutlineChip }
              ].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl text-center group hover:-translate-y-1 transition-transform duration-300"
                  style={{ background: '#ffffff', border: '1px solid rgba(168,85,247,0.1)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                  <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(168,85,247,0.1)', color: '#a855f7' }}>
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mt-20 max-w-6xl mx-auto items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Accelerating Enterprise AI Adoption</h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                  Adopting artificial intelligence at an enterprise scale requires strategy, platform capabilities, and integration expertise.
                </p>
                <p className="text-base leading-relaxed text-blue-600 font-medium">
                  From identifying high-impact use cases to deploying AI-driven systems, Nebulytix guides enterprises through every step of their AI adoption journey.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Business Process Optimization</h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                  Continuous optimization is essential for modern operations. Nebulytix combines AI-driven analytics with intelligent workflows to analyze operational data and identify opportunities for improvement.
                </p>
                <p className="text-base leading-relaxed text-purple-600 font-medium">
                  Our platform continuously learns from processes, enabling enterprises to refine operations and make real-time process adjustments.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Digital Transformation */}
        <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0a2560 0%, #0066ff 100%)' }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 inline-block"
                style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.15)' }}>
                Consulting Services
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Digital Transformation</h2>
              <p className="text-lg leading-relaxed text-blue-100">
                Digital transformation goes beyond adding new software—it requires a complete modernization of enterprise operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Modernizing Technology", desc: "Assess infrastructure, define transformation goals, and deploy platforms to support future growth.", icon: HiOutlineLightBulb },
                { title: "Cloud-Native Architecture", desc: "Migrate operations to adaptive cloud environments for resiliency, scalability, and security.", icon: HiOutlineGlobeAlt },
                { title: "Integration Strategies", desc: "Connect scattered platforms into unified intelligent systems, ensuring efficient data flow.", icon: HiOutlineLink }
              ].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-blue-100">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-white/80 font-semibold italic text-lg max-w-2xl mx-auto">
                "Our consulting teams collaborate directly with enterprise leaders to ensure that technology implementations drive measurable business success."
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: AI Upskilling Programs */}
        <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-page-bg)' }}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                  Workforce Enablement
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6" style={{ color: 'var(--color-text-primary)' }}>
                  AI Upskilling <span className="text-gradient">Programs</span>
                </h2>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Building Future-Ready Teams</h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  Technology alone cannot drive transformation without skilled professionals. Nebulytix AI Upskilling Programs are designed to provide teams with the knowledge and practical skills required to manage intelligent automation systems and digital platforms.
                </p>
                <p className="text-base leading-relaxed mb-8 font-medium" style={{ color: 'var(--color-text-primary)' }}>
                  We build capabilities within organizations so they can take full ownership of their technology initiatives.
                </p>

                <div className="p-6 rounded-2xl" style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                  <h4 className="font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Specialized Technology Training Areas:</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Understanding automation workflows",
                      "Adopting data-driven decision systems",
                      "Managing autonomous AI agents",
                      "Implementing enterprise transformation strategies"
                    ].map((area, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-primary-500" />
                        <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team Collaboration and Training" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent-500/20 blur-3xl rounded-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-page-surface)' }}>
          <div className="container-custom text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>Scale Your Digital Transformation</h2>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>Contact our specialists to discuss integration strategies and consulting solutions.</p>
              <Link to="/contact" className="btn-primary text-base px-10 py-4 shadow-xl shadow-blue-500/20">Schedule Consultation</Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Services;