import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { HiArrowRight, HiOutlineBookOpen, HiOutlineChartBar, HiOutlineLightningBolt } from 'react-icons/hi';

const blogs = [
    {
        category: 'AI Innovation',
        icon: HiOutlineLightningBolt,
        title: 'How Agentic AI is Redefining Enterprise Automation in 2025',
        excerpt: 'AI agents are no longer assistants — they are autonomous operators. Discover how leading enterprises are deploying agentic systems to automate entire business functions.',
        readTime: '8 min read',
        date: 'March 2025',
        color: 'var(--color-primary)',
    },
    {
        category: 'Digital Ecosystems',
        icon: HiOutlineChartBar,
        title: 'The Ecosystem Advantage: Why Platform-First Beats Product-First',
        excerpt: 'Organizations that adopt an ecosystem platform approach are outperforming traditional product-led models by 3x. Here is why and how to make the transition.',
        readTime: '6 min read',
        date: 'February 2025',
        color: 'var(--color-accent)',
    },
    {
        category: 'Automation Innovation',
        icon: HiOutlineLightningBolt,
        title: 'Intelligent Process Automation: Beyond RPA to AI-Native Workflows',
        excerpt: 'Traditional RPA has hit its ceiling. The future belongs to AI-native workflow automation that adapts, learns, and optimizes without human intervention.',
        readTime: '7 min read',
        date: 'February 2025',
        color: 'var(--color-text-primary)',
    },
    {
        category: 'Enterprise Technology',
        icon: HiOutlineBookOpen,
        title: 'Building an AI Center of Excellence: A Practical Enterprise Guide',
        excerpt: 'An AI Center of Excellence is the organizational engine that drives sustained AI adoption. This guide covers structure, talent, governance, and success metrics.',
        readTime: '10 min read',
        date: 'January 2025',
        color: 'var(--color-primary)',
    },
    {
        category: 'Digital Transformation',
        icon: HiOutlineChartBar,
        title: '5 Digital Transformation Pitfalls and How to Avoid Them',
        excerpt: 'Most digital transformation programs fail not because of technology but because of strategy and culture. Here are the five most common pitfalls and proven mitigation strategies.',
        readTime: '9 min read',
        date: 'January 2025',
        color: 'var(--color-accent)',
    },
    {
        category: 'AI Innovation',
        icon: HiOutlineLightningBolt,
        title: 'The AI Talent Gap: How Enterprises Can Build Internal AI Capability',
        excerpt: 'With global demand for AI talent outstripping supply by 10:1, organizations cannot hire their way to AI competency. Building internal capability is the only sustainable path.',
        readTime: '7 min read',
        date: 'December 2024',
        color: 'var(--color-text-primary)',
    },
];

const reports = [
    { title: 'State of Enterprise AI Adoption 2025', desc: 'Comprehensive analysis of AI adoption trends, investment patterns and ROI benchmarks across 500+ enterprise organizations globally.', pages: '42 pages', color: 'var(--color-primary)' },
    { title: 'Digital Ecosystem Intelligence Report', desc: 'How platform-driven ecosystems are outcompeting traditional enterprises and what it takes to build a winning ecosystem strategy.', pages: '36 pages', color: 'var(--color-accent)' },
    { title: 'Automation ROI Benchmark Study', desc: 'Data-driven analysis of automation ROI across industries, with benchmarks, case studies and implementation learnings from 200+ deployments.', pages: '28 pages', color: 'var(--color-text-primary)' },
];

const Insights = () => {
    return (
        <>
            <Helmet>
                <title>Insights & Thought Leadership - Nebulytix Technologies</title>
                <meta name="description" content="Nebulytix insights on AI innovation, digital ecosystems, automation, and enterprise technology trends. Reports, blogs and thought leadership by the Nebulytix team." />
            </Helmet>
            <Navbar />
            <main>
                {/* Hero */}
                <section className="pt-36 pb-24 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
                    <div className="glow-orb" style={{ width: 700, height: 600, top: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(26,95,255,0.1) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>Thought Leadership</span>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-6 leading-tight"
                            style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}>
                            Insights & <span className="text-gradient">Thought Leadership</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                            AI transformation insights, digital ecosystem research, and automation innovation perspectives from the Nebulytix team.
                        </motion.p>
                    </div>
                </section>

                {/* Blog Articles */}
                <section className="py-20" style={{ background: 'var(--color-bg-surface)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>AI Innovation Blog</span>
                            <h2 className="section-title mt-3">Latest <span className="text-gradient">Perspectives</span></h2>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {blogs.map((b, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                    className="card flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer" style={{ border: '1px solid rgba(0,102,255,0.08)' }}>
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: `${b.color}10`, color: b.color, border: `1px solid ${b.color}20` }}>{b.category}</span>
                                        </div>
                                        <h3 className="text-sm font-bold mb-2 leading-snug" style={{ color: 'var(--color-text-primary)' }}>{b.title}</h3>
                                        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{b.excerpt}</p>
                                    </div>
                                    <div className="mt-auto flex items-center justify-between text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                        <span>{b.date}</span>
                                        <span>{b.readTime}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Research Reports */}
                <section className="py-20" style={{ background: 'var(--color-bg)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                            <span className="section-eyebrow" style={{ color: 'var(--color-accent)', background: 'rgba(0,200,255,0.07)', border: '1px solid rgba(0,200,255,0.15)' }}>Research</span>
                            <h2 className="section-title mt-3">Digital Transformation <span className="text-gradient">Reports</span></h2>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {reports.map((r, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="card flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300" style={{ borderLeft: `4px solid ${r.color}`, border: '1px solid rgba(0,102,255,0.08)' }}>
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: `${r.color}10`, color: r.color, border: `1px solid ${r.color}20` }}>Report · {r.pages}</span>
                                        <h3 className="text-sm font-bold mt-3 mb-2" style={{ color: 'var(--color-text-primary)' }}>{r.title}</h3>
                                        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{r.desc}</p>
                                    </div>
                                    <Link to="/contact" className="mt-auto inline-flex items-center gap-1 text-xs font-semibold" style={{ color: r.color }}>
                                        Request Report <HiArrowRight size={12} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technology Trends */}
                <section className="py-20" style={{ background: 'var(--color-bg-surface)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                            <h2 className="section-title">Technology <span className="text-gradient">Trends We Track</span></h2>
                            <p className="section-subtitle max-w-lg mx-auto">The technology shifts shaping the future of enterprise AI and digital ecosystems.</p>
                        </motion.div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {['Agentic AI', 'Multimodal Models', 'Digital Twins', 'AI Governance', 'Edge Intelligence', 'Quantum Computing'].map((trend, i) => (
                                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                    className="card text-center p-4 hover:shadow-md transition-shadow duration-200" style={{ border: '1px solid rgba(0,102,255,0.08)' }}>
                                    <p className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>{trend}</p>
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

export default Insights;
