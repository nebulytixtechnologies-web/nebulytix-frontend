import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    HiOutlineUserGroup,
    HiOutlineCpuChip,
    HiOutlineCube,
    HiOutlineArrowsRightLeft,
    HiOutlineCheckBadge,
    HiOutlineGlobeAlt,
    HiOutlineRocketLaunch,
    HiOutlineArrowRight
} from 'react-icons/hi2';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Partners = () => {
    const partnerTypes = [
        {
            icon: HiOutlineCpuChip,
            title: 'Technology Partners',
            desc: 'Collaborate on core AI research, infrastructure, and computational breakthroughs.',
            color: 'var(--color-primary)'
        },
        {
            icon: HiOutlineCube,
            title: 'Product Partners',
            desc: 'Bundle our AI solutions with your software or hardware to deliver enhanced value.',
            color: 'var(--color-accent)'
        },
        {
            icon: HiOutlineArrowsRightLeft,
            title: 'Integration Partners',
            desc: 'Implement and customize Nebulytix ecosystems for global enterprise clients.',
            color: 'var(--color-text-primary)'
        }
    ];

    const benefits = [
        { title: 'Early Access', desc: 'Get priority access to our latest R&D and beta features.' },
        { title: 'Joint Marketing', desc: 'Collaborative campaigns and shared presence at global events.' },
        { title: 'Technical Support', desc: 'Dedicated engineering resources for integration success.' },
        { title: 'Revenue Share', desc: 'Competitive tiered commission models for mutual growth.' }
    ];

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

                {/* Partner Program Overview */}
                <section className="py-24 border-t border-slate-100">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-black mb-8" style={{ color: 'var(--color-text-primary)' }}>
                                    Partner Program <span className="text-gradient">Overview</span>
                                </h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Our partner program is designed for synergy. Whether you provide the silicon that powers our AI, the software that integrates with our platform, or the services that deploy our ecosystems, we provide a structured path to shared success.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {benefits.map((benefit, i) => (
                                        <div key={i} className="flex gap-3">
                                            <HiOutlineCheckBadge className="text-primary-500 text-2xl shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{benefit.title}</h4>
                                                <p className="text-sm text-slate-500 leading-snug">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative lg:h-[450px]"
                            >
                                <div className="absolute inset-0 bg-gradient-primary opacity-[0.03] rounded-[40px] transform rotate-3" />
                                <div className="relative h-full glass rounded-[40px] p-8 border border-white flex flex-col justify-center overflow-hidden">
                                    <div className="flex justify-between items-center mb-12">
                                        <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-primary-600 text-3xl">
                                            <HiOutlineRocketLaunch />
                                        </div>
                                        <div className="w-32 h-2 bg-slate-100 rounded-full" />
                                        <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-accent-500 text-3xl">
                                            <HiOutlineGlobeAlt />
                                        </div>
                                    </div>
                                    <p className="text-2xl font-black text-center mb-4" style={{ color: 'var(--color-text-primary)' }}>
                                        Collective Intelligence <br /> Scaled Globally
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                                        {['Silicon Vendors', 'SaaS Platforms', 'Global SI', 'Resellers'].map(tag => (
                                            <span key={tag} className="px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-xs font-bold border border-primary-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Partner Categories */}
                <section className="py-24 bg-slate-50 relative overflow-hidden">
                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-black mb-6" style={{ color: 'var(--color-text-primary)' }}>
                                Collaboration <span className="text-gradient">Channels</span>
                            </h2>
                            <p className="text-lg text-slate-600">
                                We operate across three primary partnership layers to ensure comprehensive coverage of the enterprise AI landscape.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {partnerTypes.map((type, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-10 rounded-[32px] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform"
                                        style={{ background: `${type.color}08`, color: type.color, border: `1px solid ${type.color}15` }}
                                    >
                                        <type.icon />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 text-slate-900">{type.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {type.desc}
                                    </p>
                                    <div className="pt-6 border-t border-slate-50">
                                        <button className="text-primary-600 font-bold text-sm flex items-center gap-2 group/btn">
                                            Learn More <HiOutlineArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
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
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(var(--color-primary-light) 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} />
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Partners;
