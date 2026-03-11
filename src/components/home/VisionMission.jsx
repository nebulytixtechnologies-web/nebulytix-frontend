import React from 'react';
import { Zap, Users, Lightbulb, Layers } from "lucide-react";

const missionItems = [
    {
        icon: Zap,
        title: "Accelerate AI Adoption",
        desc: "Accelerate enterprise adoption of Artificial Intelligence and automation.",
    },
    {
        icon: Layers,
        title: "Scale Solutions Globally",
        desc: "Enable technology partners to scale their solutions globally.",
    },
    {
        icon: Lightbulb,
        title: "Simplify Transformation",
        desc: "Build intelligent platforms that simplify digital transformation.",
    },
    {
        icon: Users,
        title: "Foster Ecosystems",
        desc: "Foster collaborative ecosystems that drive innovation and growth.",
    },
];

const VisionMission = () => {
    return (
        <section id="vision" className="bg-white">
            {/* Vision — full-width split */}
            <div className="grid lg:grid-cols-2 min-h-[600px]">
                <div className="flex items-center px-6 lg:px-20 py-20 lg:py-28">
                    <div className="max-w-lg">
                        <div className="w-12 h-1 mb-8 bg-blue-600" style={{ background: 'var(--color-primary)' }} />
                        <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-primary)' }}>
                            Our Vision
                        </p>
                        <h2 className="text-3xl lg:text-[2.75rem] text-[#0a0f2c] !leading-[1.12] tracking-tight mb-6 font-bold">
                            A future driven by
                            <br />
                            collaboration &
                            <br />
                            intelligent systems
                        </h2>
                        <p className="text-[#5a6077] !leading-relaxed mb-4">
                            At Nebulytix, we envision a future where technology innovation is
                            driven through collaboration, scalable platforms, and intelligent
                            systems.
                        </p>
                        <p className="text-[#5a6077] !leading-relaxed">
                            Our goal is to build a global AI ecosystem that connects
                            enterprises, startups, and technology partners to solve complex
                            industry challenges and accelerate digital transformation.
                        </p>
                    </div>
                </div>
                <div className="relative min-h-[400px] lg:min-h-0">
                    <img
                        src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwZGl2ZXJzZSUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzczMTM1OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Corporate collaboration"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" style={{ background: 'rgba(0,102,255,0.1)' }} />
                </div>
            </div>

            {/* Mission — dark band */}
            <div className="bg-[#0a0f2c] py-20 lg:py-28">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                    <div className="max-w-2xl mb-16">
                        <div className="w-12 h-1 mb-8" style={{ background: 'var(--color-primary)' }} />
                        <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-primary)' }}>
                            Our Mission
                        </p>
                        <h2 className="text-3xl lg:text-[2.75rem] text-white !leading-[1.12] tracking-tight mb-6 font-bold">
                            Empowering through technology & collaboration
                        </h2>
                        <p className="text-white/50 !leading-relaxed">
                            Nebulytix is committed to empowering organizations and partners
                            through advanced technology platforms and strategic collaboration.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
                        {missionItems.map((item) => (
                            <div
                                key={item.title}
                                className="group bg-[#0a0f2c] p-8 hover:bg-[#111640] transition-colors"
                            >
                                <item.icon className="w-8 h-8 mb-6" style={{ color: 'var(--color-primary)' }} />
                                <h3 className="text-white text-lg mb-3 font-semibold">{item.title}</h3>
                                <p className="text-white/50 text-sm !leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VisionMission;
