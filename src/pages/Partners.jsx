import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    HiOutlineBolt,
    HiOutlineShieldCheck,
    HiOutlineUsers,
    HiOutlineChartBar,
    HiOutlineCheckCircle,
    HiOutlineCpuChip,
    HiOutlineCog6Tooth,
    HiOutlineCloud,
    HiOutlineHeart,
    HiOutlineServerStack,
    HiOutlineArrowRight
} from 'react-icons/hi2';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Partners = () => {
    return (
        <>
            <Helmet>
                <title>Partner Ecosystem - Nebulytix Technologies</title>
                <meta name="description" content="Join the Nebulytix Partner Ecosystem. We collaborate with technology, product, and integration partners to redefine digital architecture." />
            </Helmet>
            <Navbar />

            <main className="bg-white">
                {/* Hero Section */}
                <section className="pt-40 pb-24 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
                    <div className="container-custom relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl mx-auto"
                        >
                            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary-50 text-primary-600 border border-primary-100 mb-6">
                                Global Ecosystem
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black mb-8" style={{ color: 'var(--color-text-primary)' }}>
                                Partner with <span className="text-gradient">Nebulytix</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
                                Join our network of hardware, software, and service leaders to accelerate the adoption of AI-native digital ecosystems globally.
                            </p>
                            <button className="btn-primary px-10 py-5 text-lg">
                                Apply to Partner
                            </button>
                        </motion.div>
                    </div>
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-50/30 blur-[120px] rounded-full -z-1" />
                </section>

                {/* Section 1: Why Organizations Choose Nebulytix */}
                <section className="py-24 bg-white">
                    <div className="container-custom max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img src="/images/about-meeting.jpg" onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"; }} alt="Team Meeting" className="rounded-[32px] w-full h-auto object-cover shadow-lg aspect-[4/3]" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0B1B3D] leading-tight">
                                    Why Organizations Choose Nebulytix
                                </h2>
                                <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                    Enterprises choose Nebulytix because we combine technology expertise, scalable platforms, and a collaborative ecosystem approach.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        { title: 'Faster digital transformation initiatives', icon: HiOutlineBolt },
                                        { title: 'Reduced implementation risk', icon: HiOutlineShieldCheck },
                                        { title: 'Access to trusted technology partners', icon: HiOutlineUsers },
                                        { title: 'Scalable AI-driven systems and platforms', icon: HiOutlineChartBar },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-5 bg-[#F8FAFC] p-4 pr-6 rounded-2xl border border-slate-100 hover:shadow-md transition-all text-[#0B1B3D]">
                                            <div className="w-14 h-14 flex items-center justify-center bg-[#EBF3FF] text-[#2563EB] rounded-xl shrink-0">
                                                <item.icon className="text-2xl" />
                                            </div>
                                            <span className="font-medium text-[1.05rem]">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Why Partners Work with Nebulytix */}
                <section className="py-24 bg-white">
                    <div className="container-custom max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0B172E] rounded-[40px] p-12 lg:p-16 text-white grid lg:grid-cols-2 gap-16 shadow-2xl relative overflow-hidden"
                        >
                            {/* Decorative background gradients purely for polish */}
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#2563EB] opacity-10 blur-[130px] rounded-full"></div>
                                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#60A5FA] opacity-5 blur-[130px] rounded-full"></div>
                            </div>

                            <div className="relative z-10 flex flex-col justify-center">
                                <h4 className="text-[#60A5FA] font-bold text-[0.85rem] tracking-widest uppercase mb-4">Partner Benefits</h4>
                                <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">Why Partners Work with Nebulytix</h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed">
                                    Nebulytix provides technology partners with a powerful platform to scale their products and access enterprise opportunities.
                                </p>
                            </div>

                            <div className="space-y-3 relative z-10">
                                {[
                                    'Access to enterprise clients and global markets',
                                    'Joint product promotion and solution development',
                                    'Integration with Nebulytix AI automation platforms',
                                    'Co-selling and go-to-market opportunities',
                                    'Strategic consulting and technology support'
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-5 bg-[#17243E] p-5 rounded-2xl border border-[#233554] hover:bg-[#1E2E4B] hover:border-[#38517A] transition-colors cursor-default">
                                        <HiOutlineCheckCircle className="text-[#60A5FA] text-2xl shrink-0" />
                                        <span className="text-slate-200 text-lg font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Section 3: Partner With Nebulytix */}
                <section className="py-24 bg-white">
                    <div className="container-custom max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="sticky top-32"
                            >
                                <h4 className="text-[#2563EB] font-bold text-[0.85rem] tracking-widest uppercase mb-4">Partnership</h4>
                                <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-[#0B1B3D] leading-tight">Partner With Nebulytix</h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                                    Nebulytix collaborates with technology innovators, startups, and enterprise solution providers to expand the digital ecosystem. Together, we build scalable solutions that accelerate innovation and enterprise transformation.
                                </p>
                                <button className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-between w-max gap-4 shadow-lg shadow-blue-500/30">
                                    Join Our Partner Network <HiOutlineArrowRight className="text-xl" />
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-slate-500 mb-6 text-lg">Organizations developing solutions in these areas can join our partner network:</p>
                                <div className="space-y-4">
                                    {[
                                        { title: 'Artificial Intelligence', icon: HiOutlineCpuChip },
                                        { title: 'Automation Technologies', icon: HiOutlineCog6Tooth },
                                        { title: 'SaaS Platforms', icon: HiOutlineCloud },
                                        { title: 'Healthcare Technology', icon: HiOutlineHeart },
                                        { title: 'Enterprise Systems', icon: HiOutlineServerStack },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-5 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-[#0B1B3D]">
                                            <div className="w-14 h-14 flex items-center justify-center bg-[#EBF3FF] text-[#2563EB] rounded-2xl shrink-0">
                                                <item.icon className="text-[1.75rem]" />
                                            </div>
                                            <span className="font-semibold text-lg">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-text-primary)' }}>
                    <div className="container-custom relative z-10 text-center text-white">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            Build Your Legacy in the <br /> <span className="text-primary-400">AI Ecosystem</span>
                        </h2>
                        <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto text-primary-100">
                            Partner with us to create digital environments that are intelligent, sustainable, and powerful.
                        </p>
                        <button className="bg-primary-500 hover:bg-primary-400 text-white font-black px-12 py-5 rounded-2xl transition-all scale-110">
                            Become a Partner
                        </button>
                    </div>
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(var(--color-primary-light) 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} />
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Partners;
