import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import {
    HiOutlineRocketLaunch,
    HiOutlineGlobeAlt,
    HiOutlineLightBulb,
    HiOutlineUserGroup,
    HiOutlineArrowTrendingUp,
    HiOutlineRectangleGroup,
    HiOutlineArrowPath
} from 'react-icons/hi2';

const About = () => {
    const iconColors = [
        { bg: 'rgba(0,102,255,0.06)', border: 'rgba(0,102,255,0.15)', text: 'var(--color-primary)' },
        { bg: 'rgba(0,200,255,0.06)', border: 'rgba(0,200,255,0.15)', text: 'var(--color-accent)' },
        { bg: 'rgba(5,24,58,0.04)', border: 'rgba(5,24,58,0.1)', text: 'var(--color-text-primary)' },
        { bg: 'rgba(0,102,255,0.06)', border: 'rgba(0,102,255,0.15)', text: 'var(--color-primary-light)' },
    ];

    const PageHero = ({ title, accent, subtitle }) => (
        <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
            <div className="glow-orb" style={{ width: 600, height: 600, top: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(26,95,255,0.15) 0%, transparent 70%)' }} />
            <div className="container-custom relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                        {title} <span className="text-gradient">{accent}</span>
                    </h1>
                    <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>{subtitle}</p>
                </motion.div>
            </div>
        </section>
    );

    return (
        <>
            <Helmet>
                <title>About Us - Nebulytix Technologies</title>
                <meta name="description" content="Learn about Nebulytix Technologies - our vision, mission, ecosystem philosophy, and global collaboration model." />
            </Helmet>
            <Navbar />
            <main>
                <PageHero
                    title="About"
                    accent="Nebulytix"
                    subtitle="Pioneering the next generation of AI-powered digital ecosystems for global enterprises."
                />

                {/* Vision & Mission */}
                <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-bg-surface)' }}>
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <h2 className="text-3xl font-bold mb-8 text-gradient">Vision & Mission</h2>
                                <div className="space-y-8">
                                    <div className="p-6 rounded-2xl border-l-4" style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.12)', borderLeftWidth: 4, borderLeftColor: 'var(--color-primary)', boxShadow: '0 4px 24px rgba(0,102,255,0.07)' }}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,102,255,0.08)', color: 'var(--color-primary)' }}>🌐</div>
                                            <h3 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>Our Vision</h3>
                                        </div>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                            At Nebulytix, we believe the future of technology is built through collaboration, open innovation, and scalable platforms. Our vision is to create a global AI ecosystem where enterprises, startups, and technology partners collaborate to solve complex industry challenges.
                                        </p>
                                    </div>
                                    <div className="p-6 rounded-2xl border-l-4" style={{ background: '#ffffff', border: '1px solid rgba(0,200,255,0.15)', borderLeftWidth: 4, borderLeftColor: 'var(--color-accent)', boxShadow: '0 4px 24px rgba(0,200,255,0.07)' }}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,200,255,0.08)', color: 'var(--color-accent)' }}>🎯</div>
                                            <h3 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>Our Mission</h3>
                                        </div>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                            Nebulytix exists to accelerate enterprise AI adoption, enable partners to scale their products globally, build intelligent platforms that simplify digital transformation, and create collaborative technology ecosystems.
                                        </p>
                                        <ul className="mt-4 space-y-2">
                                            {['Accelerate enterprise AI adoption', 'Enable partners to scale globally', 'Build intelligent, simplified platforms', 'Create collaborative tech ecosystems'].map((m, i) => (
                                                <li key={i} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                                                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--color-accent)' }} />{m}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
                                <div className="aspect-video rounded-3xl overflow-hidden glass p-1">
                                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" alt="Nebulytix Vision" className="w-full h-full object-cover rounded-[1.4rem]" />
                                    <div className="absolute inset-0 bg-primary-500/10 mix-blend-overlay" />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-400/20 blur-3xl rounded-full" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Ecosystem Philosophy */}
                <section className="py-24 relative" style={{ background: 'var(--color-bg)' }}>
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl font-bold mb-6 text-gradient">Ecosystem Philosophy</h2>
                            <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                                We move beyond isolated software products. Our philosophy centers on creating cohesive, self-evolving digital environments.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: HiOutlineRectangleGroup, title: 'Integration First', desc: 'Every component is designed to harmonize with existing and future digital assets.' },
                                { icon: HiOutlineArrowPath, title: 'Adaptive Intelligence', desc: 'Systems that learn from operational data and autonomously optimize over time.' },
                                { icon: HiOutlineUserGroup, title: 'Human-Centric Design', desc: 'Empowering humans with AI agents that handle complexity, leaving creativity to you.' },
                            ].map((item, idx) => (
                                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-2xl text-center group transition-all duration-300 hover:-translate-y-1"
                                    style={{ background: '#ffffff', border: `1px solid ${iconColors[idx].border}`, borderTop: `3px solid ${iconColors[idx].text}`, boxShadow: '0 4px 24px rgba(0,102,255,0.07)' }}>
                                    <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl"
                                        style={{ background: iconColors[idx].bg, color: iconColors[idx].text, border: `1px solid ${iconColors[idx].border}` }}>
                                        <item.icon />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>{item.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Leadership & Innovation */}
                <section className="py-24 relative" style={{ background: 'var(--color-bg-surface)' }}>
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1 relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" className="rounded-2xl" alt="Innovation" />
                                        <img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=400" className="rounded-2xl" alt="Leadership" />
                                    </div>
                                    <div className="space-y-4 mt-8">
                                        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=400" className="rounded-2xl" alt="Strategy" />
                                        <div className="aspect-square bg-primary-600 rounded-2xl flex items-center justify-center p-6 text-center">
                                            <p className="font-bold text-white text-lg">Innovate. Scale. Lead.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
                                <h2 className="text-3xl font-bold mb-8 text-gradient">Leadership & Innovation</h2>
                                <p className="text-lg mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                                    Our leadership team brings together decades of experience from Silicon Valley's most innovative tech giants and global consulting firms.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Pioneering R&D in Generative AI for enterprise.',
                                        'Strategic advisory for Digital Fortune 500 transformations.',
                                        'Commitment to ethical and transparent AI development.',
                                        'Agile leadership culture that responds to instant market shifts.'
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 mt-1">
                                                <HiOutlineArrowTrendingUp className="text-primary-400 text-xs" />
                                            </span>
                                            <span style={{ color: 'var(--color-text-secondary)' }}>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Global Collaboration Model */}
                <section className="py-24 relative" style={{ background: 'var(--color-bg)' }}>
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl font-bold mb-6 text-gradient">Global Collaboration Model</h2>
                            <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                                Our distributed model ensures 24/7 innovation delivery, tapping into a premium global talent pool across 3 continents.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: HiOutlineGlobeAlt, title: 'Distributed Ops', val: '24/7 Delivery' },
                                { icon: HiOutlineUserGroup, title: 'Core Specialists', val: '150+ Experts' },
                                { icon: HiOutlineLightBulb, title: 'Joint R&D', val: 'Partner Active' },
                                { icon: HiOutlineRocketLaunch, title: 'Rapid Prototype', val: '2-Week Cycles' },
                            ].map((stat, idx) => (
                                <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                                    style={{ background: '#ffffff', border: `1px solid ${iconColors[idx].border}`, borderTop: `3px solid ${iconColors[idx].text}`, boxShadow: '0 4px 24px rgba(0,102,255,0.07)' }}>
                                    <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: iconColors[idx].bg, color: iconColors[idx].text }}>
                                        <stat.icon className="text-2xl" />
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-text-muted)' }}>{stat.title}</p>
                                    <h4 className="text-2xl font-bold" style={{ color: iconColors[idx].text }}>{stat.val}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default About;