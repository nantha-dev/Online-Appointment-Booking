import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import BookingForm from '../components/BookingForm';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <BookingForm />
      <Testimonials />
      <Stats />
      <Footer />
    </div>
  );
};

export default Home;