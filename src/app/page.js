import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Portfolio';
import SkillSection from '@/components/SkillSection';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default HomePage;