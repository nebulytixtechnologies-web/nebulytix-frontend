import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MeetingsManagement = () => {
    const [meetings, setMeetings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMeetings();
    }, []);

    const fetchMeetings = async () => {
        try {
            // Setup backend API route or rely on proxy in vite/package.json
            // Here we assume it runs on localhost:8080 or is proxied.
            const response = await axios.get('http://localhost:8080/api/admin/meetings', {
                headers: {
                    // If auth token is needed based on the previous PrivateRoute logic:
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setMeetings(response.data);
        } catch (error) {
            console.error('Error fetching meetings:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-6">Loading meetings...</div>;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Meetings Management</h1>
                <button onClick={fetchMeetings} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Refresh</button>
            </div>

            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invitee Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Time</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {meetings.map((meeting) => (
                            <tr key={meeting.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{meeting.inviteeName || 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{meeting.inviteeEmail}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{meeting.startTime ? new Date(meeting.startTime).toLocaleString() : 'TBD'}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${meeting.status === 'canceled' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                                        }`}>
                                        {meeting.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        {meetings.length === 0 && (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No scheduled meetings found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MeetingsManagement;
