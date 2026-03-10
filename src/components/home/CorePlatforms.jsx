import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineChip, HiOutlineGlobeAlt, HiOutlineLightningBolt, HiArrowRight, HiOutlineCubeTransparent, HiOutlineOfficeBuilding, HiOutlineLightBulb, HiOutlineKey } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const CorePlatforms = () => {

    return (
        <>
            {/* ECOSYSTEM PLATFORM APPROACH - DARK BENTO GRID */}
            <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#050a14' }}>
                {/* Background glow for dark section */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] opacity-30 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at top, rgba(0,102,255,0.4), transparent 70%)' }} />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-white">Our Tech <span className="text-gradient" style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #3b82f6)' }}>Ecosystem</span></h2>
                        <p className="text-base md:text-lg max-w-2xl mx-auto mt-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                            Nebulytix operates through a platform-driven ecosystem model that brings together enterprises, technology providers, and innovation communities.
                        </p>
                    </motion.div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[240px] gap-6 max-w-6xl mx-auto">

                        {/* 1. Workflow / Seamless Integration (Top Left) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                            className="rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-end group border"
                            style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                        >
                            <div className="absolute top-6 left-6 text-2xl text-blue-400 group-hover:scale-110 transition-transform"><HiOutlineKey /></div>

                            {/* Abstract Graphic */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-16 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm flex items-center px-4" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                                <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white"><HiOutlineCubeTransparent /></div>
                                <div className="ml-3">
                                    <div className="w-12 h-2 bg-white/20 rounded-full mb-2"></div>
                                    <div className="w-20 h-2 bg-white/10 rounded-full"></div>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-white mb-2">Workflow</h3>
                                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Connecting design, code, and delivery seamlessly.</p>
                            </div>
                        </motion.div>

                        {/* 2. Technology Partners (Top Right - Wide) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className="lg:col-span-2 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-end group border"
                            style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                        >
                            <div className="absolute top-6 left-6 text-2xl text-blue-400 group-hover:scale-110 transition-transform"><HiOutlineLightningBolt /></div>

                            {/* Hex Background Pattern */}
                            <div className="absolute top-0 right-0 w-2/3 h-full opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI4OCI+CiAgPHBhdGggZD0iTTI1LjUgMEwwIDQ0bDI1LjUgNDRMNTEgNDRMMjUuNSAwem0wIDE0TDEyIDQ0bDEzLjUgMzAgMTMuNS0zMEwyNS41IDE0eiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4=')]"></div>

                            <div className="relative z-10 w-full md:w-1/2">
                                <h3 className="text-lg font-bold text-white mb-2">Our Tech Ecosystem</h3>
                                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Powering innovation through modern frameworks and technology providers.</p>
                            </div>
                        </motion.div>

                        {/* 3. Product Partners (Bottom Left) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                            className="rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-end group border"
                            style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                        >
                            {/* Concentric squares */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                                <div className="w-16 h-16 border border-blue-400 rounded-lg absolute"></div>
                                <div className="w-24 h-24 border border-blue-400 rounded-[12px] absolute"></div>
                                <div className="w-32 h-32 border border-blue-400 rounded-2xl absolute"></div>
                            </div>

                            <div className="relative z-10 text-center flex flex-col items-center">
                                <h3 className="text-lg font-bold text-white mb-2">AI Solutions</h3>
                                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Smart tools that automate and enhance digital workflows.</p>
                            </div>
                        </motion.div>

                        {/* 4. Enterprise Clients (Bottom Center) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                            className="rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-end group border"
                            style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                        >
                            {/* Line Chart */}
                            <div className="absolute top-1/2 left-0 w-full h-1/2 -mt-4 opacity-50">
                                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full stroke-blue-400 fill-none" strokeWidth="2">
                                    <path d="M0,40 Q10,30 20,40 T40,30 T60,20 T80,30 T100,10" className="opacity-50" />
                                    <circle cx="60" cy="20" r="3" fill="#60a5fa" />
                                </svg>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-white mb-2">Analytics</h3>
                                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Actionable insights from real-time enterprise data.</p>
                            </div>
                        </motion.div>

                        {/* 5. Innovation Community (Bottom Right) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                            className="rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-end group border"
                            style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                        >
                            {/* Toggle / UI Control representation */}
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-40 h-20 rounded-xl bg-black/50 border border-white/10 flex flex-col p-3">
                                <div className="text-[10px] text-white/50 text-center mb-2">Title Here</div>
                                <div className="flex bg-white/5 rounded-lg overflow-hidden mt-auto">
                                    <div className="flex-1 py-1.5 text-[10px] text-center text-blue-400 border-r border-white/10">Default</div>
                                    <div className="flex-1 py-1.5 text-[10px] text-center text-white/50">Bold</div>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-white mb-2">Design</h3>
                                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Human-centered and visually engaging experiences.</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* CORE PLATFORMS - ASYMMETRIC GRID (IMAGE 1 STYLE) */}
            <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-bg-surface)' }}>
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mt-3" style={{ color: 'var(--color-text-primary)' }}>
                            Core Platforms to Build <br />A Business That <span className="text-gradient">Stands Out</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-6 max-w-5xl mx-auto h-auto lg:h-[600px]">

                        {/* LEFT TALL: AI Automation Platform */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="lg:row-span-2 rounded-[2rem] p-8 relative overflow-hidden flex flex-col"
                            style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 4px 24px rgba(0,102,255,0.04)' }}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-black mb-3" style={{ color: 'var(--color-text-primary)' }}>AI Automation Platform</h3>
                                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                    An intelligent framework designed to optimize enterprise operations. We bring intelligent agents and automated workflows that make companies stand out with rapid execution.
                                </p>
                            </div>

                            {/* Mockup / Image area at bottom */}
                            <div className="mt-auto relative h-[300px] w-full rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-sm rounded-b-none border border-gray-100 border-b-0">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" alt="App Mockup" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>

                        {/* RIGHT TOP WIDE: Digital Transformation Platform */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className="rounded-[2rem] p-8 relative overflow-hidden flex flex-col md:flex-row gap-6 items-center"
                            style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 4px 24px rgba(0,102,255,0.04)' }}
                        >
                            <div className="flex-1">
                                <h3 className="text-2xl font-black mb-3" style={{ color: 'var(--color-text-primary)' }}>Digital Transformation</h3>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                                    Moving from legacy to modern, we bring concepts to life online, creating digital environments that tell compelling brand stories.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 h-[140px] rounded-xl overflow-hidden shadow-lg border border-gray-100 flex-shrink-0 relative">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" alt="Dashboard" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>

                        {/* RIGHT BOTTOM WIDE: Partner Innovation Platform */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                            className="rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between"
                            style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 4px 24px rgba(0,102,255,0.04)' }}
                        >
                            <div>
                                <h3 className="text-2xl font-black mb-3" style={{ color: 'var(--color-text-primary)' }}>Partner Innovation</h3>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                    We offer strategic ecosystems to increase your product's visibility, improve integration, and attract more enterprise customers.
                                </p>
                            </div>

                            {/* Floating decorative elements */}
                            <div className="relative h-20 w-full mt-6">
                                <div className="absolute top-0 right-4 w-12 h-12 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40 flex items-center justify-center text-white"><HiOutlineCubeTransparent size={20} /></div>
                                <div className="absolute top-4 right-20 w-16 h-16 rounded-full bg-purple-500 shadow-lg shadow-purple-500/40 flex items-center justify-center text-white"><HiOutlineGlobeAlt size={28} /></div>
                                <div className="absolute bottom-0 right-12 w-10 h-10 rounded-full bg-orange-500 shadow-lg shadow-orange-500/40 flex items-center justify-center text-white"><HiOutlineLightningBolt size={18} /></div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default CorePlatforms;
