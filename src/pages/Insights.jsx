import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import {
    HiOutlineDocumentReport,
    HiOutlineLightBulb,
    HiOutlineTrendingUp,
    HiArrowRight,
    HiOutlineDownload,
    HiOutlineClock,
    HiOutlineCalendar
} from 'react-icons/hi';

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

const categories = [
    { id: 'all', label: 'All Insights', icon: null },
    { id: 'ai-innovation-blogs', label: 'AI Innovation Blogs', icon: HiOutlineLightBulb },
    { id: 'digital-transformation-reports', label: 'Digital Transformation Reports', icon: HiOutlineDocumentReport },
    { id: 'technology-trends', label: 'Technology Trends', icon: HiOutlineTrendingUp },
];

const insights = [
    // ────────────────────────── AI Innovation Blogs ────────────────────────── //
    {
        id: '1',
        type: 'ai-innovation-blogs',
        badge: 'Blog',
        title: 'Beyond Chatbots: Multi-Agent AI Architectures in the Enterprise',
        excerpt: 'Exploring how swarms of specialized AI agents are replacing single monolithic LLMs to handle complex, multi-step business workflows autonomously.',
        author: 'Dr. Sarah Chen',
        date: 'Oct 12, 2023',
        readTime: '6 min read',
        imageColor: 'linear-gradient(135deg, rgba(0,102,255,0.05) 0%, rgba(0,102,255,0.2) 100%)',
        accentColor: 'var(--color-primary)',
    },
    {
        id: '2',
        type: 'ai-innovation-blogs',
        badge: 'Blog',
        title: 'The Reality of RAG: Making Enterprise Search Hallucination-Free',
        excerpt: 'Retrieval-Augmented Generation is the industry standard for safe AI, but implementations often fail. Here is how to build resilient data pipelines for RAG.',
        author: 'Marcus Vance',
        date: 'Sep 28, 2023',
        readTime: '8 min read',
        imageColor: 'linear-gradient(135deg, rgba(0,200,255,0.05) 0%, rgba(0,200,255,0.2) 100%)',
        accentColor: 'var(--color-accent)',
    },
    {
        id: '3',
        type: 'ai-innovation-blogs',
        badge: 'Blog',
        title: 'Self-Healing Workflows: The Next Evolution of RPA',
        excerpt: 'Traditional RPA breaks when UIs change. AI-driven self-healing workflows dynamically adapt to interface updates without manual reprogramming.',
        author: 'Elena Rostova',
        date: 'Sep 15, 2023',
        readTime: '5 min read',
        imageColor: 'linear-gradient(135deg, rgba(5,24,58,0.05) 0%, rgba(5,24,58,0.2) 100%)',
        accentColor: 'var(--color-text-primary)',
    },

    // ───────────────── Digital Transformation Reports ───────────────── //
    {
        id: '4',
        type: 'digital-transformation-reports',
        badge: 'Whitepaper',
        title: 'State of Digital Modernization 2024: The AI Imperative',
        excerpt: 'Our comprehensive survey of 500+ enterprise CIOs reveals how cloud modernization budgets are rapidly shifting toward AI enablement platforms.',
        author: 'Nebulytix Research Institute',
        date: 'Nov 01, 2023',
        pages: '34 Pages',
        imageColor: 'linear-gradient(135deg, rgba(0,200,255,0.05) 0%, rgba(0,102,255,0.15) 100%)',
        accentColor: 'var(--color-primary)',
        download: true,
    },
    {
        id: '5',
        type: 'digital-transformation-reports',
        badge: 'Case Study Blueprint',
        title: 'Legacy to Edge: A Transformation Framework for Manufacturing',
        excerpt: 'A detailed breakdown of how migrating OT data to a scalable IT cloud environment enables predictive maintenance and 20% OEE improvement.',
        author: 'Industrial Tech Practice',
        date: 'Aug 22, 2023',
        pages: '18 Pages',
        imageColor: 'linear-gradient(135deg, rgba(200,200,200,0.1) 0%, rgba(100,100,100,0.2) 100%)',
        accentColor: 'var(--color-text-primary)',
        download: true,
    },
    {
        id: '6',
        type: 'digital-transformation-reports',
        badge: 'Industry Report',
        title: 'Composable Architecture: Designing for Perpetual Change',
        excerpt: 'Why rigid monolithic ERPs are giving way to Packaged Business Capabilities (PBCs), and how to assess your enterprise composability index.',
        author: 'David Thorne',
        date: 'Jul 10, 2023',
        pages: '22 Pages',
        imageColor: 'linear-gradient(135deg, rgba(0,102,255,0.05) 0%, rgba(0,200,255,0.2) 100%)',
        accentColor: 'var(--color-accent)',
        download: true,
    },

    // ────────────────────────── Technology Trends ────────────────────────── //
    {
        id: '7',
        type: 'technology-trends',
        badge: 'Trend Analysis',
        title: 'The Convergence of AI and Zero-Trust Security Models',
        excerpt: 'As AI threat vectors expand, traditional network perimeters are obsolete. Zero-Trust is no longer optional—it is the baseline for AI integration.',
        author: 'Cyber Systems Team',
        date: 'Nov 18, 2023',
        readTime: '7 min read',
        imageColor: 'linear-gradient(135deg, rgba(5,24,58,0.05) 0%, rgba(0,102,255,0.15) 100%)',
        accentColor: 'var(--color-text-primary)',
    },
    {
        id: '8',
        type: 'technology-trends',
        badge: 'Market Briefing',
        title: 'Edge AI: Processing Intelligence at the Source',
        excerpt: 'Bandwidth costs and latency are driving AI inference away from the central cloud. Exploring the hardware and ops models pushing AI to the edge.',
        author: 'Dr. Sarah Chen',
        date: 'Oct 05, 2023',
        readTime: '6 min read',
        imageColor: 'linear-gradient(135deg, rgba(0,102,255,0.05) 0%, rgba(0,200,255,0.15) 100%)',
        accentColor: 'var(--color-primary)',
    },
    {
        id: '9',
        type: 'technology-trends',
        badge: 'Tech Radar',
        title: 'Beyond 5G: The Connectivity Fabric required for Autonomous Logistics',
        excerpt: 'Assessing how Private 5G networks and mesh computing are forming the critical backbone for autonomous warehouse fleets and drone delivery.',
        author: 'Connectivity Practice',
        date: 'Aug 30, 2023',
        readTime: '9 min read',
        imageColor: 'linear-gradient(135deg, rgba(0,200,255,0.05) 0%, rgba(5,24,58,0.15) 100%)',
        accentColor: 'var(--color-accent)',
    },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────── */
const Insights = () => {
    const [activeTab, setActiveTab] = useState('all');

    const filteredInsights = activeTab === 'all'
        ? insights
        : insights.filter(item => item.type === activeTab);

    return (
        <>
            <Helmet>
                <title>Insights & Thought Leadership - Nebulytix Technologies</title>
                <meta name="description" content="Explore Nebulytix's latest thinking: AI innovation blogs, digital transformation reports, and emerging technology trends shaping the enterprise." />
            </Helmet>
            <Navbar />

            <main>
                {/* ── HERO ──────────────────────────────────────────── */}
                <section className="pt-36 pb-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
                    <div className="glow-orb" style={{ width: 800, height: 700, top: '-25%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(0,102,255,0.09) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                Research & Thinking
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-6 leading-tight"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            Insights & <span className="text-gradient">Thought Leadership</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="text-lg max-w-2xl mx-auto"
                            style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
                        >
                            Perspective and analysis from Nebulytix experts on AI strategy, enterprise modernization, and the forces reshaping global business.
                        </motion.p>
                    </div>
                </section>

                {/* ── CONTENT HUB ────────────────────────────────────── */}
                <section className="py-12 pb-24 relative" style={{ background: 'var(--color-bg-surface)' }}>
                    <div className="container-custom">

                        {/* Filter Tabs */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                                    style={{
                                        background: activeTab === cat.id ? 'var(--color-primary)' : '#ffffff',
                                        color: activeTab === cat.id ? '#ffffff' : 'var(--color-text-secondary)',
                                        border: `1px solid ${activeTab === cat.id ? 'var(--color-primary)' : 'rgba(0,102,255,0.15)'}`,
                                        boxShadow: activeTab === cat.id ? '0 4px 15px rgba(0,102,255,0.2)' : 'none'
                                    }}
                                >
                                    {cat.icon && <cat.icon className="text-base" />}
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Results Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence mode="popLayout">
                                {filteredInsights.map((item, index) => (
                                    <motion.div
                                        layout
                                        key={item.id}
                                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="group rounded-2xl overflow-hidden flex flex-col bg-white"
                                        style={{ border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.03)' }}
                                    >
                                        {/* Graphic Header Area */}
                                        <div className="h-44 relative flex items-center justify-center overflow-hidden" style={{ background: item.imageColor }}>
                                            <span
                                                className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded bg-white shadow-sm"
                                                style={{ color: item.accentColor }}
                                            >
                                                {item.badge}
                                            </span>

                                            {/* Abstract symbol based on type */}
                                            {item.type === 'ai-innovation-blogs' && <HiOutlineLightBulb className="text-6xl opacity-20" style={{ color: item.accentColor }} />}
                                            {item.type === 'digital-transformation-reports' && <HiOutlineDocumentReport className="text-6xl opacity-20" style={{ color: item.accentColor }} />}
                                            {item.type === 'technology-trends' && <HiOutlineTrendingUp className="text-6xl opacity-20" style={{ color: item.accentColor }} />}

                                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        {/* Content Body */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center gap-4 text-[11px] font-semibold mb-3 uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                                                <span className="flex items-center gap-1.5"><HiOutlineCalendar size={14} />{item.date}</span>
                                                <span className="flex items-center gap-1.5">
                                                    {item.download ? <HiOutlineDocumentReport size={14} /> : <HiOutlineClock size={14} />}
                                                    {item.pages || item.readTime}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-primary-600 transition-colors" style={{ color: 'var(--color-text-primary)' }}>
                                                {item.title}
                                            </h3>

                                            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                                                {item.excerpt}
                                            </p>

                                            <div className="mt-auto pt-4 border-t flex items-center justify-between" style={{ borderColor: 'rgba(0,102,255,0.06)' }}>
                                                <span className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>{item.author}</span>

                                                <button className="flex items-center gap-1.5 text-xs font-bold transition-all group-hover:gap-2" style={{ color: item.accentColor }}>
                                                    {item.download ? 'Download PDF' : 'Read Article'}
                                                    {item.download ? <HiOutlineDownload size={14} /> : <HiArrowRight size={14} />}
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* ── CTA SUBSCRIBER ──────────────────────────────────────── */}
                <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
                    <div className="container-custom relative z-10 max-w-4xl mx-auto rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl"
                        style={{ background: 'linear-gradient(160deg, #0a2560 0%, #0066ff 100%)' }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl font-black mb-4">
                                Stay Ahead of the Curve
                            </h2>
                            <p className="mb-8 text-sm md:text-base leading-relaxed opacity-80 max-w-xl mx-auto">
                                Get our latest AI research, enterprise modernization frameworks, and global technology trend briefings delivered straight to your inbox monthly.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    className="px-5 py-3 rounded-lg text-sm flex-1 outline-none text-slate-800"
                                    style={{ border: 'none' }}
                                />
                                <button className="px-6 py-3 rounded-lg text-sm font-bold bg-white" style={{ color: 'var(--color-primary)' }}>
                                    Subscribe Now
                                </button>
                            </div>
                            <p className="mt-4 text-[10px] uppercase tracking-widest opacity-60">No spam. Unsubscribe anytime.</p>
                        </motion.div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default Insights;
