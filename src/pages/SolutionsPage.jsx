import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { HiOutlineChip, HiOutlineGlobeAlt, HiOutlineAcademicCap, HiOutlineLightningBolt, HiArrowRight } from 'react-icons/hi';

const automationUseCases = [
    { title: 'Document Intelligence', desc: 'Automated extraction, classification and routing of enterprise documents.', icon: '📄' },
    { title: 'Customer Service Automation', desc: 'AI agents handling inquiries, escalations and resolutions autonomously.', icon: '🤖' },
    { title: 'Financial Process Automation', desc: 'Invoice processing, reconciliation, and financial reporting without manual effort.', icon: '💰' },
    { title: 'HR & Talent Automation', desc: 'Resume screening, onboarding, and employee self-service powered by AI.', icon: '👥' },
    { title: 'Supply Chain Intelligence', desc: 'Demand forecasting, procurement automation, and logistics optimization.', icon: '🚚' },
    { title: 'IT Operations Automation', desc: 'Incident management, infrastructure monitoring, and auto-remediation.', icon: '⚙️' },
];

const adoptionStages = [
    { stage: 'Explore', title: 'AI Discovery & Readiness Assessment', desc: 'Evaluate your organization\'s readiness for AI adoption and identify high-impact automation opportunities.' },
    { stage: 'Pilot', title: 'Proof of Concept Deployment', desc: 'Rapidly deploy targeted AI pilots in 2–4 weeks to validate business value before scaling.' },
    { stage: 'Scale', title: 'Enterprise-Wide AI Rollout', desc: 'Scale proven AI solutions across the organization with change management and training support.' },
    { stage: 'Optimize', title: 'Continuous AI Improvement', desc: 'Monitor performance, retrain models, and continuously expand AI capabilities based on real outcomes.' },
];

const SolutionsPage = () => {
    return (
        <>
            <Helmet>
                <title>Solutions - Nebulytix Technologies</title>
                <meta name="description" content="Nebulytix solutions for automation, enterprise AI adoption and business process optimization. Explore how we help organizations transform operations with AI." />
            </Helmet>
            <Navbar />
            <main>
                {/* Hero */}
                <section className="pt-36 pb-24 relative overflow-hidden" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="glow-orb" style={{ width: 700, height: 600, top: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(26,95,255,0.1) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>Solutions</span>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-6 leading-tight"
                            style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}>
                            Enterprise <span className="text-gradient">AI Solutions</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                            Comprehensive solutions spanning automation, digital transformation, AI upskilling, and partner product promotion — all delivered through the Nebulytix AI ecosystem.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="btn-primary px-8 py-3 text-sm flex items-center gap-2">Get a Solution Consultation <HiArrowRight /></Link>
                            <Link to="/partners" className="btn-secondary px-8 py-3 text-sm">Become a Partner</Link>
                        </motion.div>
                    </div>
                </section>

                {/* Solution Areas */}
                <section className="py-20" style={{ background: 'var(--color-page-surface)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
                            <h2 className="section-title">Our Solution <span className="text-gradient">Portfolio</span></h2>
                            <p className="section-subtitle max-w-xl mx-auto">Four core solution areas that drive measurable transformation for enterprise clients and partners.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { icon: HiOutlineChip, title: 'AI Upskilling', path: '/solutions/ai-upskilling', desc: 'Training enterprises and professionals in next-generation AI capabilities — from executive workshops to full certification programs.', tags: ['Enterprise Training', 'Certification', 'AI Literacy'], color: 'var(--color-primary)' },
                                { icon: HiOutlineLightningBolt, title: 'AI Automation Services', path: '/solutions/ai-automation', desc: 'Implementing intelligent automation across business processes — from document handling to end-to-end workflow orchestration.', tags: ['Process Automation', 'AI Agents', 'Workflow Engine'], color: 'var(--color-accent)' },
                                { icon: HiOutlineGlobeAlt, title: 'Digital Transformation Consulting', path: '/solutions/digital-transformation', desc: 'Helping organizations redesign operations using modern platforms — from legacy modernization to cloud-native architecture.', tags: ['Enterprise Modernization', 'Consulting', 'Technology Integration'], color: 'var(--color-text-primary)' },
                                { icon: HiOutlineAcademicCap, title: 'Partner Product Promotion', path: '/partners', desc: 'Promoting partner solutions across the Nebulytix enterprise ecosystem — connecting innovative products with enterprise buyers.', tags: ['Partner Ecosystem', 'Co-selling', 'Joint Promotion'], color: 'var(--color-primary)' },
                            ].map((sol, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="card flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ borderLeft: `4px solid ${sol.color}`, border: '1px solid rgba(0,102,255,0.08)' }}>
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${sol.color}12`, color: sol.color }}>
                                        <sol.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{sol.title}</h3>
                                        <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>{sol.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {sol.tags.map((tag, ti) => (
                                                <span key={ti} className="text-[10px] font-semibold px-2 py-0.5 rounded" style={{ background: `${sol.color}08`, color: sol.color, border: `1px solid ${sol.color}20` }}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <Link to={sol.path} className="mt-auto inline-flex items-center gap-1 text-xs font-semibold" style={{ color: sol.color }}>
                                        Learn More <HiArrowRight size={12} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Automation Use Cases */}
                <section className="py-20" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                            <span className="section-eyebrow" style={{ color: 'var(--color-accent)', background: 'rgba(0,200,255,0.07)', border: '1px solid rgba(0,200,255,0.15)' }}>Automation</span>
                            <h2 className="section-title mt-3">Automation <span className="text-gradient">Use Cases</span></h2>
                            <p className="section-subtitle max-w-xl">Where Nebulytix automation solutions deliver measurable ROI for enterprise clients.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {automationUseCases.map((uc, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                    className="card hover:-translate-y-1 transition-all duration-200" style={{ border: '1px solid rgba(0,102,255,0.08)' }}>
                                    <span className="text-2xl mb-3 block">{uc.icon}</span>
                                    <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{uc.title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{uc.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* AI Adoption Journey */}
                <section className="py-20" style={{ background: 'var(--color-page-surface)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
                            <h2 className="section-title">Enterprise AI <span className="text-gradient">Adoption Journey</span></h2>
                            <p className="section-subtitle max-w-xl mx-auto">A structured pathway from AI exploration to full enterprise-wide AI adoption.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {adoptionStages.map((stage, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="card flex flex-col gap-3" style={{ borderTop: '3px solid var(--color-primary)', border: '1px solid rgba(0,102,255,0.08)' }}>
                                    <span className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--color-primary)' }}>{stage.stage}</span>
                                    <h3 className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>{stage.title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{stage.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default SolutionsPage;
