import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { HiOutlineSparkles, HiOutlineCog, HiOutlinePuzzle, HiOutlineLink } from 'react-icons/hi';

const Products = () => {
    return (
        <>
            <Helmet>
                <title>AI Automation Platform - Nebulytix Technologies</title>
                <meta name="description" content="The Nebulytix AI Automation Platform is a high-performance orchestration layer designed to transform fragmented business processes into cohesive, self-optimizing workflows." />
            </Helmet>
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
                    <div className="glow-orb" style={{ width: 800, height: 800, top: '-30%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(0,102,255,0.12) 0%, transparent 60%)' }} />
                    <div className="container-custom relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                AI Automation Platform
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-6 mb-6" style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
                                A Platform for <br /><span className="text-gradient">Intelligent Enterprise Automation</span>
                            </h1>
                            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                                The Nebulytix AI Automation Platform is a high-performance orchestration layer designed to transform fragmented business processes into cohesive, self-optimizing workflows.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Overview */}
                <section className="py-16 relative overflow-hidden" style={{ background: 'var(--color-bg-surface)' }}>
                    <div className="container-custom text-center max-w-4xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                Unlike traditional automation, our platform leverages cognitive intelligence to bridge the gap between legacy infrastructure and the future of autonomous business.
                            </p>
                            <p className="text-base md:text-lg leading-relaxed font-semibold italic" style={{ color: 'var(--color-primary)' }}>
                                "We provide the connective tissue that allows enterprises to deploy AI at scale, ensuring that automation is not a series of isolated tasks, but a unified strategic asset that drives measurable ROI and operational resilience."
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* AI Agents and Workflow Automation */}
                <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <span className="section-eyebrow" style={{ color: 'var(--color-accent)', background: 'rgba(0,200,255,0.06)', border: '1px solid rgba(0,200,255,0.12)' }}>
                                    Cognitive Agents
                                </span>
                                <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6" style={{ color: 'var(--color-text-primary)' }}>
                                    Autonomous AI Agents for <span className="text-gradient" style={{ backgroundImage: 'linear-gradient(to right, var(--color-accent), #00e5ff)' }}>Enterprise Operations</span>
                                </h2>
                                <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                                    Nebulytix goes beyond traditional Robotic Process Automation by introducing Cognitive AI Agents capable of handling complex processes and making real-time, data-driven decisions. Our platform enables enterprises to move from rigid rule-based automation to intelligent systems that understand context and adapt to changing business needs.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "Autonomous AI Agents", desc: "Nebulytix AI agents can process structured and unstructured data, interpret intent, and execute multi-step tasks with minimal human intervention, improving speed, accuracy, and operational efficiency.", icon: HiOutlineSparkles },
                                        { title: "Dynamic Workflow Orchestration", desc: "The platform replaces static “if–then” automation with adaptive workflows that continuously monitor processes, optimize task execution, and prevent operational bottlenecks.", icon: HiOutlineCog },
                                        { title: "Human-in-the-Loop Governance", desc: "Nebulytix integrates human oversight into automated systems, ensuring that AI manages large-scale operations while critical decisions remain guided by human expertise and governance.", icon: HiOutlinePuzzle }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 p-5 rounded-2xl" style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                                            <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: 'rgba(0,102,255,0.05)', color: 'var(--color-primary)' }}>
                                                <item.icon />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{item.title}</h4>
                                                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
                                <div className="aspect-square rounded-[2rem] overflow-hidden p-2" style={{ border: '2px dashed rgba(0,102,255,0.2)' }}>
                                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="Robotic Process to Cognitive AI" className="w-full h-full object-cover rounded-[1.5rem]" />
                                </div>
                                <div className="absolute top-10 -left-10 w-32 h-32 bg-primary-500/20 blur-3xl rounded-full" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Enterprise Use Cases & Integration */}
                <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-bg-surface)' }}>
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                            {/* Enterprise Use Cases */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-3xl p-8 lg:p-10 relative overflow-hidden flex flex-col"
                                style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}
                            >
                                <span className="section-eyebrow mb-4 inline-block" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                    Use Cases
                                </span>
                                <h2 className="text-2xl lg:text-3xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>Transforming Business Operations with AI</h2>

                                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--color-text-secondary)' }}>
                                    The Nebulytix AI Automation Platform supports a wide range of enterprise use cases across industries and operational functions. Organizations can implement automation to enhance productivity, reduce operational complexity, and improve service delivery.
                                </p>
                                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--color-text-secondary)' }}>
                                    Common enterprise applications include automating routine business processes, supporting data-driven decision-making, optimizing operational workflows, and enhancing customer service operations. The platform also enables organizations to build intelligent systems that monitor processes, identify inefficiencies, and continuously improve operational performance.
                                </p>
                                <p className="text-sm leading-relaxed font-semibold mt-4" style={{ color: 'var(--color-text-primary)' }}>
                                    By adopting AI automation, enterprises can focus their resources on strategic initiatives while automated systems handle repetitive and time-consuming tasks.
                                </p>
                            </motion.div>

                            {/* Integration Capabilities */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="rounded-3xl p-8 lg:p-10 relative flex flex-col"
                                style={{ background: 'linear-gradient(160deg, #0a2560 0%, #0066ff 100%)', boxShadow: '0 10px 40px rgba(0,102,255,0.2)' }}
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 blur-[100px] rounded-full" />

                                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 inline-block self-start"
                                    style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.15)' }}>
                                    Integration Capabilities
                                </span>
                                <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">Connecting Enterprise Systems and Platforms</h2>

                                <p className="text-sm leading-relaxed mb-4 flex-1 text-blue-100">
                                    The Nebulytix AI Automation Platform is built with an integration-first architecture, allowing organizations to connect automation capabilities with their existing enterprise systems. The platform supports seamless integration with cloud services, enterprise software, and third-party applications through flexible APIs and modern connectivity frameworks.
                                </p>
                                <p className="text-sm leading-relaxed mb-4 flex-1 text-blue-100">
                                    This approach ensures that enterprises can implement automation without disrupting their current technology infrastructure. By connecting with existing platforms and data sources, Nebulytix enables organizations to create unified digital ecosystems where systems, data, and workflows operate in harmony.
                                </p>
                                <p className="text-sm leading-relaxed font-semibold mt-4 text-white">
                                    The result is a scalable and adaptable automation environment that supports continuous innovation and operational growth.
                                </p>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
                    <div className="container-custom text-center relative z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>Ready to Deploy Intelligent Automation?</h2>
                            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>Connect with our automation experts to request a customized demo.</p>
                            <Link to="/contact" className="btn-primary text-base px-10 py-4 shadow-xl shadow-blue-500/20">Schedule Consultation</Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Products;
