import React, { useState } from 'react';
import { Calendar, MessageCircle, Users, Lightbulb, Cog, Handshake, ArrowRight, ChevronDown, CheckCircle } from "lucide-react";
import { PopupModal } from 'react-calendly';
import toast from 'react-hot-toast';
import api from '../../services/api';

const serviceOptions = [
    'AI Automation Platform',
    'Digital Transformation Services',
    'AI Upskilling Programs',
    'Technology Integration',
    'Enterprise Modernization',
    'Other / Not Sure Yet',
];

const consultationTeams = [
    { icon: Lightbulb, label: "Product Strategy Team" },
    { icon: Cog, label: "Digital Transformation Consultants" },
    { icon: Users, label: "Technology Experts" },
    { icon: Handshake, label: "Partnership Development Team" },
];

const ContactSection = () => {
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '', email: '', phone: '',
        service: '', message: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formLoading, setFormLoading] = useState(false);

    const handleChange = (e) => setFormData(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormLoading(true);
        try {
            await api.post('/public/leads/contact', {
                name: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                serviceInterest: formData.service,
                message: formData.message,
                source: 'CONTACT_FORM'
            });
            setFormSubmitted(true);
        } catch (error) {
            console.error('Consultation form error:', error);
            toast.error('Failed to submit your request. Please try again.');
        } finally {
            setFormLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 lg:py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left */}
                    <div>
                        <div className="w-12 h-1 bg-accent-500 mb-8" />
                        <p className="text-xs tracking-[0.2em] uppercase text-accent-500 mb-4 font-bold">
                            Get in Touch
                        </p>
                        <h2 className="text-3xl lg:text-[2.75rem] text-[#0a0f2c] !leading-[1.12] tracking-tight mb-6 font-bold">
                            Let's build the future together
                        </h2>
                        <p className="text-[#5a6077] !leading-relaxed mb-10 text-base lg:text-lg">
                            Engage with Nebulytix experts to explore technology strategies,
                            partnership opportunities, and digital transformation initiatives.
                        </p>

                        <p className="text-xs tracking-[0.2em] uppercase text-[#5a6077] mb-5 font-bold">
                            Schedule sessions with
                        </p>
                        <div className="space-y-0 mb-10">
                            {consultationTeams.map((team) => (
                                <div
                                    key={team.label}
                                    className="flex items-center gap-4 py-4 border-b border-black/5"
                                >
                                    <team.icon className="w-5 h-5 text-accent-500 shrink-0" />
                                    <span className="text-sm text-[#0a0f2c] font-medium">{team.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0a0f2c] text-white text-sm tracking-wide uppercase font-semibold hover:bg-accent-500 transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsCalendlyOpen(true);
                                }}
                            >
                                <Calendar className="w-4 h-4" />
                                Schedule via Calendly
                            </button>
                            <a
                                href="https://wa.me/"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25d366] text-white text-sm tracking-wide uppercase font-semibold hover:bg-[#1fb855] transition-colors"
                            >
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp
                            </a>
                        </div>

                        {/* Calendly Popup Modal Integration */}
                        <PopupModal
                            url="https://calendly.com/hello-nebulytix/30min"
                            onModalClose={() => setIsCalendlyOpen(false)}
                            open={isCalendlyOpen}
                            rootElement={document.getElementById('root')}
                        />
                    </div>

                    {/* Right — form */}
                    <div className="bg-[#f7f8fa] p-8 lg:p-12">
                        <h3 className="text-xl text-[#0a0f2c] tracking-tight mb-8 font-bold">
                            Send us a message
                        </h3>
                        {formSubmitted ? (
                            <div className="py-14 text-center">
                                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-[#10b981]" />
                                <h3 className="text-xl font-bold mb-2 text-[#0a0f2c]">Request Received!</h3>
                                <p className="text-[#5a6077] mb-6">
                                    Thank you, <strong>{formData.fullName}</strong>. Our team will review your request and reach out within one business day.
                                </p>
                                <button onClick={() => { setFormSubmitted(false); setFormData({ fullName: '', email: '', phone: '', service: '', message: '' }); }}
                                    className="text-sm font-semibold underline text-accent-500">
                                    Submit another request
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-5" onSubmit={handleFormSubmit}>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-xs tracking-[0.1em] uppercase text-[#5a6077] mb-2 block font-medium">
                                            Full Name *
                                        </label>
                                        <input
                                            required
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full px-4 py-3 bg-white border border-black/10 text-[#0a0f2c] focus:outline-none focus:border-accent-500 transition-colors"
                                            placeholder="Jane Smith"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs tracking-[0.1em] uppercase text-[#5a6077] mb-2 block font-medium">
                                            Phone Number
                                        </label>
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full px-4 py-3 bg-white border border-black/10 text-[#0a0f2c] focus:outline-none focus:border-accent-500 transition-colors"
                                            placeholder="+1 234 567 890"
                                        />
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-xs tracking-[0.1em] uppercase text-[#5a6077] mb-2 block font-medium">
                                            Work Email *
                                        </label>
                                        <input
                                            required
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            className="w-full px-4 py-3 bg-white border border-black/10 text-[#0a0f2c] focus:outline-none focus:border-accent-500 transition-colors"
                                            placeholder="jane@company.com"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className="text-xs tracking-[0.1em] uppercase text-[#5a6077] mb-2 block font-medium">
                                            Service of Interest *
                                        </label>
                                        <div className="relative">
                                            <select
                                                required
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full appearance-none px-4 py-3 bg-white border border-black/10 text-[#0a0f2c] focus:outline-none focus:border-accent-500 transition-colors pr-10"
                                            >
                                                <option value="">Select a service…</option>
                                                {serviceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a6077] pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs tracking-[0.1em] uppercase text-[#5a6077] mb-2 block font-medium">
                                        Describe Your Project *
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white border border-black/10 text-[#0a0f2c] focus:outline-none focus:border-accent-500 transition-colors resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={formLoading}
                                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#0a0f2c] text-white text-sm tracking-wide uppercase font-semibold hover:bg-accent-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {formLoading ? (
                                        <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Submitting…</>
                                    ) : (
                                        <>Submit Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </button>
                                <p className="text-[10px] text-center text-[#5a6077] mt-3">
                                    By submitting, you agree to Nebulytix's Privacy Policy.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
