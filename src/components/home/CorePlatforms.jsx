import React from 'react';
import { Bot, RefreshCw, Handshake, Cog, LayoutGrid, Link, Megaphone, Cable, Rocket, ArrowRight } from "lucide-react";

import aiPlatformImg from '../../assets/coreplatformimages/ai_automation_platform.png';
import digitalPlatformImg from '../../assets/coreplatformimages/digital_transformation_platform.png';
import partnerPlatformImg from '../../assets/coreplatformimages/partner_innovation_platform.png';

const platforms = [
    {
        title: "AI Automation Platform",
        desc: "An intelligent automation framework designed to optimize enterprise operations.",
        features: ["Intelligent Automation", "Enterprise Applications", "Seamless Integrations"],
        image: aiPlatformImg,
    },
    {
        title: "Digital Transformation Platform",
        desc: "A scalable platform that enables organizations to modernize operations and streamline workflows.",
        features: ["Strategic Consulting", "Modern Enterprise Architecture", "Seamless Technology Integration"],
        image: digitalPlatformImg,
    },
    {
        title: "Partner Innovation Platform",
        desc: "A collaborative environment where technology partners can integrate, promote, and deploy solutions.",
        features: ["Partner Product Promotion", "API Integrations", "Joint Solution Deployments"],
        image: partnerPlatformImg,
    },
];

const CorePlatforms = () => {
    return (
        <section id="platforms" className="py-24 lg:py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="max-w-2xl mb-16">
                    <div className="w-12 h-1 bg-accent-500 mb-8" />
                    <p className="text-xs tracking-[0.2em] uppercase text-accent-500 mb-4 font-bold">
                        Core Platforms
                    </p>
                    <h2 className="text-3xl lg:text-[2.75rem] text-[#0a0f2c] !leading-[1.12] tracking-tight font-bold">
                        Intelligent platforms designed for enterprise growth
                    </h2>
                </div>

                <div className="space-y-1">
                    {platforms.map((platform, i) => (
                        <div
                            key={platform.title}
                            className="group grid lg:grid-cols-2 bg-[#f7f8fa] hover:bg-[#eef0f4] transition-colors"
                        >
                            <div
                                className={`relative min-h-[300px] lg:min-h-[400px] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""
                                    }`}
                            >
                                <img
                                    src={platform.image}
                                    alt={platform.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-[#0a0f2c]/30" />
                            </div>
                            <div className="flex items-center p-10 lg:p-16">
                                <div>
                                    <span className="text-xs tracking-[0.2em] uppercase text-accent-500 mb-2 block font-bold">
                                        0{i + 1}
                                    </span>
                                    <h3 className="text-2xl lg:text-3xl text-[#0a0f2c] !leading-tight tracking-tight mb-4 font-bold">
                                        {platform.title}
                                    </h3>
                                    <p className="text-[#5a6077] lg:text-lg !leading-relaxed mb-6">
                                        {platform.desc}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {platform.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-3 text-sm text-[#0a0f2c] font-medium"
                                            >
                                                <div className="w-1.5 h-1.5 bg-accent-500 rounded-full shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href="#contact"
                                        className="group/link inline-flex items-center gap-2 text-sm text-accent-500 tracking-wide uppercase font-semibold hover:gap-3 transition-all"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CorePlatforms;
