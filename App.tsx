
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoScanner from './components/DemoScanner';
import Methodology from './components/Methodology';
import Privacy from './components/Privacy';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full bg-grid pointer-events-none -z-10" />
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] blur-light pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] blur-light pointer-events-none -z-10 opacity-50" />

      <Header scrolled={scrolled} />
      
      <main>
        <Hero />
        <section id="demo" className="py-24 px-4 bg-slate-950/50">
          <DemoScanner />
        </section>
        <section id="features" className="py-24 px-4">
          <Features />
        </section>
        <section id="methodology" className="py-24 px-4 bg-slate-950/50">
          <Methodology />
        </section>
        <section id="privacy" className="py-24 px-4">
          <Privacy />
        </section>
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
