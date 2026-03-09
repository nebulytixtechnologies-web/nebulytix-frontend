import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { HiOutlineAcademicCap, HiOutlineBadgeCheck, HiOutlineUserGroup, HiOutlineSparkles, HiArrowRight } from 'react-icons/hi';

const programs = [
    {
        icon: HiOutlineAcademicCap,
        title: 'Enterprise AI Foundations',
        badge: 'Certification',
        duration: '6 Weeks',
        audience: 'All Employees',
        desc: 'Build organization-wide AI literacy — helping every employee understand, adopt and collaborate with AI tools effectively.',
        modules: ['AI & Machine Learning Basics', 'Prompt Engineering', 'AI Tools for Productivity', 'Ethics & Responsible AI'],
        color: 'var(--color-primary)',
    },
    {
        icon: HiOutlineBadgeCheck,
        title: 'Professional AI Practitioner',
        badge: 'Advanced Certification',
        duration: '12 Weeks',
        audience: 'Professionals & Analysts',
        desc: 'Deep-dive training for business professionals who want to design, evaluate and lead AI-powered initiatives in their domain.',
        modules: ['AI Strategy & Business Cases', 'Data Analysis with AI', 'AI Project Management', 'AI Governance & Compliance'],
        color: 'var(--color-accent)',
    },
    {
        icon: HiOutlineSparkles,
        title: 'Corporate AI Capability Building',
        badge: 'Executive Program',
        duration: 'Custom',
        audience: 'Leadership Teams',
        desc: 'A bespoke program designed for C-suite and senior leadership to drive strategic AI adoption and build long-term AI competitive advantage.',
        modules: ['AI-Led Business Model Innovation', 'Enterprise AI Roadmap', 'Building AI Centers of Excellence', 'Change Management for AI'],
        color: 'var(--color-text-primary)',
    },
];

const AIUpskilling = () => {
    return (
        <>
            <Helmet>
                <title>AI Upskilling Programs - Nebulytix Technologies</title>
                <meta name="description" content="Enterprise AI training, professional certification programs, and corporate AI capability building by Nebulytix Technologies." />
            </Helmet>
            <Navbar />
            <main>
                {/* Hero */}
                <section className="pt-36 pb-24 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
                    <div className="glow-orb" style={{ width: 700, height: 600, top: '-20%', right: '-10%', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>Solutions</span>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-6 leading-tight"
                            style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}>
                            AI Upskilling <span className="text-gradient">Programs</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                            Training enterprises and professionals in next-generation AI capabilities — building the human foundation for your AI transformation.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="btn-primary px-8 py-3 text-sm flex items-center gap-2">Talk to Our Training Team <HiArrowRight /></Link>
                            <Link to="/solutions/ai-automation" className="btn-secondary px-8 py-3 text-sm">Explore AI Platform</Link>
                        </motion.div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-12" style={{ background: 'var(--color-bg-surface)' }}>
                    <div className="container-custom">
                        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
                            {[
                                { val: '10,000+', label: 'Professionals Trained' },
                                { val: '3', label: 'Certification Tracks' },
                                { val: '98%', label: 'Completion Rate' },
                                { val: '40+', label: 'Enterprise Clients' },
                            ].map((s, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="text-center">
                                    <div className="text-3xl font-black text-gradient mb-1">{s.val}</div>
                                    <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Programs */}
                <section className="py-20" style={{ background: 'var(--color-bg)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
                            <h2 className="section-title">Our <span className="text-gradient">Training Programs</span></h2>
                            <p className="section-subtitle max-w-xl mx-auto">Structured learning paths designed for every level of your organization.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {programs.map((p, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="card flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300" style={{ borderTop: `3px solid ${p.color}`, border: '1px solid rgba(0,102,255,0.08)' }}>
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${p.color}12`, color: p.color }}>
                                            <p.icon size={20} />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}25` }}>{p.badge}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>{p.title}</h3>
                                        <div className="flex gap-3 text-xs mb-3" style={{ color: 'var(--color-text-muted)' }}>
                                            <span>📅 {p.duration}</span>
                                            <span>👥 {p.audience}</span>
                                        </div>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{p.desc}</p>
                                    </div>
                                    <div className="mt-auto">
                                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: p.color }}>Modules</p>
                                        <ul className="space-y-1.5">
                                            {p.modules.map((m, mi) => (
                                                <li key={mi} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                                                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.color }} />
                                                    {m}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why AI Upskilling */}
                <section className="py-20" style={{ background: 'var(--color-bg-surface)' }}>
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <h2 className="text-3xl font-black mb-6 text-gradient">Why AI Upskilling Matters Now</h2>
                                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                                    Technology alone doesn't transform organizations — people do. Without AI-capable talent, even the best platforms underdeliver. Nebulytix bridges the gap between AI adoption and AI mastery.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Accelerate AI adoption across all business units',
                                        'Reduce dependency on external AI vendors long-term',
                                        'Build an internal AI-first culture of innovation',
                                        'Deliver measurable ROI from AI investments faster',
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(0,102,255,0.1)', color: 'var(--color-primary)', fontSize: 10, fontWeight: 800 }}>✓</span>
                                            <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="btn-primary mt-8 inline-flex items-center gap-2 text-sm px-7 py-3">
                                    Design Your Training Program <HiArrowRight />
                                </Link>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center justify-center">
                                <div className="w-full max-w-xs mx-auto space-y-4">
                                    <HiOutlineUserGroup size={80} className="mx-auto text-gradient" style={{ color: 'var(--color-primary)' }} />
                                    <div className="text-center">
                                        <div className="text-5xl font-black text-gradient mb-2">50K+</div>
                                        <div className="text-sm font-semibold" style={{ color: 'var(--color-text-muted)' }}>AI-skilled professionals by 2026 — our mission.</div>
                                    </div>
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

export default AIUpskilling;
