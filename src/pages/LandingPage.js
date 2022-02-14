import React from 'react';
import Gallery from '../components/Gallery';
import ContactSection from '../components/contactSection/ContactSection';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
// import NewsletterSection from '../components/NewsletterSection';
// import Equipment from '../components/services/Equipment';
import TeamSection from '../components/team/TeamSection';
import Footer from '../components/Footer';
import ProjectsSection from '../components/ProjectSection';
import About from '../components/services/About';

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      {/* <Equipment /> */}
      <Gallery />
      <ProjectsSection />
      <TeamSection />
      {/* <NewsletterSection /> */}
      <ContactSection />

      <Footer />
    </>
  );
}
