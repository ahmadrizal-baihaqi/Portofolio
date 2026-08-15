import React from 'react';
import { X, Download, FileText, ExternalLink, ShieldCheck } from 'lucide-react';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const pdfUrl = "/asset/CV_AHMAD_RIZAL_BAIHAQI.pdf";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full h-[90vh] flex flex-col border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-600 text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg tracking-tight leading-tight">
                Preview Curriculum Vitae (CV) PDF
              </h3>
              <p className="text-xs text-slate-300 font-medium">
                Ahmad Rizal Baihaqi — Software Engineering & Admin Specialist
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}
              download="CV_AHMAD_RIZAL_BAIHAQI.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Tutup PDF modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Viewer Content */}
        <div className="flex-1 bg-slate-100 relative overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            title="CV Ahmad Rizal Baihaqi Preview"
            className="w-full h-full border-0"
          >
            <div className="p-12 text-center space-y-4">
              <p className="text-slate-700 font-medium">
                Browser Anda tidak mendukung preview PDF langsung.
              </p>
              <a
                href={pdfUrl}
                download="CV_AHMAD_RIZAL_BAIHAQI.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl"
              >
                <Download className="w-4 h-4" /> Download PDF Sekarang
              </a>
            </div>
          </iframe>
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium flex-shrink-0">
          <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
            <ShieldCheck className="w-4 h-4" /> Dokumen Terverifikasi & Resmi
          </span>
          <button
            onClick={onClose}
            className="hover:text-slate-900 font-semibold cursor-pointer"
          >
            Tutup Jendela
          </button>
        </div>

      </div>
    </div>
  );
}
