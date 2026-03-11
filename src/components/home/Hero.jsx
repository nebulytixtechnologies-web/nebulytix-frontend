import React from 'react';
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 lg:pb-28 pt-[72px] overflow-hidden">
      {/* Full bleed background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1761921558642-0a287d43606c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBjaXR5JTIwbmlnaHQlMjB0ZWNobm9sb2d5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzMxMzU5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#060a1f]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a1f] via-[#060a1f]/40 to-transparent" />
      </div>

      {/* Geometric accents */}
      <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.05] to-transparent hidden lg:block" />
      <div className="absolute top-0 right-[35%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent hidden lg:block" />
      <div className="absolute bottom-0 right-0 w-[40%] h-[50%] border border-white/[0.03] hidden lg:block" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-accent-500" />
              <span
                className="text-[11px] tracking-[0.25em] uppercase text-accent-500/70"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                AI-Powered Ecosystems
              </span>
            </div>
            <h1
              className="text-[clamp(2.2rem,5vw,4.5rem)] text-white !leading-[1.06] mb-8"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              Building AI-Powered
              <br />
              Digital Ecosystems for{" "}
              <span className="text-accent-500">Enterprises</span>
              <br />& <span className="text-accent-500">Partners</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/40 max-w-2xl mb-12 !leading-[1.7]">
              Nebulytix enables organizations to scale innovation through AI
              automation, intelligent platforms, and strategic partner ecosystems.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#solutions"
              className="group inline-flex items-center gap-3 px-9 py-4 bg-accent-500 text-white text-[13px] tracking-[0.12em] uppercase hover:bg-blue-700 transition-colors"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Explore Solutions
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#partners"
              className="group inline-flex items-center gap-3 px-9 py-4 border border-white/15 text-white/60 text-[13px] tracking-[0.12em] uppercase hover:border-white/40 hover:text-white transition-all"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Become a Partner
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-10 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Enterprise Clients" },
            { value: "120+", label: "Technology Partners" },
            { value: "15+", label: "Industries Served" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-3xl lg:text-4xl text-white tracking-tight mb-1"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
              >
                {stat.value}
              </div>
              <div
                className="text-[11px] text-white/30 tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;