import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '919999999999'; // ← Replace with your real WhatsApp number
const WHATSAPP_MESSAGE = encodeURIComponent('Hi Nebulytix, I would like to enquire about your services.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const WhatsAppFloat = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            className="fixed z-50"
            style={{ bottom: '28px', right: '28px' }}
        >
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, x: 8, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-16 bottom-1 whitespace-nowrap"
                    >
                        <div
                            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white shadow-xl"
                            style={{ background: 'linear-gradient(135deg, #25d366, #128C7E)' }}
                        >
                            Chat with us on WhatsApp
                            <div
                                className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45"
                                style={{ background: '#128C7E' }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Pulse ring */}
            <span
                className="absolute inset-0 rounded-full animate-ping"
                style={{
                    background: 'rgba(37,211,102,0.35)',
                    animationDuration: '2s',
                }}
            />

            {/* Main button */}
            <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl"
                style={{
                    background: 'linear-gradient(135deg, #25d366 0%, #128C7E 100%)',
                    boxShadow: '0 8px 32px rgba(37,211,102,0.45)',
                }}
            >
                <FaWhatsapp className="text-3xl text-white" />
            </motion.a>
        </div>
    );
};

export default WhatsAppFloat;
