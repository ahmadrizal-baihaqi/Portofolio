import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, Mail, Github, Instagram, ArrowRight, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenCvModal }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white border-b border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold tracking-tight">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>{personalInfo.location}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-900 font-bold">{personalInfo.status}</span>
            </div>

            {}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-blue-700 tracking-tight">
                {personalInfo.title}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={personalInfo.cvPdf}
                download="CV_AHMAD_RIZAL_BAIHAQI.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-slate-900 hover:bg-blue-600 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <Download className="w-5 h-5" />
                Unduh CV (PDF)
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 rounded-xl shadow-2xs transition-all cursor-pointer"
              >
                <FileText className="w-5 h-5 text-blue-600" />
                Preview CV
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Hubungi Saya <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links Dock */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-200/80">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Kontak & Sosial Media:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                  title="Kirim Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                  title="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Clean Editorial Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md bg-white p-3 rounded-3xl border border-slate-200 shadow-xl relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 border border-slate-200/80">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.src = "asset/Profile.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xl font-bold tracking-tight">{personalInfo.name}</p>
                  <p className="text-xs text-slate-300 font-semibold">{personalInfo.title} • {personalInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
