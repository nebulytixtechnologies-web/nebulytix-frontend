import React from 'react';
import { GraduationCap, Cog, Megaphone, ArrowRight } from "lucide-react";

const solutions = [
    {
        icon: GraduationCap,
        title: "AI Upskilling",
        desc: "Programs designed to help enterprises and professionals develop practical knowledge in artificial intelligence and emerging digital technologies, building real-world capabilities for AI-driven solutions.",
        color: "bg-blue-600",
    },
    {
        icon: Cog,
        title: "Digital Transformation Consulting",
        desc: "Helping organizations redesign their operations using modern technology platforms, automation, and AI-driven insights to stay competitive in a rapidly evolving digital landscape.",
        color: "bg-indigo-600",
    },
    {
        icon: Megaphone,
        title: "Partner Product Promotion",
        desc: "Enabling technology partners to expand market reach by promoting their solutions through the Nebulytix ecosystem, unlocking access to enterprise clients and global markets.",
        color: "bg-cyan-600",
    },
];

const SolutionsSection = () => {
    return (
        <section id="solutions" className="py-24 lg:py-32 bg-[#f7f8fa]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="w-12 h-1 mx-auto mb-8" style={{ background: 'var(--color-primary)' }} />
                    <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-primary)' }}>
                        Solutions
                    </p>
                    <h2 className="text-3xl lg:text-[2.75rem] text-[#0a0f2c] !leading-[1.12] tracking-tight mb-6 font-bold">
                        End-to-end solutions that drive innovation
                    </h2>
                    <p className="text-[#5a6077] !leading-relaxed">
                        Nebulytix provides end-to-end solutions that help organizations
                        adopt emerging technologies and scale innovation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-px bg-black/5">
                    {solutions.map((sol) => (
                        <div
                            key={sol.title}
                            className="group bg-white p-10 lg:p-12 hover:bg-[#fafbfd] transition-colors relative overflow-hidden"
                        >
                            {/* Top accent bar */}
                            <div className={`absolute top-0 left-0 right-0 h-1 ${sol.color} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`} />

                            <sol.icon className="w-10 h-10 mb-8" style={{ color: 'var(--color-primary)' }} />
                            <h3 className="text-xl lg:text-2xl text-[#0a0f2c] !leading-tight tracking-tight mb-4 font-bold">
                                {sol.title}
                            </h3>
                            <p className="text-sm text-[#5a6077] !leading-relaxed mb-8">
                                {sol.desc}
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-sm tracking-wide uppercase hover:gap-3 transition-all font-bold"
                                style={{ color: 'var(--color-primary)' }}
                            >
                                Discover
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SolutionsSection;
