import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Star, Smile } from 'lucide-react';
import api from '../services/api';

const Stats = () => {
  const [stats, setStats] = useState({
    totalAppointments: 0,
    professionals: 500,
    avgRating: 4.9,
    satisfiedCustomers: 9850
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.get('/stats');
      setStats(response.data.data);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const statItems = [
    {
      icon: Calendar,
      value: stats.totalAppointments.toLocaleString(),
      label: 'Appointments Completed',
      suffix: '+'
    },
    {
      icon: Users,
      value: stats.professionals.toLocaleString(),
      label: 'Professional Experts',
      suffix: '+'
    },
    {
      icon: Star,
      value: stats.avgRating,
      label: 'Average Rating',
      suffix: '/5'
    },
    {
      icon: Smile,
      value: stats.satisfiedCustomers.toLocaleString(),
      label: 'Happy Patients',
      suffix: '+'
    }
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-4">
                <item.icon className="h-12 w-12" />
              </div>
              <div className="text-4xl font-bold mb-2">
                {item.value}{item.suffix}
              </div>
              <div className="text-blue-100">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;