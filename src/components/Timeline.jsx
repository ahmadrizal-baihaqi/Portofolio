import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationList, experienceList } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (No Pill Badge Slop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pendidikan & Pengalaman Kerja
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Rekam perjalanan pendidikan dan pengalaman profesional yang terus berkembang seiring bertambahnya pengetahuan, keterampilan, dan pengalaman di dunia kerja.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Pengalaman Kerja */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Pengalaman Kerja / Magang</h3>
                <p className="text-xs text-slate-500 font-semibold">Praktik Kerja Lapangan (PKL)</p>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
              {experienceList.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-9 group"
                >
                  <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {exp.role}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600">
                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm font-bold text-blue-700 mb-3 flex items-center gap-1.5">
                      <span>{exp.company}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 font-medium flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </span>
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200/80">
                      <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Tugas & Tanggung Jawab Utama:</p>
                      {exp.tasks.map((task, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Pendidikan */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Riwayat Pendidikan</h3>
                <p className="text-xs text-slate-500 font-semibold">Pendidikan Formal Kejuruan</p>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-9 group"
                >
                  <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                        {edu.major}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-sm font-bold text-emerald-700 mb-3 flex items-center gap-1.5">
                      <span>{edu.institution}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 font-medium flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {edu.location}
                      </span>
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
