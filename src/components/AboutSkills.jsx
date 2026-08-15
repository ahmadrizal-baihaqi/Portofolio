import React from 'react';
import { motion } from 'motion/react';
import { Code2, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import { webDevSkills, adminSkills } from '../data/portfolioData';
import { SkillIcon } from './TechLogos';

export default function AboutSkills() {
  return (
    <section id="skills" className="py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (No Pill Badge / Eyebrow Slop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Web Development Tech Stack & Administrasi Office Tools
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Kombinasi keahlian teknis pemrogaman web modern dan eksekusi presisi dalam pengelolaan data perkantoran.
          </p>
        </motion.div>

        {/* 50:50 Equal Dual Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: Web Development Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Web Developer Tech Stack</h3>
                  <p className="text-xs text-slate-500 font-semibold">Frontend, Backend & Development Tools</p>
                </div>
              </div>

              {/* Frontend */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Frontend Development</h4>
                <div className="flex flex-wrap gap-2.5">
                  {webDevSkills.frontend.map((item, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-bold text-slate-800 flex items-center gap-2 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all shadow-2xs"
                    >
                      <SkillIcon name={item} className="w-4 h-4 object-contain" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend & DB */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Backend & Database</h4>
                <div className="flex flex-wrap gap-2.5">
                  {webDevSkills.backend.map((item, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-bold text-slate-800 flex items-center gap-2 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all shadow-2xs"
                    >
                      <SkillIcon name={item} className="w-4 h-4 object-contain" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dev Tools */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Developer Tools</h4>
                <div className="flex flex-wrap gap-2.5">
                  {webDevSkills.tools.map((item, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-semibold text-slate-700 flex items-center gap-2"
                    >
                      <SkillIcon name={item} className="w-4 h-4 object-contain" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Mampu membangun aplikasi web interaktif, responsif, & basis data terstruktur.
            </div>

          </motion.div>

          {/* Column 2: Administrasi Office Tools & Skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Administrasi Office Tools</h3>
                  <p className="text-xs text-slate-500 font-semibold">Software Office & Manajemen Operasional</p>
                </div>
              </div>

              {/* Software Office */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Perangkat Lunak Utama</h4>
                <div className="flex flex-wrap gap-2.5">
                  {adminSkills.software.map((item, i) => (
                    <div
                      key={i}
                      className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-bold text-slate-800 flex items-center gap-2 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all shadow-2xs"
                    >
                      <SkillIcon name={item} className="w-4.5 h-4.5 object-contain" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operations & Data */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Keahlian Operasional Data</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {adminSkills.operations.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-bold text-slate-700 flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Pengolahan data akurat, pengarsipan berkas rapi, & penyusunan laporan rutin.
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
