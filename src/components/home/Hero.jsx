import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiOutlineUserGroup } from 'react-icons/hi';

const Hero = ({ onBookingOpen }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Soft glow orbs */}
      <div className="glow-orb" style={{ width: 700, height: 700, top: '-15%', left: '-10%', background: 'radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)' }} />
      <div className="glow-orb" style={{ width: 500, height: 500, bottom: '-10%', right: '-8%', background: 'radial-gradient(circle, rgba(0,200,255,0.05) 0%, transparent 70%)' }} />

      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4 pt-20">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            background: 'rgba(0,102,255,0.06)',
            border: '1px solid rgba(0,102,255,0.12)',
            color: 'var(--color-primary)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
          Enterprise AI Ecosystem Platform
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] mb-5"
          style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
        >
          Building AI-Powered<br />
          <span className="text-gradient">Digital Ecosystems</span><br />
          for Enterprises & Partners
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 font-normal"
          style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}
        >
          Nebulytix enables organizations to scale innovation through AI automation,
          intelligent platforms, and strategic partner ecosystems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <Link to="/services" className="btn-primary group text-sm px-7 py-3">
            Explore Solutions
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/partners" className="btn-secondary text-sm px-7 py-3">
            <HiOutlineUserGroup />
            Become a Partner
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.48 }}
          className="flex flex-wrap justify-center gap-10 md:gap-20 border-t pt-10"
          style={{ borderColor: 'rgba(0,102,255,0.08)' }}
        >
          {[
            { value: '50+', label: 'Global Partners' },
            { value: '100+', label: 'Enterprise Clients' },
            { value: '24/7', label: 'AI Operations' },
            { value: '10K+', label: 'Professionals Trained' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black mb-1 text-gradient">
                {stat.value}
              </div>
              <div style={{ color: 'var(--color-text-muted)' }} className="text-[10px] font-semibold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <span className="text-[9px] tracking-[0.3em] font-bold uppercase opacity-40">Scroll</span>
        <div
          className="w-px h-8 rounded-full"
          style={{
            background: 'linear-gradient(to bottom, var(--color-primary), transparent)',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
      </motion.div>
    </section>
  )
}

export default Hero