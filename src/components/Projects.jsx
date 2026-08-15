import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Eye, CheckCircle2, X } from 'lucide-react';
import { projectList } from '../data/portfolioData';
import { SkillIcon } from './TechLogos';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Focused purely on Web Development Projects, No Pill Badge Slop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Proyek Development & Aplikasi Web
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Kumpulan proyek pilihan yang menunjukkan penguasaan teknologi web, arsitektur basis data, dan antarmuka pengguna interaktif.
          </p>
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-900 shadow-xs border border-white/40">
                  {project.categoryLabel}
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-blue-600 text-white text-xs font-semibold backdrop-blur-md transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  Detail Proyek
                </button>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer leading-snug"
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-4">
                  {/* Skill Badges with Icons */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold flex items-center gap-1.5"
                      >
                        <SkillIcon name={tag} className="w-3.5 h-3.5" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                    >
                      Buka Detail Lengkap →
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                      title="GitHub Repositori"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative animate-in zoom-in-95 duration-200">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] w-full bg-slate-100">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Deskripsi Proyek</h4>
                  <p className="text-slate-700 text-base leading-relaxed">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Teknologi Yang Digunakan:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold flex items-center gap-2">
                        <SkillIcon name={tag} className="w-4 h-4" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Tutup
                  </button>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-slate-900 hover:bg-blue-600 rounded-xl transition-colors"
                  >
                    <Github className="w-4 h-4" /> Repositori GitHub
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
