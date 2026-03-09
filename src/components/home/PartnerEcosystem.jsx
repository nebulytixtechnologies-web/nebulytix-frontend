import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PartnerEcosystem = () => {
    const partnerTypes = [
        { emoji: '🤖', name: 'Technology Partners', description: 'AI, Automation, and Cloud partners building the foundation of our platform.' },
        { emoji: '📦', name: 'Product Partners', description: 'SaaS products integrated into the Nebulytix ecosystem for enterprise clients.' },
        { emoji: '🏢', name: 'Enterprise Clients', description: 'Organizations adopting digital transformation through the Nebulytix platform.' },
        { emoji: '🚀', name: 'Innovation Community', description: 'Developers, startups, and researchers accelerating AI ecosystem growth.' },
    ];

    return (
        <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-bg-surface)' }}>
            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/5"
                    >
                        <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                            Ecosystem
                        </span>
                        <h2 className="section-title mt-3">Integrated <span className="text-gradient">Partner Ecosystem</span></h2>
                        <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                            Nebulytix builds a platform-driven ecosystem bringing together technology partners,
                            product partners, enterprise clients, and innovation communities.
                        </p>
                        <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                            This ecosystem approach allows partners to <strong>integrate once and scale across
                                multiple enterprise deployments</strong> — turning your product into an enterprise solution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link to="/partners" className="btn-primary text-sm px-6 py-2.5">Become a Partner</Link>
                            <Link to="/solutions" className="btn-secondary text-sm px-6 py-2.5">Explore Solutions</Link>
                        </div>
                    </motion.div>

                    <div className="lg:w-3/5 grid grid-cols-2 gap-4">
                        {partnerTypes.map((p, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="card hover:shadow-md transition-shadow duration-200"
                                style={{ border: '1px solid rgba(0,102,255,0.08)' }}
                            >
                                <div className="text-2xl mb-3">{p.emoji}</div>
                                <h4 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>{p.name}</h4>
                                <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{p.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerEcosystem;
