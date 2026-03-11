import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import {
    HiOutlineChip,
    HiOutlineLightningBolt,
    HiOutlineRefresh,
    HiOutlineCog,
    HiOutlineServer,
    HiOutlineCode,
    HiOutlineCheckCircle,
    HiOutlineArrowCircleRight,
    HiArrowRight,
} from 'react-icons/hi';

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const overviewPillars = [
    {
        icon: HiOutlineChip,
        title: 'AI-First Architecture',
        desc: 'Built ground-up for AI workloads — not retrofitted. Every module is designed to embed intelligence natively into enterprise operations.',
        color: 'var(--color-primary)',
    },
    {
        icon: HiOutlineLightningBolt,
        title: 'No-Code & Low-Code Builder',
        desc: 'Business teams can design, deploy and iterate automation workflows without writing code, using a visual drag-and-drop interface.',
        color: 'var(--color-accent)',
    },
    {
        icon: HiOutlineRefresh,
        title: 'Self-Improving Workflows',
        desc: 'Workflows continuously learn from operational data, automatically identifying bottlenecks and suggesting improvements in real time.',
        color: 'var(--color-text-primary)',
    },
    {
        icon: HiOutlineCog,
        title: 'Enterprise-Grade Security',
        desc: 'SOC 2, ISO 27001, and GDPR compliant. Fine-grained role-based access, full audit trails, and on-premise deployment options available.',
        color: 'var(--color-primary)',
    },
];

const agents = [
    {
        name: 'Document Intelligence Agent',
        icon: '📄',
        desc: 'Reads, extracts, classifies and routes business documents — invoices, contracts, reports — with 99%+ accuracy. Handles structured and unstructured formats.',
        tags: ['OCR + NLP', 'Auto-Classification', 'Smart Routing'],
    },
    {
        name: 'Customer Service Agent',
        icon: '🤖',
        desc: 'Handles customer queries, complaint resolution, and escalation autonomously across chat, email and voice — with human escalation when needed.',
        tags: ['Multi-channel', 'Sentiment Analysis', 'CRM Integration'],
    },
    {
        name: 'Finance & Compliance Agent',
        icon: '💰',
        desc: 'Processes invoices, reconciles accounts, monitors for compliance breaches and generates regulatory reports — all without manual intervention.',
        tags: ['ERP Integration', 'Audit Trails', 'Auto-Reconciliation'],
    },
    {
        name: 'HR Operations Agent',
        icon: '👥',
        desc: 'Screens CVs, schedules interviews, manages onboarding, and handles employee self-service requests with full HRIS integration.',
        tags: ['ATS Integration', 'Onboarding Flows', 'Employee Self-Service'],
    },
];

const workflowCapabilities = [
    'Multi-step workflow orchestration with conditional branching',
    'Real-time event triggers from any connected system',
    'AI decision nodes powered by custom or pre-trained models',
    'Human-in-the-loop approval steps with SLA tracking',
    'Parallel processing and dynamic workload balancing',
    'Full observability with step-level logging and replay',
];

const useCases = [
    {
        industry: 'Financial Services',
        emoji: '🏦',
        title: 'Automated Loan Processing',
        outcome: '80% reduction in processing time',
        desc: 'AI agents extract and verify applicant data, run credit-scoring workflows, flag exceptions for review, and generate decision letters — from application to approval in hours, not days.',
        color: 'var(--color-primary)',
    },
    {
        industry: 'Healthcare',
        emoji: '🏥',
        title: 'Patient Record Automation',
        outcome: '70% reduction in admin overhead',
        desc: 'Intelligent document agents digitize patient records, match data across systems, auto-populate EHR fields, and flag missing information for clinical staff.',
        color: 'var(--color-accent)',
    },
    {
        industry: 'Retail & Commerce',
        emoji: '🛒',
        title: 'Demand Forecasting & Replenishment',
        outcome: '35% inventory cost reduction',
        desc: 'AI workflows analyze sales patterns, external demand signals, and supplier lead times to automatically trigger replenishment orders and adjust pricing in real time.',
        color: 'var(--color-text-primary)',
    },
    {
        industry: 'Enterprise Technology',
        emoji: '⚙️',
        title: 'IT Incident Management',
        outcome: '60% faster mean-time-to-resolve',
        desc: 'AIOps agents detect anomalies, correlate incidents, trigger automated remediation playbooks, and only escalate novel or high-severity events to engineers.',
        color: 'var(--color-primary)',
    },
    {
        industry: 'Government',
        emoji: '🏛️',
        title: 'Citizen Service Automation',
        outcome: '3x faster service delivery',
        desc: 'End-to-end automation of citizen application workflows — identity verification, eligibility checks, document validation, and status notifications handled entirely by AI agents.',
        color: 'var(--color-accent)',
    },
    {
        industry: 'Manufacturing',
        emoji: '🏭',
        title: 'Quality Control Automation',
        outcome: '90% defect detection accuracy',
        desc: 'Computer vision agents inspect products on production lines, log defects with photographic evidence, trigger rework workflows, and update QA dashboards in real time.',
        color: 'var(--color-text-primary)',
    },
];

const integrationCategories = [
    {
        category: 'ERP & Business Systems',
        icon: '🏢',
        systems: ['SAP S/4HANA', 'Oracle ERP', 'Microsoft Dynamics 365', 'NetSuite', 'Workday'],
        color: 'var(--color-primary)',
    },
    {
        category: 'CRM & Sales',
        icon: '📊',
        systems: ['Salesforce', 'HubSpot', 'Microsoft Dynamics CRM', 'Zoho CRM', 'Pipedrive'],
        color: 'var(--color-accent)',
    },
    {
        category: 'Cloud & Infrastructure',
        icon: '☁️',
        systems: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Alibaba Cloud', 'IBM Cloud'],
        color: 'var(--color-text-primary)',
    },
    {
        category: 'Collaboration & Productivity',
        icon: '🤝',
        systems: ['Microsoft 365', 'Google Workspace', 'Slack', 'Teams', 'Jira & Confluence'],
        color: 'var(--color-primary)',
    },
    {
        category: 'IT Service Management',
        icon: '🛠️',
        systems: ['ServiceNow', 'Zendesk', 'Freshservice', 'BMC Remedy', 'Ivanti'],
        color: 'var(--color-accent)',
    },
    {
        category: 'Data & Analytics',
        icon: '📈',
        systems: ['Snowflake', 'Databricks', 'Power BI', 'Tableau', 'Looker'],
        color: 'var(--color-text-primary)',
    },
];

const integrationMethods = [
    { icon: HiOutlineCode, title: 'REST & GraphQL APIs', desc: 'Standards-based API connectors for any modern system with HTTP endpoints.' },
    { icon: HiOutlineServer, title: 'Pre-built Connectors', desc: '200+ ready-to-deploy connectors for enterprise SaaS platforms — plug in and automate within minutes.' },
    { icon: HiOutlineArrowCircleRight, title: 'Event Streaming', desc: 'Real-time data ingestion via Kafka, Kinesis, and Azure Event Hub for event-driven automation.' },
    { icon: HiOutlineLightningBolt, title: 'Webhooks & Triggers', desc: 'Bi-directional webhooks that initiate workflows based on events from any connected system.' },
];


/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────── */
const AIAutomation = () => {
    return (
        <>
            <Helmet>
                <title>AI Automation Platform - Nebulytix Technologies</title>
                <meta name="description" content="Nebulytix AI Automation Platform: platform overview, AI agents, workflow automation, enterprise use cases and integration capabilities for modern enterprises." />
            </Helmet>
            <Navbar />
            <main>

                {/* ── HERO ──────────────────────────────────────────── */}
                <section className="pt-36 pb-24 relative overflow-hidden" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="glow-orb" style={{ width: 800, height: 700, top: '-25%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(0,102,255,0.09) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                Solutions · AI Automation
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-6 leading-tight"
                            style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
                        >
                            AI Automation <span className="text-gradient">Platform</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="text-lg max-w-2xl mx-auto mb-10"
                            style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
                        >
                            An enterprise-grade platform that deploys intelligent AI agents, automates complex workflows,
                            and integrates with your existing systems — delivering measurable operational transformation.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-4">
                            <Link to="/contact" className="btn-primary px-8 py-3 text-sm flex items-center gap-2">
                                Request a Demo <HiArrowRight />
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
                                { value: '200+', label: 'Pre-built Connectors' },
                                { value: '80%', label: 'Avg. Process Time Reduction' },
                                { value: '6 mos', label: 'Avg. ROI Payback Period' },
                                { value: '99.9%', label: 'Platform Uptime SLA' },
                            ].map((s, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl md:text-3xl font-black mb-1 text-gradient">{s.value}</div>
                                    <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── SECTION 1: OVERVIEW OF AUTOMATION PLATFORM ─────── */}
                <section className="py-20" style={{ background: 'var(--color-page-surface)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                01 · Platform Overview
                            </span>
                            <h2 className="section-title mt-3 text-3xl md:text-4xl">
                                Overview of the <span className="text-gradient">Automation Platform</span>
                            </h2>
                            <p className="section-subtitle max-w-2xl">
                                The Nebulytix AI Automation Platform is an end-to-end intelligence layer for enterprise operations.
                                It combines AI agents, workflow orchestration, and deep system integrations into a unified platform
                                that replaces fragmented point solutions.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
                            {/* Left: what it is */}
                            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                className="p-8 rounded-2xl"
                                style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.1)', borderLeft: '4px solid var(--color-primary)', boxShadow: '0 4px 24px rgba(0,102,255,0.07)' }}
                            >
                                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>What is the Platform?</h3>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                                    The Nebulytix AI Automation Platform is a comprehensive enterprise automation solution that
                                    enables organizations to automate repetitive tasks, orchestrate complex multi-system workflows,
                                    and deploy AI agents that operate autonomously across business functions.
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                    Unlike traditional RPA tools that simply mimic clicks, our platform uses AI to understand
                                    context, make decisions, handle exceptions intelligently, and continuously improve
                                    over time based on operational data.
                                </p>
                            </motion.div>
                            {/* Right: how it works */}
                            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                className="p-8 rounded-2xl"
                                style={{ background: '#ffffff', border: '1px solid rgba(0,200,255,0.12)', borderLeft: '4px solid var(--color-accent)', boxShadow: '0 4px 24px rgba(0,200,255,0.07)' }}
                            >
                                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>How It Works</h3>
                                <div className="space-y-3">
                                    {[
                                        { step: '01', text: 'Connect your existing enterprise systems via pre-built connectors or APIs' },
                                        { step: '02', text: 'Design automation workflows using the visual no-code builder or configure AI agents' },
                                        { step: '03', text: 'Deploy and monitor automations with real-time dashboards and alerting' },
                                        { step: '04', text: 'Platform learns and self-optimizes based on outcome data continuously' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <span className="text-xs font-black px-2 py-0.5 rounded shrink-0 mt-0.5"
                                                style={{ background: 'rgba(0,200,255,0.1)', color: 'var(--color-accent)' }}>{item.step}</span>
                                            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Platform pillars */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {overviewPillars.map((p, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="p-5 rounded-2xl hover:-translate-y-1 transition-all duration-300"
                                    style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', borderTop: `3px solid ${p.color}`, boxShadow: '0 2px 16px rgba(0,102,255,0.05)' }}
                                >
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4" style={{ background: `${p.color}10`, color: p.color }}>
                                        <p.icon size={18} />
                                    </div>
                                    <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{p.title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{p.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SECTION 2: AI AGENTS & WORKFLOW AUTOMATION ─────── */}
                <section className="py-20" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                            <span className="section-eyebrow" style={{ color: 'var(--color-accent)', background: 'rgba(0,200,255,0.07)', border: '1px solid rgba(0,200,255,0.15)' }}>
                                02 · Agents & Workflows
                            </span>
                            <h2 className="section-title mt-3 text-3xl md:text-4xl">
                                AI Agents & <span className="text-gradient">Workflow Automation</span>
                            </h2>
                            <p className="section-subtitle max-w-2xl">
                                Nebulytix AI agents are autonomous digital workers — capable of reasoning, decision-making, and taking actions
                                across enterprise systems without continuous human oversight.
                            </p>
                        </motion.div>

                        {/* Agents grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                            {agents.map((agent, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="p-6 rounded-2xl hover:-translate-y-0.5 transition-all duration-200"
                                    style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.09)', boxShadow: '0 4px 20px rgba(0,102,255,0.06)' }}
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-3xl shrink-0">{agent.icon}</span>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{agent.name}</h3>
                                            <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>{agent.desc}</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {agent.tags.map((tag, ti) => (
                                                    <span key={ti} className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                                                        style={{ background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)', color: 'var(--color-primary)' }}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Workflow engine capabilities */}
                        <div className="grid lg:grid-cols-2 gap-8">
                            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                                    Workflow Automation Engine Capabilities
                                </h3>
                                <div className="space-y-3">
                                    {workflowCapabilities.map((cap, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <HiOutlineCheckCircle className="shrink-0 mt-0.5 text-lg" style={{ color: 'var(--color-primary)' }} />
                                            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{cap}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                className="p-8 rounded-2xl flex flex-col gap-5"
                                style={{ background: 'linear-gradient(160deg, #0a2560 0%, #0066ff 100%)' }}>
                                <h3 className="text-base font-bold text-white">Agentic AI Architecture</h3>
                                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                                    Our agents operate within a multi-agent framework — they can spawn sub-agents,
                                    delegate tasks, and collaborate on complex objectives that span multiple enterprise systems.
                                </p>
                                {['Plan tasks autonomously using goal-based reasoning', 'Execute actions across connected APIs and systems', 'Verify results and retry on failure without human input', 'Escalate to humans only when truly needed'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-white opacity-60" />
                                        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>{item}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── SECTION 3: ENTERPRISE USE CASES ─────────────────── */}
                <section className="py-20" style={{ background: 'var(--color-page-surface)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                03 · Enterprise Use Cases
                            </span>
                            <h2 className="section-title mt-3 text-3xl md:text-4xl">
                                Enterprise <span className="text-gradient">Use Cases</span>
                            </h2>
                            <p className="section-subtitle max-w-2xl">
                                Real automation scenarios where Nebulytix delivers quantifiable ROI across industries.
                                Each use case is backed by proven deployment patterns and delivered outcomes.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {useCases.map((uc, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                    className="p-6 rounded-2xl flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300"
                                    style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', borderTop: `3px solid ${uc.color}`, boxShadow: '0 4px 20px rgba(0,102,255,0.06)' }}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl">{uc.emoji}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                                            style={{ background: `${uc.color}0d`, color: uc.color, border: `1px solid ${uc.color}20` }}>
                                            {uc.industry}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>{uc.title}</h3>
                                        <p className="text-xs font-semibold mb-3" style={{ color: uc.color }}>📈 {uc.outcome}</p>
                                        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{uc.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SECTION 4: INTEGRATION CAPABILITIES ─────────────── */}
                <section className="py-20" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                            <span className="section-eyebrow" style={{ color: 'var(--color-accent)', background: 'rgba(0,200,255,0.07)', border: '1px solid rgba(0,200,255,0.15)' }}>
                                04 · Integration Capabilities
                            </span>
                            <h2 className="section-title mt-3 text-3xl md:text-4xl">
                                Integration <span className="text-gradient">Capabilities</span>
                            </h2>
                            <p className="section-subtitle max-w-2xl">
                                No rip-and-replace. The Nebulytix platform connects with your existing enterprise stack via
                                200+ pre-built connectors, open APIs, and event-driven integration patterns.
                            </p>
                        </motion.div>

                        {/* Integration methods */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                            {integrationMethods.map((method, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="p-5 rounded-2xl text-center"
                                    style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 4px 20px rgba(0,102,255,0.05)' }}
                                >
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                                        style={{ background: 'rgba(0,102,255,0.08)', color: 'var(--color-primary)' }}>
                                        <method.icon size={18} />
                                    </div>
                                    <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{method.title}</h4>
                                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{method.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Integration categories */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {integrationCategories.map((cat, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                    className="p-6 rounded-2xl"
                                    style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', borderLeft: `3px solid ${cat.color}`, boxShadow: '0 4px 20px rgba(0,102,255,0.05)' }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-2xl">{cat.icon}</span>
                                        <h4 className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>{cat.category}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.systems.map((sys, si) => (
                                            <span key={si} className="text-[11px] font-medium px-2.5 py-1 rounded-lg"
                                                style={{ background: `${cat.color}07`, border: `1px solid ${cat.color}15`, color: 'var(--color-text-secondary)' }}>
                                                {sys}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ───────────────────────────────────────────── */}
                <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-page-surface)' }}>
                    <div className="glow-orb" style={{ width: 600, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: 'var(--color-text-primary)' }}>
                                Ready to <span className="text-gradient">Automate Your Enterprise?</span>
                            </h2>
                            <p className="mb-8 text-base" style={{ color: 'var(--color-text-secondary)' }}>
                                Book a product demo with our AI automation experts and receive a custom automation roadmap for your organization.
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

export default AIAutomation;
