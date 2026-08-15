import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutSkills from './components/AboutSkills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';
import BgmPlayer from './components/BgmPlayer';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50/50 text-slate-800 antialiased selection:bg-slate-900 selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <StatsBar />
        <AboutSkills />
        <Timeline />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Floating Background Music Player */}
      <BgmPlayer />

      {/* In-Browser PDF Preview Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

    </div>
  );
}
