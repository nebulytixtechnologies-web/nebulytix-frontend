import React from 'react';
import { ArrowRight } from "lucide-react";

const articles = [
    {
        title: "How AI is Reshaping Enterprise Operations in 2026",
        category: "Artificial Intelligence",
        date: "Mar 5, 2026",
        excerpt: "Explore how AI-driven automation is fundamentally changing the way enterprises approach operational efficiency.",
        image: "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3MzEzNTk4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        featured: true,
    },
    {
        title: "Building Digital Ecosystems: A Strategic Guide for Leaders",
        category: "Digital Ecosystem",
        date: "Feb 22, 2026",
        excerpt: "A comprehensive look at building and scaling digital ecosystems that connect enterprises and technology partners.",
        image: "https://images.unsplash.com/photo-1569660424259-87e64a80f6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyJTIwdGVjaG5vbG9neSUyMGJsdWV8ZW58MXx8fHwxNzczMTIzMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        featured: false,
    },
    {
        title: "The Future of Automation Innovation Across Industries",
        category: "Automation",
        date: "Feb 10, 2026",
        excerpt: "Discover the latest trends in automation technology and how organizations can prepare for the next wave.",
        image: "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwd2hpdGVib2FyZCUyMHBsYW5uaW5nfGVufDF8fHx8MTc3MzExMTY2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        featured: false,
    },
];

const InsightsSection = () => {
    const [featured, ...rest] = articles;

    return (
        <section id="insights" className="py-24 lg:py-32 bg-[#f7f8fa]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
                    <div>
                        <div className="w-12 h-1 mb-8" style={{ background: 'var(--color-primary)' }} />
                        <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-primary)' }}>
                            Insights
                        </p>
                        <h2 className="text-3xl lg:text-[2.75rem] text-[#0a0f2c] !leading-[1.12] tracking-tight font-bold">
                            Thought leadership
                        </h2>
                    </div>
                    <a
                        href="#"
                        className="group inline-flex items-center gap-2 text-sm tracking-wide uppercase hover:gap-3 transition-all font-semibold"
                        style={{ color: 'var(--color-primary)' }}
                    >
                        View All
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid lg:grid-cols-2 gap-px bg-black/5">
                    {/* Featured article */}
                    <div className="group bg-white relative overflow-hidden">
                        <div className="aspect-[16/10] overflow-hidden">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-8 lg:p-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 text-white text-xs tracking-wide uppercase font-semibold" style={{ background: 'var(--color-primary)' }}>
                                    {featured.category}
                                </span>
                                <span className="text-xs text-[#5a6077]">{featured.date}</span>
                            </div>
                            <h3 className="text-xl lg:text-2xl text-[#0a0f2c] !leading-tight tracking-tight mb-3 transition-colors font-bold group-hover:text-blue-600">
                                {featured.title}
                            </h3>
                            <p className="text-sm text-[#5a6077] !leading-relaxed mb-6">
                                {featured.excerpt}
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-sm tracking-wide uppercase hover:gap-3 transition-all font-bold"
                                style={{ color: 'var(--color-primary)' }}
                            >
                                Read Article
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Other articles stacked */}
                    <div className="flex flex-col gap-px bg-black/5">
                        {rest.map((article) => (
                            <div
                                key={article.title}
                                className="group bg-white flex-1 grid sm:grid-cols-[200px_1fr] lg:grid-cols-[180px_1fr]"
                            >
                                <div className="overflow-hidden sm:aspect-auto aspect-[16/8]">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 lg:p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs tracking-wide uppercase font-semibold" style={{ color: 'var(--color-primary)' }}>
                                            {article.category}
                                        </span>
                                        <span className="text-xs text-[#5a6077]">
                                            {article.date}
                                        </span>
                                    </div>
                                    <h3 className="text-[#0a0f2c] !leading-tight tracking-tight mb-2 transition-colors font-bold group-hover:text-blue-600">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-[#5a6077] !leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InsightsSection;
