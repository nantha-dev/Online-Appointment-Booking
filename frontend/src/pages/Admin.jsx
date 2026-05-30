import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Plus, Trash2, Edit } from 'lucide-react';
import api from '../services/api';
import toast from 'react-hot-toast';

const Admin = () => {
    const [bookings, setBookings] = useState([]);
    const [services, setServices] = useState([]);
    const [activeTab, setActiveTab] = useState('bookings');
    const [loading, setLoading] = useState(true);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [newService, setNewService] = useState({
        name: '',
        description: '',
        icon: 'Stethoscope',
        availableSlots: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
        duration: 30,
        price: 100
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [bookingsRes, servicesRes] = await Promise.all([
                api.get('/bookings'),
                api.get('/services')
            ]);
            setBookings(bookingsRes.data.data);
            setServices(servicesRes.data.data);
        } catch (error) {
            toast.error('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const handleAddService = async (e) => {
        e.preventDefault();
        try {
            await api.post('/services', newService);
            toast.success('Service added successfully');
            fetchData();
            setShowServiceForm(false);
            setNewService({
                name: '',
                description: '',
                icon: 'Stethoscope',
                availableSlots: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
                duration: 30,
                price: 100
            });
        } catch (error) {
            toast.error(error.message || 'Failed to add service');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-white shadow">
                <div className="container-custom py-6">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <p className="text-gray-600">Manage appointments and services</p>
                </div>
            </div>

            <div className="container-custom py-8">
                <div className="mb-6 flex gap-4">
                    <button
                        onClick={() => setActiveTab('bookings')}
                        className={`px-6 py-2 rounded-lg transition ${activeTab === 'bookings'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <Calendar className="inline h-4 w-4 mr-2" />
                        Bookings ({bookings.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('services')}
                        className={`px-6 py-2 rounded-lg transition ${activeTab === 'services'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <Users className="inline h-4 w-4 mr-2" />
                        Services ({services.length})
                    </button>
                </div>

                {activeTab === 'bookings' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white rounded-lg shadow overflow-hidden"
                    >
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {bookings.map((booking) => (
                                        <tr key={booking._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{booking.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{booking.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{booking.service?.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{booking.timeSlot}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {booking.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'services' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="mb-6">
                            <button
                                onClick={() => setShowServiceForm(!showServiceForm)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                            >
                                <Plus className="h-4 w-4" />
                                Add New Service
                            </button>
                        </div>

                        {showServiceForm && (
                            <div className="bg-white rounded-lg shadow p-6 mb-6">
                                <h3 className="text-lg font-semibold mb-4">Add New Service</h3>
                                <form onSubmit={handleAddService} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
                                        <input
                                            type="text"
                                            value={newService.name}
                                            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                        <textarea
                                            value={newService.description}
                                            onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                            rows="3"
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
                                            <input
                                                type="number"
                                                value={newService.duration}
                                                onChange={(e) => setNewService({ ...newService, duration: parseInt(e.target.value) })}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                                            <input
                                                type="number"
                                                value={newService.price}
                                                onChange={(e) => setNewService({ ...newService, price: parseInt(e.target.value) })}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Icon (Stethoscope, Tooth, Sparkles)</label>
                                        <select
                                            value={newService.icon}
                                            onChange={(e) => setNewService({ ...newService, icon: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                        >
                                            <option value="Stethoscope">Stethoscope</option>
                                            <option value="Tooth">Tooth</option>
                                            <option value="Sparkles">Sparkles</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Available Slots (comma-separated)</label>
                                        <input
                                            type="text"
                                            value={newService.availableSlots.join(', ')}
                                            onChange={(e) => setNewService({ ...newService, availableSlots: e.target.value.split(',').map(s => s.trim()) })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                            placeholder="09:00 AM, 10:00 AM, 11:00 AM"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                                    >
                                        Create Service
                                    </button>
                                </form>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service) => (
                                <div key={service._id} className="bg-white rounded-lg shadow p-6">
                                    <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                                    <div className="flex justify-between text-sm text-gray-500 mb-3">
                                        <span>Duration: {service.duration} mins</span>
                                        <span>Price: ${service.price}</span>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        <strong>Available Slots:</strong>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {service.availableSlots.map((slot, idx) => (
                                                <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs">
                                                    {slot}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Admin;