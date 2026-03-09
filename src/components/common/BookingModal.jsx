import React, { useState } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import './BookingModal.css';

// Round-robin event type — no hardcoded host, Calendly assigns dynamically
const ROUND_ROBIN_URL = 'https://calendly.com/d/cyhj-mrf-d3x/product-demo';

export default function BookingModal({ isOpen, onClose }) {

    const [bookingStatus, setBookingStatus] = useState(null);
    // Name revealed from Calendly's payload once a slot is confirmed
    const [allocatedPresenter, setAllocatedPresenter] = useState(null);

    useCalendlyEventListener({

        onEventScheduled: (e) => {
            const payload = e.data?.payload;

            // Calendly round-robin puts the assigned host in assigned_to[0]
            const assignedUser =
                payload?.event?.assigned_to?.[0] ||
                payload?.invitee?.name ||
                null;

            setAllocatedPresenter(assignedUser);
            setBookingStatus('success');
        },
    });

    if (!isOpen) return null;

    // Derive avatar initial from the presenter's name once known
    const presenterInitial = allocatedPresenter
        ? allocatedPresenter.trim().charAt(0).toUpperCase()
        : 'N';

    return (
        <div className="booking-modal-overlay" onClick={onClose}>
            <button className="booking-modal-close" onClick={onClose}>×</button>

            <div className="container" onClick={(e) => e.stopPropagation()}>

                {bookingStatus === 'success' ? (

                    <div className="demo-card booking-success-message animate-fade-in glass">
                        <div style={{ textAlign: 'center', padding: '60px 40px' }}>

                            <h3 style={{ color: '#6366f1', marginBottom: '15px', fontSize: '2rem' }}>
                                Meeting Booked Successfully 🎉
                            </h3>

                            {allocatedPresenter ? (
                                <p style={{ color: '#a5a5b5', fontSize: '1.2rem' }}>
                                    Your session will be hosted by{' '}
                                    <b style={{ color: '#6366f1' }}>{allocatedPresenter}</b>
                                </p>
                            ) : (
                                <p style={{ color: '#a5a5b5', fontSize: '1.2rem' }}>
                                    Our team will reach out with the confirmation details.
                                </p>
                            )}

                            <button
                                onClick={() => {
                                    setBookingStatus(null);
                                    setAllocatedPresenter(null);
                                }}
                                className="book-demo-btn"
                                style={{ marginTop: '30px' }}
                            >
                                Book another meeting
                            </button>

                        </div>
                    </div>

                ) : (

                    <div className="demo-card glass animate-fade-in" style={{ maxWidth: '1000px' }}>

                        <div className="demo-content">

                            <div className="demo-text-area" style={{ flex: '1 1 350px' }}>

                                <h3 className="demo-title">Schedule Your Demo</h3>

                                <p className="demo-description">
                                    Pick a time that works for you — our team will be automatically
                                    assigned to your session.
                                </p>

                                <div className="host-profile mb-8">
                                    <div className="host-info-card" style={{ background: 'transparent', border: 'none', padding: 0 }}>

                                        <div className="host-avatar">
                                            <span className="avatar-initial">{presenterInitial}</span>
                                        </div>

                                        <div className="host-meta">
                                            <span className="host-label">Scheduling with</span>
                                            <h4 className="host-name">
                                                {allocatedPresenter || 'Nebulytix Solutions Team'}
                                            </h4>
                                            {!allocatedPresenter && (
                                                <p className="host-title">Enterprise AI &amp; Strategy Experts</p>
                                            )}
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div
                                className="demo-image-area"
                                style={{
                                    flex: '1 1 650px',
                                    padding: '1rem',
                                    background: '#fff',
                                    borderRadius: '0 1.5rem 1.5rem 0'
                                }}
                            >
                                <InlineWidget
                                    url={ROUND_ROBIN_URL}
                                    styles={{
                                        height: '650px',
                                        width: '100%'
                                    }}
                                    pageSettings={{
                                        backgroundColor: 'ffffff',
                                        hideEventTypeDetails: true,
                                        hideLandingPageDetails: true,
                                        primaryColor: '0066ff',
                                        textColor: '05183a'
                                    }}
                                />
                            </div>

                        </div>

                    </div>

                )}

            </div>
        </div>
    );
}
