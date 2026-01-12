
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import WhyElite from './components/WhyElite';
import Coaches from './components/Coaches';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-body text-white/90">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <WhyElite />
        <Coaches />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
