import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, FileText, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenCvModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang & Keahlian', href: '#skills' },
    { name: 'Pendidikan & Pengalaman', href: '#experience' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Konsep 08 & Name */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-9 h-9 rounded-lg bg-slate-900 p-1.5 flex items-center justify-center transition-transform group-hover:scale-105">
              <img src="/logo.png" alt="R Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-base tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {personalInfo.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-xl transition-all cursor-pointer shadow-2xs"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              Preview CV
            </button>
            <a
              href={personalInfo.cvPdf}
              download="CV_AHMAD_RIZAL_BAIHAQI.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-xl transition-all cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4" />
              Unduh CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenCvModal}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-200"
              title="Preview CV"
            >
              <FileText className="w-5 h-5 text-blue-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                Lihat Preview CV
              </button>
              <a
                href={personalInfo.cvPdf}
                download="CV_AHMAD_RIZAL_BAIHAQI.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-xl"
              >
                <Download className="w-4 h-4" />
                Download CV PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
