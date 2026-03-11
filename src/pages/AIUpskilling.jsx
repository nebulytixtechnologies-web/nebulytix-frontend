import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import {
    HiOutlineAcademicCap,
    HiOutlineUserGroup,
    HiOutlineBadgeCheck,
    HiOutlineLightningBolt,
    HiOutlineChartBar,
    HiOutlineCheckCircle,
    HiOutlineClock,
    HiOutlineGlobeAlt,
    HiOutlineDesktopComputer,
    HiOutlineOfficeBuilding,
    HiArrowRight,
} from 'react-icons/hi';

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

// Section 1: Enterprise AI Training
const trainingFormats = [
    {
        icon: HiOutlineDesktopComputer,
        format: 'Live Virtual Instructor-Led',
        duration: 'Half-day to 3-day programs',
        desc: 'Real-time sessions with Nebulytix AI experts. Interactive Q&A, live demos, and hands-on labs delivered virtually to global teams simultaneously.',
        features: ['Live expert instruction', 'Interactive labs', 'Real-world case studies', 'Post-session resources'],
        color: 'var(--color-primary)',
    },
    {
        icon: HiOutlineOfficeBuilding,
        format: 'On-Site Enterprise Workshops',
        duration: '1–5 day immersive workshops',
        desc: 'Fully customized workshops delivered at your premises — designed around your industry, systems, and business challenges for maximum relevance.',
        features: ['Tailored to your industry', 'On-site delivery', 'Executive & team tracks', 'Custom case studies'],
        color: 'var(--color-accent)',
    },
    {
        icon: HiOutlineGlobeAlt,
        format: 'Self-Paced Digital Learning',
        duration: 'Flexible, always-on access',
        desc: 'A structured digital learning library covering AI fundamentals through advanced applications — accessible anytime, tracked and measured through an enterprise LMS.',
        features: ['Always-on access', 'Structured learning paths', 'Progress tracking', 'LMS integration'],
        color: 'var(--color-text-primary)',
    },
    {
        icon: HiOutlineUserGroup,
        format: 'Cohort-Based Programs',
        duration: '4–12 week structured cohorts',
        desc: 'Peer-learning programs where employee cohorts progress through the AI curriculum together — building shared language, mindset, and capability simultaneously.',
        features: ['Peer accountability', 'Group project work', 'Mentorship access', 'Cohort community'],
        color: 'var(--color-primary)',
    },
];

const trainingTracks = [
    {
        audience: 'Leaders & Executives',
        icon: '👔',
        desc: 'AI literacy for strategic decision-making — understanding AI capabilities, risks, and opportunities without deep technical knowledge.',
        modules: ['AI Fundamentals for Business Leaders', 'AI Strategy & Investment Decisions', 'Managing AI Risk & Ethics', 'Building an AI-Ready Organization'],
        duration: '1–2 days',
        level: 'Foundational',
        color: 'var(--color-primary)',
    },
    {
        audience: 'Business & Operations Teams',
        icon: '📊',
        desc: 'Practical AI skills for business professionals — using AI tools, prompting effectively, and identifying automation opportunities in daily workflows.',
        modules: ['AI Tools in the Modern Workplace', 'Prompt Engineering for Business', 'Process Automation with AI', 'Data Literacy & AI Insights'],
        duration: '2–4 days',
        level: 'Intermediate',
        color: 'var(--color-accent)',
    },
    {
        audience: 'Technical & Developer Teams',
        icon: '💻',
        desc: 'Hands-on AI engineering skills — building, deploying, and maintaining AI systems, models, and integrations in enterprise environments.',
        modules: ['Applied Machine Learning', 'LLM Engineering & Fine-tuning', 'AI Agent Development', 'MLOps & AI Deployment'],
        duration: '3–5 days',
        level: 'Advanced',
        color: 'var(--color-text-primary)',
    },
];

// Section 2: Professional Certification Programs
const certifications = [
    {
        badge: '🥉',
        name: 'Nebulytix AI Fundamentals',
        code: 'NAI-100',
        level: 'Foundation',
        duration: '2 days + exam',
        desc: 'Validates foundational understanding of AI concepts, terminology, and business applications. Designed for non-technical professionals entering the AI space.',
        topics: ['AI & ML concepts', 'AI business value', 'Ethical AI principles', 'Real-world AI applications'],
        color: '#cd7f32',
        forWho: 'All staff, business professionals',
    },
    {
        badge: '🥈',
        name: 'Nebulytix AI Practitioner',
        code: 'NAI-200',
        level: 'Associate',
        duration: '4 days + exam',
        desc: 'certifies ability to work with AI tools, design automation workflows, and lead AI projects in a business context without needing deep coding expertise.',
        topics: ['AI tool proficiency', 'Workflow automation design', 'AI project management', 'AI risk & governance'],
        color: '#94a3b8',
        forWho: 'Team leads, project managers, analysts',
    },
    {
        badge: '🥇',
        name: 'Nebulytix AI Professional',
        code: 'NAI-300',
        level: 'Professional',
        duration: '8 days + exam',
        desc: 'Advanced certification for technical professionals who build, deploy, and operate AI systems in enterprise environments. Covers applied ML, LLM engineering, and MLOps.',
        topics: ['Applied ML & model development', 'LLM engineering & deployment', 'AI system architecture', 'Enterprise MLOps practices'],
        color: '#d4a017',
        forWho: 'Developers, architects, data engineers',
    },
    {
        badge: '🏆',
        name: 'Nebulytix AI Enterprise Architect',
        code: 'NAI-400',
        level: 'Expert',
        duration: '12 days + expert panel',
        desc: 'The highest Nebulytix certification — validates ability to design enterprise-wide AI strategies, govern AI ecosystems, and lead large-scale AI transformation programs.',
        topics: ['Enterprise AI strategy design', 'AI governance frameworks', 'Multi-agent system architecture', 'AI transformation program management'],
        color: 'var(--color-primary)',
        forWho: 'Senior architects, CTOs, AI directors',
    },
];

const certificationBenefits = [
    { icon: '🎓', title: 'Industry-Recognized', desc: 'Nebulytix certifications are recognized by our global partner network of enterprise technology organizations.' },
    { icon: '🔗', title: 'Digital Credentials', desc: 'Earners receive digital badges shareable on LinkedIn, verified through Nebulytix\'s certification registry.' },
    { icon: '♻️', title: 'Annual Recertification', desc: 'Certifications are refreshed annually to stay current with the rapidly evolving AI landscape.' },
    { icon: '🌐', title: 'Global Validity', desc: 'Valid and recognized across all Nebulytix client and partner organizations worldwide.' },
];

// Section 3: Corporate AI Capability Building
const capabilityFramework = [
    {
        phase: '01',
        name: 'Diagnose',
        title: 'AI Capability Assessment',
        desc: 'We assess your organization\'s current AI skills, knowledge gaps, and cultural readiness across all levels — from frontline staff to the C-suite.',
        outputs: ['Skills gap analysis report', 'Organizational AI readiness score', 'Priority capability gaps identified', 'Baseline metrics established'],
        color: 'var(--color-primary)',
        icon: '🔍',
    },
    {
        phase: '02',
        name: 'Design',
        title: 'Custom Learning Architecture',
        desc: 'We design a tailored AI learning curriculum mapped to your business strategy, role types, and target AI maturity level — not an off-the-shelf catalog.',
        outputs: ['Custom curriculum design', 'Role-based learning paths', 'Competency framework', 'Certification roadmap'],
        color: 'var(--color-accent)',
        icon: '🎨',
    },
    {
        phase: '03',
        name: 'Build',
        title: 'Centre of Excellence Setup',
        desc: 'We help you establish an AI Centre of Excellence — the internal team, governance structure, and processes that sustain AI capability growth long-term.',
        outputs: ['CoE team structure', 'AI governance model', 'Internal AI champions program', 'Community of practice framework'],
        color: 'var(--color-text-primary)',
        icon: '🏗️',
    },
    {
        phase: '04',
        name: 'Scale',
        title: 'Organisation-Wide Rollout',
        desc: 'We execute training at scale — across business units, geographies, and levels — with change management support to drive genuine adoption and behaviour change.',
        outputs: ['Enterprise-wide rollout plan', 'Manager enablement toolkit', 'Adoption measurement framework', 'Ongoing coaching program'],
        color: 'var(--color-primary)',
        icon: '🚀',
    },
];

const coePillars = [
    { icon: '👥', title: 'AI Champion Network', desc: 'A trained network of internal AI champions who spread capability, support peers, and identify new automation opportunities across business units.' },
    { icon: '📐', title: 'AI Governance Board', desc: 'A cross-functional governance body that sets AI standards, approves use cases, manages ethics and compliance, and reports AI ROI to leadership.' },
    { icon: '🔬', title: 'Innovation Lab', desc: 'A dedicated environment where teams experiment with emerging AI technologies, prototype solutions, and test new automation concepts rapidly.' },
    { icon: '📚', title: 'Knowledge Repository', desc: 'A living internal knowledge base of AI playbooks, automation templates, lessons learned, and best practices built and maintained by the CoE.' },
];

const capabilityOutcomes = [
    { metric: '10×', label: 'Faster AI adoption vs industry average' },
    { metric: '70%', label: 'Of employees complete AI literacy within 6 months' },
    { metric: '3×', label: 'More internally identified automation opportunities' },
    { metric: '85%', label: 'Employee satisfaction with AI training programs' },
];


/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────── */
const AIUpskilling = () => {
    return (
        <>
            <Helmet>
                <title>AI Upskilling Programs - Nebulytix Technologies</title>
                <meta name="description" content="Nebulytix AI Upskilling Programs: enterprise AI training, professional certification pathways, and corporate AI capability building for modern organizations." />
            </Helmet>
            <Navbar />
            <main>

                {/* ── HERO ──────────────────────────────────────────── */}
                <section className="pt-36 pb-24 relative overflow-hidden" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="glow-orb" style={{ width: 800, height: 700, top: '-25%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(0,102,255,0.09) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                Solutions · AI Upskilling
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-6 leading-tight"
                            style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
                        >
                            AI Upskilling <span className="text-gradient">Programs</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="text-lg max-w-2xl mx-auto mb-10"
                            style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
                        >
                            Building AI-capable organizations — from executive AI literacy to developer certifications,
                            and from individual training to enterprise-wide AI capability transformation.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="btn-primary px-8 py-3 text-sm flex items-center gap-2">
                                Enquire About Training <HiArrowRight />
                            </Link>
                            <Link to="/solutions" className="btn-secondary px-8 py-3 text-sm">
                                View All Solutions
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
                            className="flex flex-wrap justify-center gap-10 md:gap-20 mt-14 pt-10 border-t"
                            style={{ borderColor: 'rgba(0,102,255,0.08)' }}
                        >
                            {[
                                { value: '10K+', label: 'Professionals Trained' },
                                { value: '50+', label: 'Enterprise Clients' },
                                { value: '4', label: 'Certification Levels' },
                                { value: '20+', label: 'Countries Reached' },
                            ].map((s, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl md:text-3xl font-black mb-1 text-gradient">{s.value}</div>
                                    <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── SECTION 1: ENTERPRISE AI TRAINING ──────────────── */}
                <section className="py-20" style={{ background: 'var(--color-page-surface)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                01 · Enterprise AI Training
                            </span>
                            <h2 className="section-title mt-3 text-3xl md:text-4xl">
                                Enterprise <span className="text-gradient">AI Training</span>
                            </h2>
                            <p className="section-subtitle max-w-2xl">
                                Role-specific AI training programs designed for enterprise scale —
                                equipping every level of your organization with the AI knowledge and tools
                                they need to work effectively in an AI-driven world.
                            </p>
                        </motion.div>

                        {/* Training Formats */}
                        <div className="mb-12">
                            <h3 className="text-base font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>Training Delivery Formats</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                                {trainingFormats.map((fmt, i) => (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                        className="p-5 rounded-2xl flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300"
                                        style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', borderTop: `3px solid ${fmt.color}`, boxShadow: '0 4px 20px rgba(0,102,255,0.06)' }}
                                    >
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${fmt.color}10`, color: fmt.color }}>
                                            <fmt.icon size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>{fmt.format}</h4>
                                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded" style={{ background: `${fmt.color}0d`, color: fmt.color }}>
                                                {fmt.duration}
                                            </span>
                                        </div>
                                        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{fmt.desc}</p>
                                        <ul className="mt-auto space-y-1.5">
                                            {fmt.features.map((f, fi) => (
                                                <li key={fi} className="flex items-center gap-2 text-[11px]" style={{ color: 'var(--color-text-secondary)' }}>
                                                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: fmt.color }} />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Training Tracks by Audience */}
                        <div>
                            <h3 className="text-base font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>Training Tracks by Audience</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {trainingTracks.map((track, i) => (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                                        className="rounded-2xl overflow-hidden"
                                        style={{ border: '1px solid rgba(0,102,255,0.09)', boxShadow: '0 4px 24px rgba(0,102,255,0.06)' }}
                                    >
                                        {/* Header */}
                                        <div className="p-5" style={{ background: i === 0 ? 'rgba(0,102,255,0.06)' : i === 1 ? 'rgba(0,200,255,0.06)' : 'rgba(5,24,58,0.05)' }}>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-2xl">{track.icon}</span>
                                                <div>
                                                    <h4 className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>{track.audience}</h4>
                                                    <div className="flex gap-2 mt-1">
                                                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded" style={{ background: `${track.color}10`, color: track.color }}>{track.level}</span>
                                                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded" style={{ background: 'rgba(0,0,0,0.05)', color: 'var(--color-text-muted)' }}>
                                                            <HiOutlineClock className="inline mr-0.5" size={10} />{track.duration}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{track.desc}</p>
                                        </div>
                                        {/* Modules */}
                                        <div className="p-5 bg-white">
                                            <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: track.color }}>Modules Covered</p>
                                            <ul className="space-y-2">
                                                {track.modules.map((mod, mi) => (
                                                    <li key={mi} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                                                        <HiOutlineAcademicCap className="shrink-0 mt-0.5" style={{ color: track.color }} />
                                                        {mod}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SECTION 2: PROFESSIONAL CERTIFICATION PROGRAMS ─── */}
                <section className="py-20" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                            <span className="section-eyebrow" style={{ color: 'var(--color-accent)', background: 'rgba(0,200,255,0.07)', border: '1px solid rgba(0,200,255,0.15)' }}>
                                02 · Professional Certification Programs
                            </span>
                            <h2 className="section-title mt-3 text-3xl md:text-4xl">
                                Professional Certification <span className="text-gradient">Programs</span>
                            </h2>
                            <p className="section-subtitle max-w-2xl">
                                A structured four-level certification pathway — from foundational AI literacy to expert-level
                                enterprise AI architecture — giving professionals verifiable, industry-recognized credentials.
                            </p>
                        </motion.div>

                        {/* Certification levels */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                            {certifications.map((cert, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300"
                                    style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', borderLeft: `3px solid ${cert.color}`, boxShadow: '0 4px 20px rgba(0,102,255,0.06)' }}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl">{cert.badge}</span>
                                            <div>
                                                <h3 className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>{cert.name}</h3>
                                                <p className="text-[10px] font-mono font-bold mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{cert.code}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded block mb-1"
                                                style={{ background: `${cert.color}12`, color: cert.color }}>{cert.level}</span>
                                            <span className="text-[10px]" style={{ color: 'var(--color-text-muted)' }}>
                                                <HiOutlineClock className="inline mr-0.5" size={10} />{cert.duration}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{cert.desc}</p>
                                    <div className="mb-3">
                                        <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: cert.color }}>Topics Covered</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {cert.topics.map((topic, ti) => (
                                                <span key={ti} className="text-[11px] px-2 py-0.5 rounded"
                                                    style={{ background: 'rgba(0,102,255,0.05)', border: '1px solid rgba(0,102,255,0.1)', color: 'var(--color-text-secondary)' }}>
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-[10px]" style={{ color: 'var(--color-text-muted)' }}>
                                        <span className="font-semibold">Best for:</span> {cert.forWho}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Certification benefits */}
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="p-8 rounded-2xl"
                            style={{ background: 'linear-gradient(160deg, #0a2560 0%, #0066ff 100%)' }}
                        >
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">Why Nebulytix Certification?</h3>
                                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                    Built specifically for the enterprise AI landscape — not generic online badges.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {certificationBenefits.map((b, i) => (
                                    <div key={i} className="text-center p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.08)' }}>
                                        <div className="text-2xl mb-2">{b.icon}</div>
                                        <h4 className="text-xs font-bold text-white mb-2">{b.title}</h4>
                                        <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{b.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── SECTION 3: CORPORATE AI CAPABILITY BUILDING ──────── */}
                <section className="py-20" style={{ background: 'var(--color-page-surface)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                03 · Corporate AI Capability Building
                            </span>
                            <h2 className="section-title mt-3 text-3xl md:text-4xl">
                                Corporate AI Capability <span className="text-gradient">Building</span>
                            </h2>
                            <p className="section-subtitle max-w-2xl">
                                Beyond one-off training events — we partner with enterprises to build a
                                self-sustaining AI capability infrastructure: the people, processes, structures,
                                and culture that continually grow AI competency from within.
                            </p>
                        </motion.div>

                        {/* 4-Phase Framework */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                            {capabilityFramework.map((phase, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                                    className="p-6 rounded-2xl flex flex-col gap-4"
                                    style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', borderTop: `3px solid ${phase.color}`, boxShadow: '0 4px 20px rgba(0,102,255,0.06)' }}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{phase.icon}</span>
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: phase.color }}>{phase.phase} · {phase.name}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>{phase.title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{phase.desc}</p>
                                    <div className="mt-auto space-y-1.5">
                                        <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: phase.color }}>Key Outputs</p>
                                        {phase.outputs.map((out, oi) => (
                                            <div key={oi} className="flex items-center gap-2">
                                                <HiOutlineCheckCircle className="shrink-0 text-xs" style={{ color: phase.color }} />
                                                <p className="text-[11px]" style={{ color: 'var(--color-text-secondary)' }}>{out}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* AI Centre of Excellence */}
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                            <div>
                                <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                    className="text-lg font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                                    AI Centre of Excellence (CoE) Setup
                                </motion.h3>
                                <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                    className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                    The AI Centre of Excellence is the organizational engine that drives sustained AI adoption.
                                    Nebulytix designs, establishes, and activates your CoE — providing the structure,
                                    governance, and activation support to make it self-sustaining within 6–12 months.
                                </motion.p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {coePillars.map((pillar, i) => (
                                        <motion.div key={i}
                                            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                            className="p-4 rounded-xl"
                                            style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 2px 12px rgba(0,102,255,0.05)' }}
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-lg">{pillar.icon}</span>
                                                <h4 className="text-xs font-bold" style={{ color: 'var(--color-text-primary)' }}>{pillar.title}</h4>
                                            </div>
                                            <p className="text-[11px] leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{pillar.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Outcomes panel */}
                            <div>
                                <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                    className="p-8 rounded-2xl mb-6"
                                    style={{ background: 'linear-gradient(160deg, #0a2560 0%, #0066ff 100%)' }}
                                >
                                    <h3 className="text-base font-bold text-white mb-6">Capability Building Outcomes</h3>
                                    <div className="grid grid-cols-2 gap-5">
                                        {capabilityOutcomes.map((outcome, i) => (
                                            <div key={i} className="text-center p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.08)' }}>
                                                <div className="text-2xl font-black text-white mb-1">{outcome.metric}</div>
                                                <p className="text-[11px] leading-snug" style={{ color: 'rgba(255,255,255,0.65)' }}>{outcome.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                    className="p-6 rounded-2xl"
                                    style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.09)', boxShadow: '0 4px 20px rgba(0,102,255,0.06)' }}
                                >
                                    <h4 className="text-sm font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>What Makes Nebulytix Different</h4>
                                    {[
                                        'We don\'t deliver training then leave — we stay to ensure adoption',
                                        'All programs are built around your industry, not generic AI content',
                                        'We measure capability growth with quantified metrics, not completion rates',
                                        'Our programs connect directly to real AI use cases in your organization',
                                    ].map((point, i) => (
                                        <div key={i} className="flex items-start gap-3 mb-3">
                                            <HiOutlineBadgeCheck className="shrink-0 mt-0.5 text-base" style={{ color: 'var(--color-primary)' }} />
                                            <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{point}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA ───────────────────────────────────────────── */}
                <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="glow-orb" style={{ width: 600, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: 'var(--color-text-primary)' }}>
                                Ready to Build an <span className="text-gradient">AI-Capable Organization?</span>
                            </h2>
                            <p className="mb-8 text-base" style={{ color: 'var(--color-text-secondary)' }}>
                                Talk to our learning specialists about a custom AI training and capability building program for your enterprise.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link to="/#cta-section" className="btn-primary px-10 py-3 text-sm inline-flex items-center gap-2">
                                    Book a Product Demo <HiArrowRight />
                                </Link>
                                <Link to="/solutions/digital-transformation" className="btn-secondary px-8 py-3 text-sm">
                                    Explore Digital Transformation
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default AIUpskilling;
