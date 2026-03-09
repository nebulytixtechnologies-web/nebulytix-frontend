import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { HiArrowRight } from 'react-icons/hi';

const industries = [
    {
        emoji: '🏥',
        title: 'Healthcare',
        subtitle: 'Intelligent Health Systems',
        desc: 'AI-powered clinical workflows, intelligent patient engagement, predictive diagnostics, and healthcare data interoperability platforms.',
        useCases: ['Clinical AI & Diagnostics', 'Patient Journey Automation', 'Healthcare Data Integration', 'Regulatory Compliance Automation'],
        color: 'var(--color-primary)',
    },
    {
        emoji: '🏦',
        title: 'Financial Services',
        subtitle: 'Smart Finance Operations',
        desc: 'Risk intelligence, fraud detection, automated compliance, and AI-driven customer advisory services for modern financial institutions.',
        useCases: ['AI-Powered Risk Management', 'Fraud Detection Systems', 'Automated AML & Compliance', 'Intelligent Customer Advisory'],
        color: 'var(--color-accent)',
    },
    {
        emoji: '🏛️',
        title: 'Government & Public Sector',
        subtitle: 'Digital Government Solutions',
        desc: 'Modern e-government platforms, intelligent citizen services, data-driven policy analytics, and secure digital infrastructure for public organizations.',
        useCases: ['Citizen Service Automation', 'Policy Analytics Platforms', 'Secure Government Data Systems', 'Digital Identity Management'],
        color: 'var(--color-text-primary)',
    },
    {
        emoji: '🎓',
        title: 'Education',
        subtitle: 'AI-Enhanced Learning',
        desc: 'Personalized learning platforms, AI tutoring systems, institutional data analytics, and digital campus transformation for education providers.',
        useCases: ['Adaptive Learning Platforms', 'Student Success Analytics', 'Administrative Process Automation', 'Digital Campus Infrastructure'],
        color: 'var(--color-primary)',
    },
    {
        emoji: '🛒',
        title: 'Retail & Commerce',
        subtitle: 'Intelligent Commerce Platforms',
        desc: 'AI-driven demand forecasting, personalized commerce experiences, supply chain intelligence, and omnichannel customer engagement.',
        useCases: ['Demand Forecasting AI', 'Personalization Engines', 'Omnichannel Commerce', 'Inventory Optimization'],
        color: 'var(--color-accent)',
    },
    {
        emoji: '⚙️',
        title: 'Enterprise Technology',
        subtitle: 'Enterprise AI Transformation',
        desc: 'Full-scale enterprise AI adoption, intelligent platform modernization, and AI-driven operational excellence for technology organizations.',
        useCases: ['Platform Modernization', 'AI Operations (AIOps)', 'Enterprise Data Platform', 'Developer AI Tooling'],
        color: 'var(--color-text-primary)',
    },
];

const Industries = () => {
    return (
        <>
            <Helmet>
                <title>Industries We Serve - Nebulytix Technologies</title>
                <meta name="description" content="Nebulytix serves Healthcare, Financial Services, Government, Education, Retail and Enterprise Technology with tailored AI automation and digital transformation solutions." />
            </Helmet>
            <Navbar />
            <main>
                {/* Hero */}
                <section className="pt-36 pb-24 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
                    <div className="glow-orb" style={{ width: 700, height: 600, top: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(26,95,255,0.1) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>Industries</span>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-6 leading-tight"
                            style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}>
                            Industries We <span className="text-gradient">Serve</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                            Deep domain expertise combined with cutting-edge AI capabilities — delivering industry-specific transformation that creates lasting competitive advantage.
                        </motion.p>
                    </div>
                </section>

                {/* Industries Grid */}
                <section className="py-20" style={{ background: 'var(--color-bg-surface)' }}>
                    <div className="container-custom">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {industries.map((ind, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="card flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ borderTop: `3px solid ${ind.color}`, border: '1px solid rgba(0,102,255,0.08)' }}>
                                    <div>
                                        <span className="text-3xl mb-3 block">{ind.emoji}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: `${ind.color}10`, color: ind.color }}>{ind.subtitle}</span>
                                        <h2 className="text-lg font-bold mt-2 mb-2" style={{ color: 'var(--color-text-primary)' }}>{ind.title}</h2>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{ind.desc}</p>
                                    </div>
                                    <div className="mt-auto">
                                        <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: ind.color }}>Key Use Cases</p>
                                        <ul className="space-y-1.5">
                                            {ind.useCases.map((uc, ui) => (
                                                <li key={ui} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                                                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: ind.color }} />
                                                    {uc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
                    <div className="glow-orb" style={{ width: 600, height: 500, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(0,102,255,0.07) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: 'var(--color-text-primary)' }}>
                                Don't See Your Industry?
                            </h2>
                            <p className="mb-8 text-base" style={{ color: 'var(--color-text-secondary)' }}>
                                Our AI and digital transformation capabilities are adaptable across sectors. Let's discuss how Nebulytix can solve your unique challenges.
                            </p>
                            <Link to="/contact" className="btn-primary px-10 py-4 text-sm inline-flex items-center gap-2">
                                Talk to Our Industry Experts <HiArrowRight />
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Industries;
