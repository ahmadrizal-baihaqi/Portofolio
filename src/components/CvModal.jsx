import React, { useState, useEffect } from 'react';
import { X, Download, FileText, ShieldCheck, Eye } from 'lucide-react';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const pdfUrl = "/asset/CV_AHMAD_RIZAL_BAIHAQI.pdf";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile browser HP vs Desktop
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // For live web origin, use Google Docs PDF viewer for 100% mobile compatibility
  const fullPdfUrl = typeof window !== 'undefined' ? `${window.location.origin}${pdfUrl}` : pdfUrl;
  const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(fullPdfUrl)}&embedded=true`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full h-[92vh] sm:h-[90vh] flex flex-col border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-lg tracking-tight leading-tight">
                Preview Curriculum Vitae (CV) PDF
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 font-medium line-clamp-1">
                Ahmad Rizal Baihaqi — Web Developer & Admin Office
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={pdfUrl}
              download="CV_AHMAD_RIZAL_BAIHAQI.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">Unduh</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Tutup PDF modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Modal Viewer Content */}
        <div className="flex-1 bg-slate-100 relative overflow-hidden">
          <iframe
            src={isMobile ? googleViewerUrl : `${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            title="CV Ahmad Rizal Baihaqi Preview"
            className="w-full h-full border-0"
          >
            <div className="p-8 text-center space-y-4">
              <p className="text-slate-700 font-medium text-sm">
                Browser Anda tidak mendukung preview PDF langsung.
              </p>
              <a
                href={pdfUrl}
                download="CV_AHMAD_RIZAL_BAIHAQI.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-sm"
              >
                <Download className="w-4 h-4" /> Download PDF Sekarang
              </a>
            </div>
          </iframe>
        </div>

        {/* Modal Footer Note */}
        <div className="px-4 sm:px-6 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium flex-shrink-0">
          <span className="flex items-center gap-1.5 text-emerald-600 font-semibold text-[11px] sm:text-xs">
            <ShieldCheck className="w-4 h-4" /> Dokumen Terverifikasi & Resmi
          </span>
          <button
            onClick={onClose}
            className="hover:text-slate-900 font-semibold cursor-pointer text-xs"
          >
            Tutup Jendela
          </button>
        </div>

      </div>
    </div>
  );
}
