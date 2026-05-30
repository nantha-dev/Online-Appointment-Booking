import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Choose Service',
    description: 'Browse our services and select the one that fits your needs',
    color: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    icon: Clock,
    title: 'Select Date & Time',
    description: 'Pick your preferred date and available time slot',
    color: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    icon: User,
    title: 'Fill Details',
    description: 'Provide your contact information for confirmation',
    color: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    icon: CheckCircle,
    title: 'Confirm Booking',
    description: 'Review and confirm your appointment instantly',
    color: 'bg-orange-100',
    iconColor: 'text-orange-600'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book your appointment in four simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative">
                <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10`}>
                  <step.icon className={`h-10 w-10 ${step.iconColor}`} />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-[60%] w-[40%] h-0.5 bg-gray-300 -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;