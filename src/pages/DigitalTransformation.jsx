import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { HiOutlineGlobeAlt, HiOutlineRefresh, HiOutlineChartBar, HiOutlineLightningBolt, HiArrowRight } from 'react-icons/hi';

const frameworks = [
    { step: '01', title: 'Digital Maturity Assessment', desc: 'Evaluate your current digital capabilities, identify gaps and benchmark against industry leaders.' },
    { step: '02', title: 'Transformation Strategy Design', desc: 'Co-create a tailored roadmap that aligns technology investments with business outcomes.' },
    { step: '03', title: 'Platform Architecture & Integration', desc: 'Design modern, cloud-native architectures that eliminate silos and enable real-time data flow.' },
    { step: '04', title: 'Agile Implementation', desc: 'Deliver in rapid sprints, validating value at each stage with measurable KPIs.' },
    { step: '05', title: 'Change Management & Adoption', desc: 'Ensure organization-wide adoption through structured change management and enablement programs.' },
    { step: '06', title: 'Continuous Optimization', desc: 'Post-deployment monitoring, AI-driven optimization and ongoing advisory for sustained excellence.' },
];

const services = [
    { icon: HiOutlineGlobeAlt, title: 'Enterprise Consulting', desc: 'Strategic advisory across technology, operations and organizational design — bridging vision and execution.', color: 'var(--color-primary)' },
    { icon: HiOutlineRefresh, title: 'Legacy Modernization', desc: 'Transform monolithic systems into agile, cloud-native architectures without disrupting operations.', color: 'var(--color-accent)' },
    { icon: HiOutlineChartBar, title: 'Technology Integration', desc: 'Connect disparate systems and data sources into a unified, intelligent enterprise platform.', color: 'var(--color-text-primary)' },
    { icon: HiOutlineLightningBolt, title: 'Digital Service Delivery', desc: 'Design and deliver digital products, portals, and services that delight customers and drive revenue.', color: 'var(--color-primary)' },
];

const DigitalTransformation = () => {
    return (
        <>
            <Helmet>
                <title>Digital Transformation Services - Nebulytix Technologies</title>
                <meta name="description" content="Nebulytix Digital Transformation: enterprise consulting, legacy modernization, technology integration, and digital service delivery for modern organizations." />
            </Helmet>
            <Navbar />
            <main>
                {/* Hero */}
                <section className="pt-36 pb-24 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
                    <div className="glow-orb" style={{ width: 700, height: 700, top: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(0,200,255,0.1) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="section-eyebrow" style={{ color: 'var(--color-accent)', background: 'rgba(0,200,255,0.07)', border: '1px solid rgba(0,200,255,0.15)' }}>Solutions</span>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-6 leading-tight"
                            style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}>
                            Digital Transformation <span className="text-gradient">Services</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                            Helping organizations redesign their operations, modernize their technology, and deliver exceptional digital experiences — faster, leaner, and more intelligently.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="btn-primary px-8 py-3 text-sm flex items-center gap-2">Start Your Transformation <HiArrowRight /></Link>
                            <Link to="/solutions/ai-automation" className="btn-secondary px-8 py-3 text-sm">Explore AI Automation</Link>
                        </motion.div>
                    </div>
                </section>

                {/* Core Services */}
                <section className="py-20" style={{ background: 'var(--color-bg-surface)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
                            <h2 className="section-title">Our <span className="text-gradient">Consulting Services</span></h2>
                            <p className="section-subtitle max-w-xl mx-auto">End-to-end support for every stage of your digital transformation journey.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((s, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="card flex items-start gap-5 hover:shadow-lg transition-shadow duration-300" style={{ border: '1px solid rgba(0,102,255,0.08)' }}>
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${s.color}12`, color: s.color, border: `1px solid ${s.color}25` }}>
                                        <s.icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{s.title}</h3>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{s.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Enterprise Modernization Framework */}
                <section className="py-20" style={{ background: 'var(--color-bg)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>Methodology</span>
                            <h2 className="section-title mt-3">Enterprise Modernization <span className="text-gradient">Framework</span></h2>
                            <p className="section-subtitle max-w-xl">Our proven six-phase framework delivers transformation with reduced risk and accelerated time-to-value.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {frameworks.map((f, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                    className="card group hover:-translate-y-1 transition-all duration-200" style={{ border: '1px solid rgba(0,102,255,0.08)' }}>
                                    <span className="text-3xl font-black mb-3 block text-gradient opacity-30">{f.step}</span>
                                    <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{f.title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20" style={{ background: 'var(--color-bg-surface)' }}>
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <h2 className="text-3xl font-black mb-6 text-gradient">Why Clients Choose Nebulytix</h2>
                                <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                    We combine deep technology expertise with ecosystem collaboration to deliver transformation outcomes that last.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Faster digital transformation with proven frameworks',
                                        'Reduced implementation risk through iterative delivery',
                                        'Access to best-in-class technology partners',
                                        'Scalable AI-driven systems that grow with you',
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(0,102,255,0.1)', color: 'var(--color-primary)', fontSize: 10, fontWeight: 800 }}>✓</span>
                                            <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="btn-primary mt-8 inline-flex items-center gap-2 text-sm px-7 py-3">
                                    Talk to Our Experts <HiArrowRight />
                                </Link>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { val: '3x', label: 'Faster Delivery', color: 'var(--color-primary)' },
                                        { val: '60%', label: 'Cost Reduction', color: 'var(--color-accent)' },
                                        { val: '95%', label: 'Project Success Rate', color: 'var(--color-text-primary)' },
                                        { val: '50+', label: 'Global Clients', color: 'var(--color-primary)' },
                                    ].map((stat, i) => (
                                        <div key={i} className="card text-center p-8" style={{ borderTop: `3px solid ${stat.color}`, border: '1px solid rgba(0,102,255,0.08)' }}>
                                            <div className="text-3xl font-black mb-2 text-gradient">{stat.val}</div>
                                            <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default DigitalTransformation;
