import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineCheckCircle, HiOutlineUserAdd } from 'react-icons/hi';

const PartnerEcosystem = () => {
    const partnerBenefits = [
        "Access to enterprise clients and global markets",
        "Joint product promotion and solution development",
        "Integration with Nebulytix AI automation platforms",
        "Co-selling and go-to-market opportunities",
        "Strategic consulting and technology support"
    ];

    const partnerAreas = [
        "Artificial Intelligence",
        "Automation Technologies",
        "SaaS Platforms",
        "Healthcare Technology",
        "Enterprise Systems"
    ];



    return (
        <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-bg-surface)' }}>
            <div className="container-custom relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Why Partners Work with Nebulytix */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                            Why Partner
                        </span>
                        <h2 className="section-title mt-3">Why Partners Work <br /><span className="text-gradient">With Nebulytix</span></h2>
                        <p className="text-base mb-8 leading-relaxed max-w-lg" style={{ color: 'var(--color-text-secondary)' }}>
                            Nebulytix provides technology partners with a powerful platform to scale their products and access enterprise opportunities.
                        </p>

                        <h4 className="font-bold text-lg mb-4" style={{ color: 'var(--color-text-primary)' }}>Partner Benefits</h4>
                        <ul className="space-y-3">
                            {partnerBenefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <HiOutlineCheckCircle className="shrink-0 mt-1 text-lg" style={{ color: 'var(--color-primary)' }} />
                                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/partners" className="btn-primary mt-8 px-6 py-3 inline-flex items-center gap-2">
                            <HiOutlineUserAdd /> Become a Partner
                        </Link>
                    </motion.div>

                    {/* Partner With Nebulytix */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl p-8 lg:p-10"
                        style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}
                    >
                        <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Partner With Nebulytix</h3>
                        <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                            Nebulytix collaborates with technology innovators, startups, and enterprise solution providers to expand the digital ecosystem.
                        </p>

                        <p className="text-sm font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                            Organizations developing solutions in the following areas can join our partner network:
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {partnerAreas.map((area, idx) => (
                                <span key={idx} className="text-xs px-3 py-1.5 rounded-lg" style={{ background: 'rgba(0,102,255,0.05)', color: 'var(--color-primary)', border: '1px solid rgba(0,102,255,0.1)' }}>
                                    {area}
                                </span>
                            ))}
                        </div>

                        <p className="text-sm font-semibold italic" style={{ color: 'var(--color-text-secondary)' }}>
                            "Together, we build scalable solutions that accelerate innovation and enterprise transformation."
                        </p>
                    </motion.div>
                </div>



            </div>
        </section>
    );
};

export default PartnerEcosystem;
