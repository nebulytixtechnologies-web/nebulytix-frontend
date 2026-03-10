import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineEye, HiOutlineRocketLaunch } from 'react-icons/hi2';
import { HiOutlineCheckCircle } from 'react-icons/hi';

const ValueProp = () => {
    const missions = [
        "Accelerate enterprise adoption of Artificial Intelligence and automation",
        "Enable technology partners to scale their solutions globally",
        "Build intelligent platforms that simplify digital transformation",
        "Foster collaborative ecosystems that drive innovation and growth"
    ];

    return (
        <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
            <div className="container-custom relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl p-8 lg:p-10 relative overflow-hidden"
                        style={{ background: 'var(--color-bg-surface)', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 opacity-5 blur-[100px] rounded-full" />

                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(0,102,255,0.1)', color: 'var(--color-primary)' }}>
                            <HiOutlineEye size={28} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Our <span className="text-gradient">Vision</span></h2>
                        <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                            At Nebulytix, we envision a future where technology innovation is driven through collaboration, scalable platforms, and intelligent systems.
                        </p>
                        <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                            Our goal is to build a global AI ecosystem that connects enterprises, startups, and technology partners to solve complex industry challenges and accelerate digital transformation.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="rounded-3xl p-8 lg:p-10 relative overflow-hidden"
                        style={{ background: 'var(--color-bg-surface)', border: '1px solid rgba(0,200,255,0.08)', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 opacity-5 blur-[100px] rounded-full" />

                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(0,200,255,0.1)', color: 'var(--color-accent)' }}>
                            <HiOutlineRocketLaunch size={28} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Our <span className="text-gradient" style={{ backgroundImage: 'linear-gradient(to right, var(--color-accent), #00e5ff)' }}>Mission</span></h2>
                        <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                            Nebulytix is committed to empowering organizations and partners through advanced technology platforms and strategic collaboration. Our mission is to:
                        </p>

                        <ul className="space-y-3">
                            {missions.map((mission, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <HiOutlineCheckCircle className="shrink-0 mt-1 text-lg" style={{ color: 'var(--color-accent)' }} />
                                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{mission}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default ValueProp;
