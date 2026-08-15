import React from 'react';
import { Code2, FileCheck, Award, Zap } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: <Code2 className="w-6 h-6 text-indigo-600" />,
      title: 'Rekayasa Perangkat Lunak',
      subtitle: 'Keahlian Web, PHP, MySQL, JS & HTML',
    },
    {
      icon: <FileCheck className="w-6 h-6 text-emerald-600" />,
      title: 'Administrasi & Data',
      subtitle: 'Microsoft Office & Google Workspace',
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: '100% Ketelitian & Akurasi',
      subtitle: 'Pengarsipan & Laporan Berkualitas',
    },
    {
      icon: <Zap className="w-6 h-6 text-sky-500" />,
      title: 'Cepat Belajar & Adaptif',
      subtitle: 'Siap Berkontribusi Maksimal',
    },
  ];

  return (
    <section className="py-10 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
