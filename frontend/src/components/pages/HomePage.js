import React from 'react';
import '../../App.css';
import HeroSection from '../HomePage/HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';
function HomePage() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Footer />
    </>
  );
}

export default HomePage;
