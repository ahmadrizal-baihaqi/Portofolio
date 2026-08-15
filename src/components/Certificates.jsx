import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Calendar, ShieldCheck, Eye, X } from 'lucide-react';
import { certificateList } from '../data/portfolioData';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 bg-white border-b border-slate-200/80">
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
            Sertifikat & Lisensi Kompetensi
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Bukti pengakuan kompetensi resmi dalam bidang Rekayasa Perangkat Lunak dan Administrasi Office.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificateList.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 text-blue-600 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {cert.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((s, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-slate-600">
                      {s}
                    </span>
                  ))}
                </div>

              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer shadow-2xs"
                >
                  <Eye className="w-4 h-4 text-blue-600" /> Preview Sertifikat
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Certificate Lightbox Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative space-y-6">
              
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{selectedCert.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold">{selectedCert.issuer} • {selectedCert.date}</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3]">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs">
                <p className="font-bold text-slate-700">Credential ID: <span className="font-mono text-blue-600">{selectedCert.credentialId}</span></p>
                <p className="text-slate-600">{selectedCert.description}</p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                >
                  Tutup Preview
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
