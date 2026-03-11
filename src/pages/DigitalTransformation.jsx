import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import {
    HiOutlineChartBar,
    HiOutlineLightBulb,
    HiOutlineUserGroup,
    HiOutlineClipboardList,
    HiOutlineRefresh,
    HiOutlineShieldCheck,
    HiOutlineGlobeAlt,
    HiOutlineCode,
    HiOutlineServer,
    HiOutlineCheckCircle,
    HiArrowRight,
} from 'react-icons/hi';

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

// Section 1: Consulting Services
const consultingServices = [
    {
        icon: HiOutlineLightBulb,
        title: 'Digital Strategy & Roadmapping',
        desc: 'We work with C-suite and leadership teams to define a clear, actionable digital transformation roadmap — aligned to business objectives, technology maturity, and market opportunities.',
        deliverables: ['Digital maturity assessment', 'Transformation roadmap (12–36 months)', 'Technology investment prioritization', 'KPI & ROI framework'],
        color: 'var(--color-primary)',
    },
    {
        icon: HiOutlineChartBar,
        title: 'Business Process Re-engineering',
        desc: 'We analyze, redesign, and optimize core business processes using AI and digital tools — eliminating manual steps, reducing cycle times, and improving quality at scale.',
        deliverables: ['Process discovery & mapping', 'Gap analysis & optimization blueprint', 'Automation opportunity identification', 'Change impact assessment'],
        color: 'var(--color-accent)',
    },
    {
        icon: HiOutlineUserGroup,
        title: 'Change Management & Adoption',
        desc: 'Technology alone does not transform organizations. We design and execute people-first change management programs that ensure lasting adoption of new digital systems.',
        deliverables: ['Stakeholder communication strategy', 'Training & enablement programs', 'Adoption metrics dashboard', 'Executive sponsor engagement'],
        color: 'var(--color-text-primary)',
    },
    {
        icon: HiOutlineClipboardList,
        title: 'Technology Due Diligence',
        desc: 'Before investing in any platform or system, our consultants conduct rigorous technology assessments — evaluating build vs buy decisions, vendor selection, and total cost of ownership.',
        deliverables: ['Vendor evaluation framework', 'Build vs buy analysis', 'TCO modeling', 'Risk & compliance review'],
        color: 'var(--color-primary)',
    },
    {
        icon: HiOutlineShieldCheck,
        title: 'Data Strategy & Governance',
        desc: 'We help organizations establish a unified data foundation — the critical prerequisite for AI adoption, digital decision-making, and regulatory compliance.',
        deliverables: ['Data architecture design', 'Governance policies & ownership model', 'Data quality framework', 'Regulatory compliance mapping'],
        color: 'var(--color-accent)',
    },
    {
        icon: HiOutlineGlobeAlt,
        title: 'Platform & Ecosystem Consulting',
        desc: 'We advise on platform strategies that turn enterprise software from cost centers into revenue-generating digital ecosystems — enabling partner networks and digital marketplaces.',
        deliverables: ['Platform business model design', 'API monetization strategy', 'Partner ecosystem blueprint', 'Digital marketplace roadmap'],
        color: 'var(--color-text-primary)',
    },
];

// Section 2: Enterprise Modernization Frameworks
const modernizationPhases = [
    {
        phase: '01',
        name: 'Assess',
        title: 'Digital Maturity Assessment',
        desc: 'Evaluate your current technology landscape, processes, data assets, and digital capabilities against industry benchmarks to establish a clear baseline.',
        activities: ['Technology inventory audit', 'Process maturity scoring', 'Team capability mapping', 'Competitor benchmarking'],
        color: 'var(--color-primary)',
    },
    {
        phase: '02',
        name: 'Design',
        title: 'Target Architecture Design',
        desc: 'Co-create the target state architecture — cloud-native, API-first, data-driven — with a detailed migration path from legacy to modern systems.',
        activities: ['Cloud architecture design', 'Application portfolio rationalization', 'Integration architecture blueprint', 'Data platform design'],
        color: 'var(--color-accent)',
    },
    {
        phase: '03',
        name: 'Migrate',
        title: 'Legacy System Modernization',
        desc: 'Execute the migration from legacy systems to modern platforms in structured, risk-managed waves — with zero-downtime migration strategies and rollback plans.',
        activities: ['Legacy decommission planning', 'Data migration & validation', 'Parallel running & cutover', 'Performance & security testing'],
        color: 'var(--color-text-primary)',
    },
    {
        phase: '04',
        name: 'Optimize',
        title: 'Continuous Optimization',
        desc: 'Establish a continuous improvement operating model — leveraging real-time monitoring, AI-driven insights, and agile iteration cycles to sustain digital advantage.',
        activities: ['Observability & monitoring setup', 'AI-powered performance insights', 'Agile governance model', 'Ongoing cost optimization'],
        color: 'var(--color-primary)',
    },
];

const modernizationApproaches = [
    { icon: '☁️', title: 'Cloud-Native Migration', desc: 'Lift, shift, re-platform or re-architect legacy systems to cloud-native infrastructure on AWS, Azure, or GCP with DevSecOps practices baked in.' },
    { icon: '🏗️', title: 'Microservices Architecture', desc: 'Decompose monolithic applications into loosely-coupled microservices — enabling independent scaling, faster deployments, and technology flexibility.' },
    { icon: '📊', title: 'Data Platform Modernization', desc: 'Replace legacy data warehouses with modern lakehouse architectures — enabling real-time analytics, AI workloads, and self-service insights.' },
    { icon: '🔒', title: 'Zero-Trust Security Modernization', desc: 'Re-architect security from perimeter-based to zero-trust — identity-first, least-privilege access, and continuous verification across all systems.' },
];

// Section 3: Technology Integration Approach
const integrationPrinciples = [
    {
        number: '01',
        title: 'API-First Integration',
        desc: 'Every system in your enterprise exposes standardized APIs — creating a web of connected capabilities that any authorized service can compose and orchestrate.',
        detail: 'We design API gateways, versioning strategies, and API governance frameworks that make integration sustainable at scale. REST, GraphQL, gRPC — we architect the right protocol for every use case.',
        icon: HiOutlineCode,
        color: 'var(--color-primary)',
    },
    {
        number: '02',
        title: 'Event-Driven Architecture',
        desc: 'Systems communicate through events rather than direct calls — enabling real-time responsiveness, scalability, and loose coupling between enterprise services.',
        detail: 'Using Apache Kafka, Azure Event Hub, or AWS EventBridge, we implement event streaming architectures that allow enterprise systems to react to business events in milliseconds.',
        icon: HiOutlineRefresh,
        color: 'var(--color-accent)',
    },
    {
        number: '03',
        title: 'Composable Enterprise Platform',
        desc: 'We build integration platforms where business capabilities are modular, reusable components — composable into new digital products and services rapidly.',
        detail: 'Packaged Business Capabilities (PBCs) replace hardwired integrations — every capability can be assembled, re-assembled, and extended without costly development cycles.',
        icon: HiOutlineServer,
        color: 'var(--color-text-primary)',
    },
];

const integrationLayers = [
    { layer: 'Experience Layer', systems: ['Web & Mobile Apps', 'Portals', 'Partner Interfaces', 'IoT Dashboards'], color: 'var(--color-primary)' },
    { layer: 'Integration Layer', systems: ['API Gateway', 'Event Streaming', 'iPaaS Platform', 'ESB / Middleware'], color: 'var(--color-accent)' },
    { layer: 'Service Layer', systems: ['CRM', 'ERP', 'HRM', 'SCM', 'Custom APIs'], color: 'var(--color-text-primary)' },
    { layer: 'Data Layer', systems: ['Data Lakehouse', 'MDM', 'Real-time Streams', 'AI/ML Platform'], color: 'var(--color-primary)' },
];

const clientBenefits = [
    '60–80% reduction in integration development time',
    'Real-time data availability across all enterprise systems',
    'Elimination of data silos and manual reconciliation',
    'Faster onboarding of new partners and digital channels',
    'Platform resilience with circuit breakers and auto-failover',
    'Full API lifecycle management and documentation',
];


/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────── */
const DigitalTransformation = () => {
    return (
        <>
            <Helmet>
                <title>Digital Transformation Services - Nebulytix Technologies</title>
                <meta name="description" content="Nebulytix Digital Transformation Services: consulting, enterprise modernization frameworks, and technology integration approaches for forward-thinking organizations." />
            </Helmet>
            <Navbar />
            <main>

                {/* ── HERO ──────────────────────────────────────────── */}
                <section className="pt-36 pb-24 relative overflow-hidden" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="glow-orb" style={{ width: 800, height: 700, top: '-25%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(0,102,255,0.09) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                Solutions · Digital Transformation
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-6 leading-tight"
                            style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
                        >
                            Digital Transformation <span className="text-gradient">Services</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="text-lg max-w-2xl mx-auto mb-10"
                            style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
                        >
                            End-to-end digital transformation consulting — from strategy and modernization frameworks
                            to technology integration architecture — helping enterprises build lasting digital advantage.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="btn-primary px-8 py-3 text-sm flex items-center gap-2">
                                Book a Consultation <HiArrowRight />
                            </Link>
                            <Link to="/solutions" className="btn-secondary px-8 py-3 text-sm">
                                View All Solutions
                            </Link>
                        </motion.div>

                        {/* Quick stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
                            className="flex flex-wrap justify-center gap-10 md:gap-20 mt-14 pt-10 border-t"
                            style={{ borderColor: 'rgba(0,102,255,0.08)' }}
                        >
                            {[
                                { value: '100+', label: 'Enterprise Clients' },
                                { value: '50+', label: 'Global Partners' },
                                { value: '3×', label: 'Avg. Digital ROI' },
                                { value: '6 mos', label: 'Avg. Transformation Kickoff' },
                            ].map((s, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl md:text-3xl font-black mb-1 text-gradient">{s.value}</div>
                                    <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── SECTION 1: CONSULTING SERVICES ─────────────────── */}
                <section className="py-20" style={{ background: 'var(--color-page-surface)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                01 · Consulting Services
                            </span>
                            <h2 className="section-title mt-3 text-3xl md:text-4xl">
                                Consulting <span className="text-gradient">Services</span>
                            </h2>
                            <p className="section-subtitle max-w-2xl">
                                Our consulting practice combines deep industry expertise with technology leadership —
                                working alongside your teams to design, plan, and execute digital transformation that delivers
                                measurable business outcomes.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {consultingServices.map((svc, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                    className="p-6 rounded-2xl flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300"
                                    style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', borderTop: `3px solid ${svc.color}`, boxShadow: '0 4px 20px rgba(0,102,255,0.06)' }}
                                >
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${svc.color}10`, color: svc.color }}>
                                        <svc.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{svc.title}</h3>
                                        <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{svc.desc}</p>
                                    </div>
                                    <div className="mt-auto">
                                        <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: svc.color }}>Key Deliverables</p>
                                        <ul className="space-y-1.5">
                                            {svc.deliverables.map((d, di) => (
                                                <li key={di} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                                                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: svc.color }} />
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Consulting engagement model */}
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="mt-12 p-8 rounded-2xl"
                            style={{ background: 'linear-gradient(160deg, #0a2560 0%, #0066ff 100%)' }}>
                            <div className="grid lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">Our Consulting Engagement Model</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                                        We embed our consultants within your teams — not as external advisors handing over slide decks,
                                        but as co-builders who share accountability for transformation outcomes. Our engagements
                                        are structured in 90-day sprints with defined value milestones.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: 'Embedded Team Model', icon: '🤝' },
                                        { label: '90-Day Sprint Cycles', icon: '🗓️' },
                                        { label: 'Outcome-Based Delivery', icon: '🎯' },
                                        { label: 'Co-Investment Options', icon: '💡' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.08)' }}>
                                            <span className="text-xl">{item.icon}</span>
                                            <p className="text-xs font-semibold text-white">{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── SECTION 2: ENTERPRISE MODERNIZATION FRAMEWORKS ─── */}
                <section className="py-20" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                            <span className="section-eyebrow" style={{ color: 'var(--color-accent)', background: 'rgba(0,200,255,0.07)', border: '1px solid rgba(0,200,255,0.15)' }}>
                                02 · Modernization Frameworks
                            </span>
                            <h2 className="section-title mt-3 text-3xl md:text-4xl">
                                Enterprise Modernization <span className="text-gradient">Frameworks</span>
                            </h2>
                            <p className="section-subtitle max-w-2xl">
                                A structured approach to modernizing enterprise technology — moving from legacy systems
                                to cloud-native, AI-ready platforms without disrupting business continuity.
                            </p>
                        </motion.div>

                        {/* 4-Phase Modernization Journey */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                            {modernizationPhases.map((phase, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                                    className="p-6 rounded-2xl flex flex-col gap-4"
                                    style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', borderTop: `3px solid ${phase.color}`, boxShadow: '0 4px 20px rgba(0,102,255,0.06)' }}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-black px-2.5 py-1 rounded-lg"
                                            style={{ background: `${phase.color}10`, color: phase.color }}>{phase.phase}</span>
                                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: phase.color }}>{phase.name}</span>
                                    </div>
                                    <h3 className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>{phase.title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{phase.desc}</p>
                                    <div className="mt-auto space-y-1.5">
                                        {phase.activities.map((act, ai) => (
                                            <div key={ai} className="flex items-center gap-2">
                                                <HiOutlineCheckCircle className="shrink-0 text-xs" style={{ color: phase.color }} />
                                                <p className="text-[11px]" style={{ color: 'var(--color-text-secondary)' }}>{act}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Modernization approaches */}
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
                            <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>Modernization Approaches We Deploy</h3>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {modernizationApproaches.map((approach, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                    className="p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-0.5 transition-all duration-200"
                                    style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 4px 20px rgba(0,102,255,0.05)' }}
                                >
                                    <span className="text-3xl shrink-0">{approach.icon}</span>
                                    <div>
                                        <h4 className="text-sm font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{approach.title}</h4>
                                        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{approach.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SECTION 3: TECHNOLOGY INTEGRATION APPROACH ───────── */}
                <section className="py-20" style={{ background: 'var(--color-page-surface)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                03 · Technology Integration Approach
                            </span>
                            <h2 className="section-title mt-3 text-3xl md:text-4xl">
                                Technology Integration <span className="text-gradient">Approach</span>
                            </h2>
                            <p className="section-subtitle max-w-2xl">
                                Modern enterprises require seamless connectivity across dozens of systems. Our integration-first approach
                                eliminates data silos, enables real-time operations, and creates a composable technology foundation
                                that scales with your business.
                            </p>
                        </motion.div>

                        {/* 3 Core Integration Principles */}
                        <div className="flex flex-col gap-6 mb-14">
                            {integrationPrinciples.map((principle, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden"
                                    style={{ border: '1px solid rgba(0,102,255,0.09)', boxShadow: '0 4px 24px rgba(0,102,255,0.06)' }}
                                >
                                    {/* Left */}
                                    <div className="p-8" style={{ background: '#ffffff', borderRight: '1px solid rgba(0,102,255,0.07)' }}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-xs font-black px-2.5 py-1 rounded-lg"
                                                style={{ background: `${principle.color}10`, color: principle.color }}>{principle.number}</span>
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                                                style={{ background: `${principle.color}10`, color: principle.color }}>
                                                <principle.icon size={16} />
                                            </div>
                                        </div>
                                        <h3 className="text-base font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>{principle.title}</h3>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{principle.desc}</p>
                                    </div>
                                    {/* Right */}
                                    <div className="p-8" style={{ background: '#f8fafc' }}>
                                        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: principle.color }}>How We Implement It</p>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{principle.detail}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Integration Architecture Stack */}
                        <div className="grid lg:grid-cols-2 gap-10 items-start">
                            <div>
                                <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                    className="text-lg font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                                    Enterprise Integration Architecture Stack
                                </motion.h3>
                                <div className="space-y-3">
                                    {integrationLayers.map((layer, i) => (
                                        <motion.div key={i}
                                            initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                            className="p-4 rounded-xl"
                                            style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', borderLeft: `3px solid ${layer.color}`, boxShadow: '0 2px 12px rgba(0,102,255,0.05)' }}
                                        >
                                            <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: layer.color }}>{layer.layer}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {layer.systems.map((sys, si) => (
                                                    <span key={si} className="text-xs px-2.5 py-1 rounded-lg"
                                                        style={{ background: `${layer.color}07`, border: `1px solid ${layer.color}15`, color: 'var(--color-text-secondary)' }}>
                                                        {sys}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                    className="text-lg font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                                    What Clients Achieve
                                </motion.h3>
                                <div className="space-y-3">
                                    {clientBenefits.map((benefit, i) => (
                                        <motion.div key={i}
                                            initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                            className="flex items-start gap-3 p-4 rounded-xl"
                                            style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 2px 12px rgba(0,102,255,0.04)' }}
                                        >
                                            <HiOutlineCheckCircle className="shrink-0 text-lg mt-0.5" style={{ color: 'var(--color-primary)' }} />
                                            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{benefit}</p>
                                        </motion.div>
                                    ))}
                                </div>
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
                                Ready to Start Your <span className="text-gradient">Transformation?</span>
                            </h2>
                            <p className="mb-8 text-base" style={{ color: 'var(--color-text-secondary)' }}>
                                Talk to our digital transformation consultants and get a custom roadmap for your enterprise modernization journey.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link to="/#cta-section" className="btn-primary px-10 py-3 text-sm inline-flex items-center gap-2">
                                    Book a Consultation <HiArrowRight />
                                </Link>
                                <Link to="/solutions/ai-automation" className="btn-secondary px-8 py-3 text-sm">
                                    Explore AI Automation
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

export default DigitalTransformation;
