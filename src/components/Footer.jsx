import React from 'react';
import { ArrowUp, Github, Instagram, Mail, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenCvModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 p-1.5 flex items-center justify-center">
                <img src="/logo.png" alt="R Logo" className="w-full h-full object-contain filter invert" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {personalInfo.title} berlokasi di {personalInfo.location}. Berkomitmen pada keahlian seimbang antara pengembangan aplikasi web modern dan eksekusi administrasi perkantoran yang berpresisi tinggi.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Navigasi Halaman</h4>
            <ul className="space-y-2 text-sm text-slate-300 font-medium">
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Tentang & Keahlian</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Pendidikan & Pengalaman</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Proyek & Karya</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Kontak Langsung</a></li>
            </ul>
          </div>

          {/* Col 3: Actions & Socials */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Dokumen & Kontak</h4>
            <div className="space-y-2">
              <button
                onClick={onOpenCvModal}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer border border-slate-800"
              >
                <FileText className="w-4 h-4 text-blue-400" /> Preview CV PDF
              </button>
              <a
                href={personalInfo.cvPdf}
                download="CV_AHMAD_RIZAL_BAIHAQI.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors"
              >
                Download CV PDF
              </a>
            </div>
            
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl transition-colors border border-slate-800"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl transition-colors border border-slate-800"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl transition-colors border border-slate-800"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & scroll top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-xl transition-colors border border-slate-800 cursor-pointer"
          >
            <span>Ke Atas</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
