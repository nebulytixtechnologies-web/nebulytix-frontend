import React from 'react';
import { InlineWidget } from 'react-calendly';

const BookingPage = () => {
    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-12">
            <div className="max-w-4xl w-full px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Schedule a Meeting</h2>
                <div className="bg-white rounded-lg shadow-lg p-4 h-[700px]">
                    <InlineWidget
                        url="https://calendly.com/your-calendly-link"
                        styles={{ height: '100%', width: '100%' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
