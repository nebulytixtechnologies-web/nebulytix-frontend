import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCalendar, HiCheckCircle, HiOutlineUserGroup, HiOutlineClock, HiOutlineVideoCamera } from 'react-icons/hi';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

const ROUND_ROBIN_URL = 'https://calendly.com/d/cyhj-mrf-d3x/product-demo';

const CTASection = ({ isCalendarVisible, onScrollReveal }) => {
    const [bookingStatus, setBookingStatus] = useState(null);
    const [allocatedPresenter, setAllocatedPresenter] = useState(null);

    useCalendlyEventListener({
        onEventScheduled: (e) => {
            const payload = e.data?.payload;
            const assignedUser =
                payload?.event?.assigned_to?.[0] ||
                payload?.invitee?.name ||
                null;
            setAllocatedPresenter(assignedUser);
            setBookingStatus('success');
        },
    });

    const resetBooking = () => {
        setBookingStatus(null);
        setAllocatedPresenter(null);
    };

    const benefits = [
        { icon: HiOutlineClock, text: '30-minute focused session' },
        { icon: HiOutlineVideoCamera, text: 'Live product walkthrough' },
        { icon: HiOutlineUserGroup, text: 'Assigned specialist via round-robin' },
    ];

    return (
        <section id="cta-section" className="py-20 relative overflow-hidden" style={{ background: 'var(--color-bg-surface)' }}>
            {/* Subtle background glow */}
            <div className="absolute inset-0 opacity-[0.06]"
                style={{ background: 'radial-gradient(ellipse at 50% 100%, var(--color-primary), transparent 70%)' }} />

            <div className="container-custom relative z-10">
                <AnimatePresence mode="wait">

                    {/* ── Success State ── */}
                    {bookingStatus === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-xl mx-auto text-center"
                        >
                            <div className="p-10 rounded-2xl"
                                style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.12)', boxShadow: '0 8px 40px rgba(0,102,255,0.1)' }}>
                                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                                    style={{ background: 'rgba(0,102,255,0.08)' }}>
                                    <HiCheckCircle className="text-4xl" style={{ color: 'var(--color-primary)' }} />
                                </div>
                                <h2 className="text-2xl font-black mb-3" style={{ color: 'var(--color-text-primary)' }}>
                                    Demo Booked! 🎉
                                </h2>
                                {allocatedPresenter && (
                                    <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                                        Your demo will be hosted by{' '}
                                        <b style={{ color: 'var(--color-primary)' }}>{allocatedPresenter}</b>.
                                    </p>
                                )}
                                <p className="text-xs mb-6" style={{ color: 'var(--color-text-muted)' }}>
                                    A confirmation email with the calendar invite has been sent to you.
                                </p>
                                <button onClick={resetBooking} className="btn-primary text-sm px-8 py-2.5">
                                    Book Another Demo
                                </button>
                            </div>
                        </motion.div>

                    ) : !isCalendarVisible ? (

                        /* ── Pre-Click: Compact CTA Banner ── */
                        <motion.div
                            key="cta-banner"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 md:p-10 rounded-2xl"
                                style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.12)', boxShadow: '0 8px 40px rgba(0,102,255,0.08)' }}>

                                {/* Left: copy */}
                                <div className="flex-1 text-center lg:text-left">
                                    <span className="section-eyebrow mb-3"
                                        style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                        Free · 30 Minutes · No Commitment
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-black mt-2 mb-3" style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
                                        Ready to Build Your{' '}
                                        <span className="text-gradient">AI-Powered Ecosystem?</span>
                                    </h2>
                                    <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                                        Join enterprises and partners scaling innovation through AI automation,
                                        intelligent platforms, and strategic ecosystems.
                                    </p>
                                    <div className="flex flex-col sm:flex-row flex-wrap gap-y-2 gap-x-5 justify-center lg:justify-start">
                                        {benefits.map((b, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <b.icon className="shrink-0 text-base" style={{ color: 'var(--color-primary)' }} />
                                                <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{b.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: CTA button */}
                                <div className="shrink-0">
                                    <button
                                        onClick={onScrollReveal}
                                        className="btn-primary text-sm px-8 py-3 flex items-center gap-2 whitespace-nowrap"
                                    >
                                        <HiCalendar size={18} />
                                        Book a Product Demo
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                    ) : (

                        /* ── Expanded: Split Layout with inline Calendly ── */
                        <motion.div
                            key="calendly-split"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-5xl mx-auto"
                        >
                            <div className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden"
                                style={{ border: '1px solid rgba(0,102,255,0.12)', boxShadow: '0 12px 48px rgba(0,102,255,0.1)' }}>

                                {/* Left Panel: Info */}
                                <div className="lg:col-span-2 p-8 flex flex-col justify-between"
                                    style={{ background: 'linear-gradient(160deg, #0a2560 0%, #0066ff 100%)' }}>

                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 inline-block"
                                            style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.15)' }}>
                                            Product Demo
                                        </span>
                                        <h2 className="text-2xl font-black leading-snug mb-3 text-white">
                                            Book a Product Demo
                                        </h2>
                                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                                            See our AI automation platform in action. A Nebulytix specialist will be automatically assigned to guide you through our solutions.
                                        </p>
                                    </div>

                                    <div className="mt-8 space-y-4">
                                        {[
                                            { icon: HiOutlineClock, label: 'Duration', value: '30 minutes' },
                                            { icon: HiOutlineVideoCamera, label: 'Format', value: 'Video call' },
                                            { icon: HiOutlineUserGroup, label: 'Host', value: 'Auto-assigned specialist' },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                                    style={{ background: 'rgba(255,255,255,0.1)' }}>
                                                    <item.icon className="text-sm text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.label}</p>
                                                    <p className="text-xs font-semibold text-white">{item.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Panel: Calendly Widget */}
                                <div className="lg:col-span-3 bg-white">
                                    <InlineWidget
                                        url={ROUND_ROBIN_URL}
                                        styles={{ height: '580px', width: '100%' }}
                                        pageSettings={{
                                            backgroundColor: 'ffffff',
                                            hideEventTypeDetails: true,
                                            hideLandingPageDetails: true,
                                            primaryColor: '0066ff',
                                            textColor: '05183a',
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Dismiss link */}
                            <div className="text-center mt-4">
                                <button
                                    onClick={onScrollReveal}
                                    className="text-xs"
                                    style={{ color: 'var(--color-text-muted)' }}
                                >
                                    ← Back
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CTASection;
