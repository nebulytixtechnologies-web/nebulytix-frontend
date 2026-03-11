import React from 'react';
import { Heart, Landmark, Building, GraduationCap, ShoppingBag, Server, ArrowRight } from "lucide-react";

const industries = [
    { icon: Heart, label: "Healthcare" },
    { icon: Landmark, label: "Financial Services" },
    { icon: Building, label: "Government & Public Sector" },
    { icon: GraduationCap, label: "Education" },
    { icon: ShoppingBag, label: "Retail" },
    { icon: Server, label: "Enterprise Technology" },
];

const IndustriesSection = () => {
    return (
        <section id="industries" className="py-24 lg:py-32 bg-[#f7f8fa]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5">
                        <div className="w-12 h-1 bg-accent-500 mb-8" />
                        <p className="text-xs tracking-[0.2em] uppercase text-accent-500 mb-4 font-bold">
                            Industries
                        </p>
                        <h2 className="text-3xl lg:text-[2.75rem] text-[#0a0f2c] !leading-[1.12] tracking-tight mb-6 font-bold">
                            Industries
                            <br />
                            we serve
                        </h2>
                        <p className="text-[#5a6077] !leading-relaxed text-base lg:text-lg">
                            Nebulytix delivers intelligent technology solutions across multiple
                            industries, enabling sector-specific digital transformation.
                        </p>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-black/5">
                            {industries.map((ind) => (
                                <div
                                    key={ind.label}
                                    className="group bg-white p-8 lg:p-10 flex flex-col items-start gap-5 hover:bg-accent-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
                                >
                                    <ind.icon className="w-8 h-8 text-accent-500 group-hover:text-white transition-colors" />
                                    <span className="text-[#0a0f2c] group-hover:text-white transition-colors font-semibold">
                                        {ind.label}
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-transparent group-hover:text-white/70 transition-colors mt-auto" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IndustriesSection;
