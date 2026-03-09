import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineChip, HiOutlineGlobeAlt, HiOutlineLightningBolt, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const CorePlatforms = () => {
    const platforms = [
        {
            icon: HiOutlineChip,
            title: 'AI Automation Platform',
            desc: 'Build intelligent platforms that simplify digital transformation with AI-driven automation.',
            features: ['AI-Driven Automation', 'Intelligent Decision Systems', 'Process Optimization'],
            color: 'var(--color-primary)',
            path: '/solutions/ai-automation',
        },
        {
            icon: HiOutlineGlobeAlt,
            title: 'Digital Transformation Platform',
            desc: 'Modernize enterprise operations with cloud-native architecture and seamless platform integrations.',
            features: ['Workflow Automation', 'Platform Integrations', 'Digital Service Delivery'],
            color: 'var(--color-accent)',
            path: '/solutions/digital-transformation',
        },
        {
            icon: HiOutlineLightningBolt,
            title: 'Partner Innovation Platform',
            desc: 'Promote partner products, enable API integrations, and deploy joint solutions at enterprise scale.',
            features: ['Partner Product Promotion', 'API Integrations', 'Joint Solution Deployments'],
            color: 'var(--color-text-primary)',
            path: '/partners',
        },
    ];

    return (
        <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-bg-surface)' }}>
            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                        Nebulytix Core Platforms
                    </span>
                    <h2 className="section-title mt-3">Core <span className="text-gradient">Platforms Overview</span></h2>
                    <p className="section-subtitle max-w-xl">
                        Nebulytix builds a platform-driven ecosystem bringing together technology partners,
                        product partners, enterprise clients, and an innovation community.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {platforms.map((p, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="card group flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
                            style={{ borderLeft: `3px solid ${p.color}`, border: '1px solid rgba(0,102,255,0.08)', borderLeftWidth: 3, borderLeftColor: p.color }}
                        >
                            <div
                                className="w-9 h-9 rounded-lg flex items-center justify-center"
                                style={{ background: `${p.color}10`, color: p.color }}
                            >
                                <p.icon size={18} />
                            </div>
                            <h3 className="text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>{p.title}</h3>
                            <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{p.desc}</p>
                            <div className="flex flex-wrap gap-2 flex-1">
                                {p.features.map(f => (
                                    <span key={f} className="text-[11px] font-medium px-2.5 py-1 rounded-md" style={{ background: 'rgba(0,102,255,0.05)', color: 'var(--color-primary)', border: '1px solid rgba(0,102,255,0.1)' }}>
                                        {f}
                                    </span>
                                ))}
                            </div>
                            <Link
                                to={p.path}
                                className="inline-flex items-center gap-1 text-xs font-semibold mt-auto pt-2"
                                style={{ color: p.color }}
                            >
                                Explore Platform <HiArrowRight size={12} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorePlatforms;
