const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');

dotenv.config({ path: './.env' });

const services = [
  {
    name: 'General Consultation',
    description: 'Comprehensive medical consultation with our experienced physicians',
    icon: 'Stethoscope',
    availableSlots: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
    duration: 30,
    price: 100
  },
  {
    name: 'Dental Checkup',
    description: 'Complete oral examination and professional cleaning',
    icon: 'Tooth',
    availableSlots: ['09:30 AM', '10:30 AM', '11:30 AM', '01:30 PM', '02:30 PM', '03:30 PM'],
    duration: 45,
    price: 150
  },
  {
    name: 'Skin Care',
    description: 'Professional dermatology consultation and skin analysis',
    icon: 'Sparkles',
    availableSlots: ['10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'],
    duration: 40,
    price: 120
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Service.deleteMany();
    await Service.insertMany(services);
    console.log('Database seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();