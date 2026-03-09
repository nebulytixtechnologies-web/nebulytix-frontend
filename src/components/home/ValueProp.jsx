import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineSparkles, HiOutlineRefresh, HiOutlineUserGroup } from 'react-icons/hi';

const ValueProp = () => {
    const values = [
        {
            icon: HiOutlineSparkles,
            title: 'AI Automation',
            description: 'Accelerate enterprise AI adoption with autonomous agents, intelligent workflow automation, and AI-driven decision systems at scale.',
            color: 'var(--color-primary)',
        },
        {
            icon: HiOutlineRefresh,
            title: 'Digital Transformation',
            description: 'Enable partners to scale their products globally with cloud-native modernization and intelligent platform integration.',
            color: 'var(--color-accent)',
        },
        {
            icon: HiOutlineUserGroup,
            title: 'Partner Ecosystem',
            description: 'Create collaborative technology ecosystems where enterprises, startups, and technology partners solve complex industry challenges together.',
            color: 'var(--color-text-primary)',
        },
    ];

    return (
        <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                        Our Mission
                    </span>
                    <h2 className="section-title">Our <span className="text-gradient">Value Proposition</span></h2>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        Nebulytix exists to accelerate enterprise AI adoption, enable partners to scale globally,
                        and build intelligent platforms that simplify digital transformation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {values.map((val, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="card group hover:shadow-lg transition-shadow duration-300"
                            style={{ border: '1px solid rgba(0,102,255,0.08)' }}
                        >
                            <div
                                className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-xl"
                                style={{ background: `${val.color}12`, border: `1px solid ${val.color}25`, color: val.color }}
                            >
                                <val.icon />
                            </div>
                            <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{val.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{val.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
