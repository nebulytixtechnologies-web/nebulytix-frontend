import React from 'react';
import { Rocket, GraduationCap, FlaskConical, Globe } from "lucide-react";

const communityPartners = [
    { icon: Rocket, label: "Startups and emerging technology companies" },
    { icon: GraduationCap, label: "Universities and academic institutions" },
    { icon: FlaskConical, label: "Technology researchers and innovation labs" },
    { icon: Globe, label: "Global developer communities" },
];

const CommunitySection = () => {
    return (
        <section className="relative bg-[#0a0f2c] overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1770885653473-ca48b4d69173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGRhcmslMjBibHVlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzMxMzU5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt=""
                    className="w-full h-full object-cover opacity-20"
                />
            </div>

            <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <div className="w-12 h-1 mb-8" style={{ background: 'var(--color-primary)' }} />
                        <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-primary)' }}>
                            Community & Innovation
                        </p>
                        <h2 className="text-3xl lg:text-[2.75rem] text-white !leading-[1.12] tracking-tight mb-6 font-bold">
                            Innovation grows through collaboration
                        </h2>
                        <p className="text-white/50 !leading-relaxed mb-4">
                            Nebulytix actively partners with leading organizations to build
                            solutions that shape the future of intelligent digital ecosystems.
                        </p>
                        <p className="text-white/50 !leading-relaxed">
                            Together, we build solutions that shape the future of intelligent
                            digital ecosystems.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-px bg-white/10">
                        {communityPartners.map((cp) => (
                            <div
                                key={cp.label}
                                className="bg-[#0a0f2c] p-8 hover:bg-[#111640] transition-colors"
                            >
                                <cp.icon className="w-8 h-8 mb-5" style={{ color: 'var(--color-primary)' }} />
                                <p className="text-sm text-white/70 !leading-relaxed">
                                    {cp.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CommunitySection;
