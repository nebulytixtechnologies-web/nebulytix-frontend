import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import {
    HiOutlineEye,
    HiOutlineRocketLaunch,
    HiOutlineCheckCircle,
} from 'react-icons/hi2';

const About = () => {

    const PageHero = ({ title, accent, subtitle }) => (
        <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: 'var(--color-page-bg)' }}>
            <div className="glow-orb" style={{ width: 600, height: 600, top: '-20%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(26,95,255,0.15) 0%, transparent 70%)' }} />
            <div className="container-custom relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6" style={{ color: 'var(--color-text-primary)' }}>
                        {title} <span className="text-gradient">{accent}</span>
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );

    return (
        <>
            <Helmet>
                <title>About Us - Nebulytix Technologies</title>
                <meta name="description" content="Nebulytix is a leading architect of AI-driven digital ecosystems, dedicated to bridging the gap between advanced computational intelligence and large-scale industrial application." />
            </Helmet>
            <Navbar />
            <main>
                <PageHero
                    title="About"
                    accent="Nebulytix"
                    subtitle="Nebulytix is a leading architect of AI-driven digital ecosystems, dedicated to bridging the gap between advanced computational intelligence and large-scale industrial application."
                />

                {/* About Intro Section */}
                <section className="py-12 relative overflow-hidden" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="container-custom">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
                            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                                Our approach combines strategic consulting, scalable technology platforms, and a collaborative partner ecosystem to help organizations navigate complex technology landscapes and unlock new opportunities for growth.
                            </p>
                            <p className="text-lg leading-relaxed font-semibold" style={{ color: 'var(--color-primary)' }}>
                                Nebulytix is committed to building solutions that empower enterprises to modernize operations, adopt emerging technologies, and drive sustainable digital innovation.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-page-surface)' }}>
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                            {/* Vision */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-3xl p-8 lg:p-10 relative overflow-hidden"
                                style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 opacity-5 blur-[100px] rounded-full" />

                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(0,102,255,0.1)', color: 'var(--color-primary)' }}>
                                    <HiOutlineEye size={28} />
                                </div>
                                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Our <span className="text-gradient">Vision</span></h2>
                                <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                                    Our vision is to build a global AI-driven technology ecosystem where enterprises, startups, and technology partners collaborate to solve complex challenges and accelerate innovation.
                                </p>
                                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                    Nebulytix aims to become a trusted platform for organizations seeking to adopt intelligent technologies and scale digital transformation initiatives across industries.
                                </p>
                            </motion.div>

                            {/* Mission */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="rounded-3xl p-8 lg:p-10 relative overflow-hidden"
                                style={{ background: '#ffffff', border: '1px solid rgba(0,200,255,0.08)', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 opacity-5 blur-[100px] rounded-full" />

                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(0,200,255,0.1)', color: 'var(--color-accent)' }}>
                                    <HiOutlineRocketLaunch size={28} />
                                </div>
                                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Our <span className="text-gradient" style={{ backgroundImage: 'linear-gradient(to right, var(--color-accent), #00e5ff)' }}>Mission</span></h2>
                                <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                                    Our mission is to enable organizations to harness the power of artificial intelligence, automation, and modern digital platforms to transform operations and create future-ready enterprises.<br /><br />
                                    We strive to:
                                </p>

                                <ul className="space-y-3">
                                    {[
                                        "Accelerate enterprise adoption of AI and automation technologies",
                                        "Enable partners to expand their solutions across global markets",
                                        "Develop intelligent platforms that simplify digital transformation",
                                        "Foster collaborative ecosystems that drive innovation and growth"
                                    ].map((mission, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <HiOutlineCheckCircle className="shrink-0 mt-1 text-lg" style={{ color: 'var(--color-accent)' }} />
                                            <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>{mission}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Ecosystem Philosophy */}
                <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                Ecosystem Philosophy
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6" style={{ color: 'var(--color-text-primary)' }}>
                                Architecting the Future of <span className="text-gradient">Collaborative Enterprise</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <div className="space-y-6">
                                    <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                        At Nebulytix, we believe the future of technology lies in collaborative ecosystems rather than isolated solutions.
                                    </p>
                                    <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                        Modern enterprises rely on interconnected platforms, partners, and technologies to operate efficiently. Our ecosystem-driven approach brings together technology providers, SaaS product companies, enterprises, and innovation communities to build integrated solutions that address real-world challenges.
                                    </p>
                                    <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                        By enabling seamless collaboration between stakeholders, Nebulytix creates a platform where innovation can scale rapidly and organizations can access a diverse range of technology capabilities.
                                    </p>
                                    <div className="p-6 rounded-2xl" style={{ background: 'rgba(0,102,255,0.04)', borderLeft: '4px solid var(--color-primary)' }}>
                                        <p className="text-sm font-semibold italic flex items-center gap-3" style={{ color: 'var(--color-primary)' }}>
                                            "This philosophy allows partners to integrate their solutions once and deploy them across multiple enterprise environments through the Nebulytix ecosystem."
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
                                <div className="aspect-square rounded-full overflow-hidden p-2" style={{ border: '2px dashed rgba(0,102,255,0.2)' }}>
                                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" alt="Ecosystem Collaboration" className="w-full h-full object-cover rounded-full" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Leadership & Innovation */}
                <section className="py-24 relative" style={{ background: 'var(--color-page-surface)' }}>
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1 relative">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=400" className="rounded-2xl" alt="Innovation" />
                                        <div className="aspect-square bg-blue-900 rounded-2xl flex items-center justify-center p-6 text-center">
                                            <p className="font-bold text-white text-lg">Pragmatic Advancement</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 mt-8">
                                        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=400" className="rounded-2xl" alt="Leadership" />
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
                                <span className="section-eyebrow mb-3" style={{ color: 'var(--color-accent)', background: 'rgba(0,200,255,0.06)', border: '1px solid rgba(0,200,255,0.12)' }}>
                                    Leadership & Innovation
                                </span>
                                <h2 className="text-3xl font-bold mb-6 mt-3 text-gradient" style={{ backgroundImage: 'linear-gradient(to right, var(--color-accent), #00e5ff)' }}>Our Commitment to Innovation</h2>
                                <p className="text-base mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                    Innovation at Nebulytix is guided by a commitment to pragmatic advancement. Our leadership team brings together extensive industry experience and institutional knowledge to ensure that every technological breakthrough is aligned with the evolving demands of the global market.
                                </p>
                                <p className="text-base mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                    This approach allows us to develop solutions that are not only innovative but also practical, scalable, and relevant for modern enterprises.
                                </p>
                                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                    We continuously invest in strategic research and development to explore the next generation of intelligent technologies. Our focus includes adaptive artificial intelligence models, advanced automation systems, and ethical AI frameworks designed to support long-term technological sustainability.
                                </p>
                                <div className="mt-6 p-4 rounded-xl" style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.1)' }}>
                                    <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                                        Nebulytix follows a security-by-design approach, ensuring that every system is built with strong data governance, security controls, and regulatory compliance at its core.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Global Collaboration Model */}
                <section className="py-24 relative" style={{ background: 'var(--color-page-bg)' }}>
                    <div className="container-custom">
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                Global Collaboration Model
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6" style={{ color: 'var(--color-text-primary)' }}>
                                Global Collaboration <span className="text-gradient">Framework</span>
                            </h2>
                            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                Nebulytix operates through a global collaboration model that connects enterprises, technology partners, and innovation communities across regions and industries.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
                            {[
                                "Enterprises seeking digital transformation solutions",
                                "Technology companies providing AI, automation, and cloud capabilities",
                                "Startups and innovators building next-generation technologies",
                                "Developers and research communities contributing to technological advancement"
                            ].map((item, idx) => (
                                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-2xl flex items-center gap-4 transition-transform hover:-translate-y-1"
                                    style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(0,102,255,0.1)', color: 'var(--color-primary)' }}>
                                        <HiOutlineCheckCircle size={20} />
                                    </div>
                                    <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>{item}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
                            <p className="text-lg font-bold" style={{ color: 'var(--color-text-secondary)' }}>
                                By bringing these groups together, Nebulytix creates a dynamic ecosystem where knowledge, technology, and innovation flow freely accelerating the development and adoption of intelligent digital solutions worldwide.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default About;