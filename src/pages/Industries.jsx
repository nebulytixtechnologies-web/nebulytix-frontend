import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import {
    HiArrowRight,
    HiOutlineHeart,
    HiOutlineLibrary,
    HiOutlineCurrencyDollar,
    HiOutlineShoppingCart,
    HiOutlineCheckCircle
} from 'react-icons/hi';

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const industries = [
    {
        id: 'healthcare',
        emoji: '🏥',
        icon: HiOutlineHeart,
        title: 'Healthcare',
        subtitle: 'Intelligent Health Systems',
        desc: 'We partner with healthcare providers to build AI-powered clinical workflows, intelligent patient engagement systems, predictive diagnostics, and interoperable data platforms that improve outcomes while reducing operational overhead.',
        outcomes: ['30% reduction in administrative overhead', 'Improved diagnostic accuracy', 'Seamless EHR integration'],
        useCases: [
            { name: 'Patient Journey Automation', desc: 'End-to-end automation of scheduling, intake, and post-care follow-up.' },
            { name: 'Clinical Note Processing', desc: 'AI agents that transcribe and structure clinical notes directly into the EHR.' },
            { name: 'Predictive Resource Planning', desc: 'Forecasting patient admission rates to optimize staffing and facility usage.' }
        ],
        color: 'var(--color-primary)', // Blue
    },
    {
        id: 'finance',
        emoji: '🏦',
        icon: HiOutlineCurrencyDollar,
        title: 'Financial Services',
        subtitle: 'Smart Finance Operations',
        desc: 'For modern financial institutions, we deploy risk intelligence, real-time fraud detection architectures, automated compliance reporting suites, and AI-driven hyper-personalized customer advisory services.',
        outcomes: ['99% accuracy in KYC automation', 'Millisecond fraud detection', 'Reduced compliance risk'],
        useCases: [
            { name: 'Automated Loan Origination', desc: 'AI agents that extract application data, verify documents, and score credit risk instantly.' },
            { name: 'AML & Fraud Detection', desc: 'Machine learning models identifying anomalous transaction patterns across global networks.' },
            { name: 'Intelligent Client Advisory', desc: 'Robo-advisors generating contextual financial insights based on real-time market data.' }
        ],
        color: 'var(--color-accent)', // Cyan/Teal
    },
    {
        id: 'government',
        emoji: '🏛️',
        icon: HiOutlineLibrary,
        title: 'Government & Public Sector',
        subtitle: 'Digital Citizen Services',
        desc: 'We modernize legacy infrastructure into agile e-government platforms. Our solutions deliver intelligent citizen services, secure digital identity management, and advanced data-driven policy analytics.',
        outcomes: ['3x faster public service delivery', 'Data sovereignty & peak security', 'Unified digital citizen profiles'],
        useCases: [
            { name: 'Citizen Service Portals', desc: 'Automated 24/7 AI agents assisting citizens with applications, licenses, and permits.' },
            { name: 'Policy Impact Analytics', desc: 'Simulating the economic and social impacts of policy decisions using demographic datasets.' },
            { name: 'Smart Infrastructure', desc: 'IoT and AI integration for predictive maintenance of public assets and city planning.' }
        ],
        color: 'var(--color-text-primary)', // Dark Navy
    },
    {
        id: 'retail',
        emoji: '🛍️',
        icon: HiOutlineShoppingCart,
        title: 'Retail & Enterprise',
        subtitle: 'Intelligent Commerce & Enterprise Ops',
        desc: 'Unifying storefronts and enterprise back-offices with AI. From demand forecasting and supply chain intelligence to omnichannel customer engagement and deep enterprise platform modernization.',
        outcomes: ['40% improvement in demand forecasting', 'Automated supply chain routing', 'Boosted customer lifetime value'],
        useCases: [
            { name: 'Dynamic Inventory Optimization', desc: 'Predictive models preventing out-of-stocks while minimizing warehousing capital.' },
            { name: 'Enterprise Workflow Automation', desc: 'Intelligent routing of internal approvals, IT ticketing, and HR operations.' },
            { name: 'Hyper-Personalized Commerce', desc: 'AI engines delivering dynamic pricing, tailored recommendations, and targeted promotions.' }
        ],
        color: 'var(--color-primary)', // Blue
    }
];

const Industries = () => {
    return (
        <>
            <Helmet>
                <title>Industries We Serve - Nebulytix Technologies</title>
                <meta name="description" content="Nebulytix delivers tailored AI and digital transformation solutions for Healthcare, Financial Services, Government & Public Sector, and Retail & Enterprise." />
            </Helmet>
            <Navbar />
            <main>
                {/* ── HERO ──────────────────────────────────────────── */}
                <section className="pt-36 pb-24 relative overflow-hidden" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="glow-orb" style={{ width: 800, height: 700, top: '-25%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(0,102,255,0.09) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                Target Markets
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-6 leading-tight"
                            style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
                        >
                            Industries We <span className="text-gradient">Serve</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="text-lg max-w-2xl mx-auto mb-10"
                            style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
                        >
                            Deep domain expertise crossed with cutting-edge AI automation capabilities. We architect industry-specific transformation strategies that turn technology into your defining competitive advantage.
                        </motion.p>
                    </div>
                </section>

                {/* ── INDUSTRIES DETAILED SECTIONS ────────────────── */}
                <section className="py-12" style={{ background: 'var(--color-page-surface)' }}>
                    <div className="container-custom">
                        <div className="flex flex-col gap-16 md:gap-24">
                            {industries.map((ind, i) => (
                                <motion.div
                                    key={ind.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5 }}
                                    className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
                                >
                                    {/* Info Side */}
                                    <div className="flex-1 w-full">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-4xl">{ind.emoji}</span>
                                            <span className="font-bold uppercase tracking-widest text-xs px-2.5 py-1 rounded"
                                                style={{ background: `${ind.color}15`, color: ind.color }}>
                                                {ind.subtitle}
                                            </span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: 'var(--color-text-primary)' }}>
                                            {ind.title}
                                        </h2>
                                        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                                            {ind.desc}
                                        </p>

                                        <div className="p-6 rounded-2xl mb-8" style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 4px 20px rgba(0,102,255,0.05)' }}>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: ind.color }}>Measurable Outcomes</h4>
                                            <div className="space-y-3">
                                                {ind.outcomes.map((outcome, oi) => (
                                                    <div key={oi} className="flex items-center gap-3">
                                                        <HiOutlineCheckCircle className="text-lg shrink-0" style={{ color: ind.color }} />
                                                        <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>{outcome}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <Link to="/contact" className="btn-primary px-8 py-3 text-sm inline-flex items-center gap-2">
                                            Discuss {ind.title} Solutions <HiArrowRight />
                                        </Link>
                                    </div>

                                    {/* Use Cases Cards Side */}
                                    <div className="flex-1 w-full grid gap-4">
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1 ml-2" style={{ color: 'var(--color-text-muted)' }}>Core Applied Use Cases</h4>
                                        {ind.useCases.map((uc, ui) => (
                                            <div key={ui} className="p-5 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
                                                style={{ background: '#ffffff', border: `1px solid ${ind.color}20`, borderLeft: `4px solid ${ind.color}`, boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
                                                <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{uc.name}</h3>
                                                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{uc.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ───────────────────────────────────────────── */}
                <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="glow-orb" style={{ width: 600, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: 'var(--color-text-primary)' }}>
                                Don't See Your Industry?
                            </h2>
                            <p className="mb-8 text-base" style={{ color: 'var(--color-text-secondary)' }}>
                                Our core platforms — AI Automation and Digital Transformation — are highly composable and adaptable across multiple sectors.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link to="/#cta-section" className="btn-primary px-10 py-3 text-sm inline-flex items-center gap-2">
                                    Talk to Our Solutions Architects <HiArrowRight />
                                </Link>
                                <Link to="/solutions" className="btn-secondary px-8 py-3 text-sm">
                                    Explore Core Solutions
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

export default Industries;
