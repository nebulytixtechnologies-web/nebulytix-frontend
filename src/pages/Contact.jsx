import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import {
    HiOutlineCheckCircle,
    HiOutlineClock,
    HiOutlineVideoCamera,
    HiOutlineUserGroup,
    HiOutlinePhone,
    HiOutlineMail,
    HiOutlineLocationMarker,
    HiOutlineOfficeBuilding,
    HiOutlineChevronDown,
    HiArrowRight,
    HiCheckCircle,
} from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

/* ─────────────────────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────────────────────── */
const CALENDLY_URL = 'https://calendly.com/d/cyhj-mrf-d3x/product-demo';
const WHATSAPP_NUMBER = '919999999999'; // Replace with real number
const WHATSAPP_MESSAGE = encodeURIComponent('Hi Nebulytix, I would like to enquire about your services.');

const serviceOptions = [
    'AI Automation Platform',
    'Digital Transformation Services',
    'AI Upskilling Programs',
    'Technology Integration',
    'Enterprise Modernization',
    'Other / Not Sure Yet',
];

const sectionTabs = [
    { id: 'calendly', label: 'Book a Demo', icon: '📅' },
    { id: 'form', label: 'Consulting Request', icon: '📋' },
    { id: 'whatsapp', label: 'WhatsApp', icon: '💬' },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────── */
const Contact = () => {
    const [activeTab, setActiveTab] = useState('calendly');
    const [bookingDone, setBookingDone] = useState(false);
    const [presenter, setPresenter] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '', company: '', email: '', phone: '',
        service: '', employees: '', message: '', budget: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formLoading, setFormLoading] = useState(false);

    /* ── Calendly listener ── */
    useCalendlyEventListener({
        onEventScheduled: (e) => {
            const payload = e.data?.payload;
            const assigned = payload?.event?.assigned_to?.[0] || payload?.invitee?.name || null;
            setPresenter(assigned);
            setBookingDone(true);
        },
    });

    /* ── Form handlers ── */
    const handleChange = (e) => setFormData(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormLoading(true);
        setTimeout(() => {
            setFormLoading(false);
            setFormSubmitted(true);
        }, 1500);
    };

    return (
        <>
            <Helmet>
                <title>Contact & Consultation - Nebulytix Technologies</title>
                <meta name="description" content="Book a demo on Calendly, submit a consulting request, or reach out via WhatsApp. Talk to the Nebulytix team today." />
            </Helmet>
            <Navbar />
            <main>

                {/* ── HERO ────────────────────────────────────────────── */}
                <section className="pt-36 pb-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
                    <div className="glow-orb" style={{ width: 800, height: 700, top: '-25%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(0,102,255,0.09) 0%, transparent 70%)' }} />
                    <div className="container-custom relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                Contact & Consultation
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-5 leading-tight"
                            style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
                        >
                            Let's Start a <span className="text-gradient">Conversation</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="text-base max-w-xl mx-auto"
                            style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
                        >
                            Book a product demo on Calendly, submit a detailed consulting request, or reach us instantly on WhatsApp — choose what works best for you.
                        </motion.p>
                    </div>
                </section>

                {/* ── MAIN CONTENT ────────────────────────────────────── */}
                <section className="pb-24 relative" style={{ background: 'var(--color-bg-surface)' }}>
                    <div className="container-custom max-w-6xl">

                        {/* Tab Switcher */}
                        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                            className="flex justify-center gap-2 flex-wrap mb-12">
                            {sectionTabs.map(tab => (
                                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                                    style={{
                                        background: activeTab === tab.id ? 'var(--color-primary)' : '#ffffff',
                                        color: activeTab === tab.id ? '#ffffff' : 'var(--color-text-secondary)',
                                        border: `1px solid ${activeTab === tab.id ? 'var(--color-primary)' : 'rgba(0,102,255,0.15)'}`,
                                        boxShadow: activeTab === tab.id ? '0 6px 20px rgba(0,102,255,0.25)' : '0 2px 8px rgba(0,0,0,0.04)',
                                    }}>
                                    <span>{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </motion.div>

                        <AnimatePresence mode="wait">

                            {/* =========== SECTION 1: CALENDLY =========== */}
                            {activeTab === 'calendly' && (
                                <motion.div key="calendly"
                                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid lg:grid-cols-5 gap-8 items-start"
                                >
                                    {/* Left info panel */}
                                    <div className="lg:col-span-2 flex flex-col gap-5">
                                        <div className="p-7 rounded-2xl" style={{ background: 'linear-gradient(160deg, #0a2560 0%, #0066ff 100%)' }}>
                                            {/* <span className="section-eyebrow mb-3 block" style={{ color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}>
                                                01 · Calendly Integration
                                            </span> */}
                                            <h2 className="text-xl font-bold text-white mb-3">Book a Product Demo</h2>
                                            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                                Instantly schedule a live, 30-minute product demo with a Nebulytix specialist.
                                                Pick a slot that works for your timezone — our round-robin system will auto-assign the best available expert.
                                            </p>
                                            {[
                                                { icon: HiOutlineClock, text: '30-minute focused session' },
                                                { icon: HiOutlineVideoCamera, text: 'Google Meet / Zoom' },
                                                { icon: HiOutlineUserGroup, text: 'Expert auto-assigned via round-robin' },
                                                { icon: HiOutlineCheckCircle, text: 'Instant confirmation & calendar invite' },
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3 mb-3">
                                                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                                        <item.icon className="text-white text-sm" />
                                                    </div>
                                                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{item.text}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Success state */}
                                        {bookingDone && (
                                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                                className="p-6 rounded-2xl text-center"
                                                style={{ background: 'rgba(16,185,129,0.07)', border: '1.5px solid rgba(16,185,129,0.25)' }}>
                                                <HiCheckCircle className="text-4xl mx-auto mb-2" style={{ color: '#10b981' }} />
                                                <h4 className="font-bold text-sm mb-1" style={{ color: 'var(--color-text-primary)' }}>Demo Booked!</h4>
                                                {presenter && (
                                                    <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                                                        You're meeting with <strong>{presenter}</strong>. Check your inbox for confirmation.
                                                    </p>
                                                )}
                                                {!presenter && (
                                                    <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                                                        A Nebulytix expert will be in touch. Check your email for the calendar invite.
                                                    </p>
                                                )}
                                                <button onClick={() => setBookingDone(false)}
                                                    className="mt-3 text-xs underline" style={{ color: 'var(--color-primary)' }}>
                                                    Book another slot
                                                </button>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Calendly Widget */}
                                    <div className="lg:col-span-3 rounded-2xl overflow-hidden"
                                        style={{ border: '1px solid rgba(0,102,255,0.1)', boxShadow: '0 8px 40px rgba(0,102,255,0.1)', background: '#fff' }}>
                                        <InlineWidget
                                            url={CALENDLY_URL}
                                            styles={{ height: '660px', width: '100%' }}
                                            pageSettings={{
                                                backgroundColor: 'ffffff',
                                                hideEventTypeDetails: false,
                                                hideLandingPageDetails: false,
                                                primaryColor: '0066ff',
                                                textColor: '05183a',
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {/* =========== SECTION 2: CONSULTING FORM =========== */}
                            {activeTab === 'form' && (
                                <motion.div key="form"
                                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid lg:grid-cols-5 gap-8 items-start"
                                >
                                    {/* Left info */}
                                    <div className="lg:col-span-2 flex flex-col gap-5">
                                        <div className="p-7 rounded-2xl" style={{ background: 'linear-gradient(160deg, #0a2560 0%, #0066ff 100%)' }}>
                                            {/* <span className="section-eyebrow mb-3 block" style={{ color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}>
                                                02 · Consulting Request
                                            </span> */}
                                            <h2 className="text-xl font-bold text-white mb-3">Submit a Request</h2>
                                            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                                Tell us about your project, organization size, and goals. Our solutions team will review and respond within one business day with a tailored proposal.
                                            </p>
                                            {[
                                                { icon: HiOutlineCheckCircle, text: 'Reviewed within 1 business day' },
                                                { icon: HiOutlineOfficeBuilding, text: 'For enterprises of all sizes' },
                                                { icon: HiOutlineMail, text: 'Response via email + follow-up call' },
                                                { icon: HiOutlineCheckCircle, text: 'No obligation, fully confidential' },
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3 mb-3">
                                                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                                        <item.icon className="text-white text-sm" />
                                                    </div>
                                                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{item.text}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Office contact info */}
                                        <div className="p-6 rounded-2xl" style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 4px 16px rgba(0,102,255,0.05)' }}>
                                            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-primary)' }}>Direct Contact</h4>
                                            {[
                                                { icon: HiOutlineMail, label: 'Email', value: 'hello@nebulytix.com' },
                                                { icon: HiOutlinePhone, label: 'Phone', value: '+1 (800) NEBULYTIX' },
                                                { icon: HiOutlineLocationMarker, label: 'HQ', value: 'Dubai · Singapore · Bangalore · UK' },
                                            ].map((c, i) => (
                                                <div key={i} className="flex items-start gap-3 mb-3">
                                                    <c.icon className="text-base mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                                                    <div>
                                                        <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>{c.label}</p>
                                                        <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>{c.value}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Form */}
                                    <div className="lg:col-span-3">
                                        <div className="p-8 rounded-2xl"
                                            style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 8px 40px rgba(0,102,255,0.08)' }}>

                                            {formSubmitted ? (
                                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                                    className="py-14 text-center">
                                                    <HiCheckCircle className="text-5xl mx-auto mb-4" style={{ color: '#10b981' }} />
                                                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Request Received!</h3>
                                                    <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                                                        Thank you, <strong>{formData.fullName}</strong>. Our team will review your request and reach out within one business day.
                                                    </p>
                                                    <button onClick={() => { setFormSubmitted(false); setFormData({ fullName: '', company: '', email: '', phone: '', service: '', employees: '', message: '', budget: '' }); }}
                                                        className="text-sm font-semibold underline" style={{ color: 'var(--color-primary)' }}>
                                                        Submit another request
                                                    </button>
                                                </motion.div>
                                            ) : (
                                                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                                                    <h3 className="text-base font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>Consulting Request Form</h3>

                                                    {/* Row 1 */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div className="flex flex-col gap-1.5">
                                                            <label className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>Full Name *</label>
                                                            <input required name="fullName" value={formData.fullName} onChange={handleChange}
                                                                placeholder="Jane Smith"
                                                                className="px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                                                                style={{ border: '1px solid rgba(0,102,255,0.18)', color: 'var(--color-text-primary)', background: '#f8fafc' }}
                                                                onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                                                                onBlur={e => e.target.style.borderColor = 'rgba(0,102,255,0.18)'}
                                                            />
                                                        </div>
                                                        <div className="flex flex-col gap-1.5">
                                                            <label className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>Company *</label>
                                                            <input required name="company" value={formData.company} onChange={handleChange}
                                                                placeholder="Acme Corp"
                                                                className="px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                                                                style={{ border: '1px solid rgba(0,102,255,0.18)', color: 'var(--color-text-primary)', background: '#f8fafc' }}
                                                                onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                                                                onBlur={e => e.target.style.borderColor = 'rgba(0,102,255,0.18)'}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Row 2 */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div className="flex flex-col gap-1.5">
                                                            <label className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>Work Email *</label>
                                                            <input required type="email" name="email" value={formData.email} onChange={handleChange}
                                                                placeholder="jane@acme.com"
                                                                className="px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                                                                style={{ border: '1px solid rgba(0,102,255,0.18)', color: 'var(--color-text-primary)', background: '#f8fafc' }}
                                                                onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                                                                onBlur={e => e.target.style.borderColor = 'rgba(0,102,255,0.18)'}
                                                            />
                                                        </div>
                                                        <div className="flex flex-col gap-1.5">
                                                            <label className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>Phone Number</label>
                                                            <input name="phone" value={formData.phone} onChange={handleChange}
                                                                placeholder="+1 234 567 890"
                                                                className="px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                                                                style={{ border: '1px solid rgba(0,102,255,0.18)', color: 'var(--color-text-primary)', background: '#f8fafc' }}
                                                                onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                                                                onBlur={e => e.target.style.borderColor = 'rgba(0,102,255,0.18)'}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Row 3 — Service & Org Size */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div className="flex flex-col gap-1.5">
                                                            <label className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>Service of Interest *</label>
                                                            <div className="relative">
                                                                <select required name="service" value={formData.service} onChange={handleChange}
                                                                    className="w-full appearance-none px-4 py-2.5 rounded-lg text-sm outline-none transition-all pr-8"
                                                                    style={{ border: '1px solid rgba(0,102,255,0.18)', color: formData.service ? 'var(--color-text-primary)' : 'var(--color-text-muted)', background: '#f8fafc' }}
                                                                    onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                                                                    onBlur={e => e.target.style.borderColor = 'rgba(0,102,255,0.18)'}
                                                                >
                                                                    <option value="">Select a service…</option>
                                                                    {serviceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                                </select>
                                                                <HiOutlineChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs" style={{ color: 'var(--color-text-muted)' }} />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-1.5">
                                                            <label className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>Organisation Size</label>
                                                            <div className="relative">
                                                                <select name="employees" value={formData.employees} onChange={handleChange}
                                                                    className="w-full appearance-none px-4 py-2.5 rounded-lg text-sm outline-none transition-all pr-8"
                                                                    style={{ border: '1px solid rgba(0,102,255,0.18)', color: formData.employees ? 'var(--color-text-primary)' : 'var(--color-text-muted)', background: '#f8fafc' }}
                                                                    onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                                                                    onBlur={e => e.target.style.borderColor = 'rgba(0,102,255,0.18)'}
                                                                >
                                                                    <option value="">Select size…</option>
                                                                    {['1–50', '51–250', '251–1000', '1000–5000', '5000+'].map(s => <option key={s} value={s}>{s} employees</option>)}
                                                                </select>
                                                                <HiOutlineChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs" style={{ color: 'var(--color-text-muted)' }} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Budget */}
                                                    <div className="flex flex-col gap-1.5">
                                                        <label className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>Estimated Budget Range</label>
                                                        <div className="flex flex-wrap gap-2">
                                                            {['Under $25K', '$25K–$100K', '$100K–$500K', '$500K+', 'Not Sure'].map(opt => (
                                                                <button type="button" key={opt} onClick={() => setFormData(f => ({ ...f, budget: opt }))}
                                                                    className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                                                                    style={{
                                                                        background: formData.budget === opt ? 'var(--color-primary)' : '#f8fafc',
                                                                        color: formData.budget === opt ? '#fff' : 'var(--color-text-secondary)',
                                                                        border: `1px solid ${formData.budget === opt ? 'var(--color-primary)' : 'rgba(0,102,255,0.15)'}`,
                                                                    }}>
                                                                    {opt}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Message */}
                                                    <div className="flex flex-col gap-1.5">
                                                        <label className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>Describe Your Project / Challenge *</label>
                                                        <textarea required name="message" value={formData.message} onChange={handleChange} rows={4}
                                                            placeholder="Tell us what you are trying to achieve, your current challenges, and any relevant timeline or constraints…"
                                                            className="px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                                                            style={{ border: '1px solid rgba(0,102,255,0.18)', color: 'var(--color-text-primary)', background: '#f8fafc' }}
                                                            onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                                                            onBlur={e => e.target.style.borderColor = 'rgba(0,102,255,0.18)'}
                                                        />
                                                    </div>

                                                    <button type="submit"
                                                        disabled={formLoading}
                                                        className="btn-primary py-3 text-sm flex items-center justify-center gap-2 w-full"
                                                        style={{ opacity: formLoading ? 0.7 : 1 }}>
                                                        {formLoading ? (
                                                            <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Submitting…</>
                                                        ) : (
                                                            <>Submit Consulting Request <HiArrowRight /></>
                                                        )}
                                                    </button>

                                                    <p className="text-[10px] text-center" style={{ color: 'var(--color-text-muted)' }}>
                                                        By submitting, you agree to Nebulytix's Privacy Policy. We'll never share your information.
                                                    </p>
                                                </form>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* =========== SECTION 3: WHATSAPP =========== */}
                            {activeTab === 'whatsapp' && (
                                <motion.div key="whatsapp"
                                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.3 }}
                                    className="max-w-3xl mx-auto"
                                >
                                    <div className="p-10 rounded-3xl text-center"
                                        style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', boxShadow: '0 12px 48px rgba(0,102,255,0.08)' }}>

                                        {/* <span className="section-eyebrow mb-4 inline-block" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                                            03 · WhatsApp Contact
                                        </span> */}

                                        {/* WhatsApp logo bubble */}
                                        <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                                            style={{ background: 'linear-gradient(135deg, #25d366 0%, #128C7E 100%)' }}>
                                            <FaWhatsapp className="text-5xl text-white" />
                                        </div>

                                        <h2 className="text-2xl font-black mb-3" style={{ color: 'var(--color-text-primary)' }}>
                                            Chat with Us on WhatsApp
                                        </h2>
                                        <p className="text-sm leading-relaxed mb-8 max-w-md mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                                            Need a quick answer? Chat with our team on WhatsApp for fast, informal conversations — ideal for initial enquiries, partnership discussions, and quick questions.
                                        </p>

                                        {/* What to expect */}
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                                            {[
                                                { icon: '⚡', title: 'Fast Response', desc: 'Typically within a few hours during business hours (GMT+4).' },
                                                { icon: '🌍', title: 'Global Coverage', desc: 'Team members available across Dubai, UK, India, and Singapore.' },
                                                { icon: '🔒', title: 'Secure & Private', desc: 'End-to-end encrypted. Your conversation stays confidential.' },
                                            ].map((item, i) => (
                                                <div key={i} className="p-4 rounded-xl" style={{ background: '#f8fafc', border: '1px solid rgba(0,102,255,0.07)' }}>
                                                    <div className="text-2xl mb-2">{item.icon}</div>
                                                    <h4 className="text-xs font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>{item.title}</h4>
                                                    <p className="text-[11px] leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        <a
                                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-base font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
                                            style={{ background: 'linear-gradient(135deg, #25d366 0%, #128C7E 100%)' }}
                                        >
                                            <FaWhatsapp className="text-2xl" />
                                            Open WhatsApp Chat
                                        </a>

                                        <p className="text-[11px] mt-5" style={{ color: 'var(--color-text-muted)' }}>
                                            Available Monday–Friday, 9am–7pm GMT+4.
                                        </p>
                                    </div>

                                    {/* Also reach us via */}
                                    <div className="mt-6 p-6 rounded-2xl grid sm:grid-cols-2 gap-4"
                                        style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)' }}>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(0,102,255,0.07)' }}>
                                                <HiOutlineMail style={{ color: 'var(--color-primary)' }} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>Email</p>
                                                <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>hello@nebulytix.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(0,102,255,0.07)' }}>
                                                <HiOutlinePhone style={{ color: 'var(--color-primary)' }} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>Phone</p>
                                                <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>+1 (800) NEBULYTIX</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default Contact;