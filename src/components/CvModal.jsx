import React, { useState, useEffect } from 'react';
import { X, Download, FileText, ShieldCheck, ExternalLink } from 'lucide-react';

export default function CvModal({ isOpen, onClose }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  if (!isOpen) return null;

  const pdfUrl = '/asset/CV_AHMAD_RIZAL_BAIHAQI.pdf';
  const fullPdfUrl = typeof window !== 'undefined' ? `${window.location.origin}${pdfUrl}` : pdfUrl;

  // Google Docs viewer only works with publicly accessible URLs — skip on localhost
  const isLocalhost = typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
  const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(fullPdfUrl)}&embedded=true`;

  // Use Google Docs viewer only on mobile + deployed (not localhost)
  const iframeSrc = (isMobile && !isLocalhost)
    ? googleViewerUrl
    : `${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      style={{ background: 'rgba(2,6,23,0.88)', backdropFilter: 'blur(18px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white w-full flex flex-col border border-slate-200/60 shadow-2xl overflow-hidden"
        style={{
          maxWidth: 960,
          height: 'min(92vh, 860px)',
          borderRadius: 20,
          animation: 'cvModalIn 0.22s cubic-bezier(0.16,1,0.3,1) both',
        }}
      >
        {/* ── Header ── */}
        <div className="flex-shrink-0 flex items-center justify-between gap-4 px-5 py-4 bg-slate-950">

          {/* Identity */}
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-xl bg-blue-600 shadow-sm"
              style={{ width: 38, height: 38 }}
            >
              <FileText className="text-white" style={{ width: 18, height: 18 }} />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-sm sm:text-base text-white leading-tight tracking-tight truncate">
                Curriculum Vitae
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 font-medium leading-tight truncate">
                Ahmad Rizal Baihaqi — Web Developer &amp; Admin Office
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Download */}
            <a
              href={pdfUrl}
              download="CV_AHMAD_RIZAL_BAIHAQI.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs font-bold transition-all shadow-sm"
              title="Unduh CV PDF"
            >
              <Download style={{ width: 13, height: 13 }} />
              <span className="hidden sm:inline">Unduh PDF</span>
              <span className="sm:hidden">Unduh</span>
            </a>

            {/* Open in new tab */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
              title="Buka di tab baru"
            >
              <ExternalLink style={{ width: 16, height: 16 }} />
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
              aria-label="Tutup modal CV"
            >
              <X style={{ width: 18, height: 18 }} />
            </button>
          </div>
        </div>

        {/* ── PDF Viewer ── */}
        <div className="flex-1 relative bg-slate-100 overflow-hidden">
          <iframe
            src={iframeSrc}
            title="CV Ahmad Rizal Baihaqi"
            className="w-full h-full border-0"
          >
            {/* Fallback */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
              <FileText className="w-12 h-12 text-slate-300" />
              <p className="text-slate-600 font-medium text-sm">
                Browser tidak mendukung preview PDF langsung.
              </p>
              <a
                href={pdfUrl}
                download="CV_AHMAD_RIZAL_BAIHAQI.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-colors"
              >
                <Download className="w-4 h-4" /> Unduh PDF Sekarang
              </a>
            </div>
          </iframe>
        </div>

        {/* ── Footer ── */}
        <div className="flex-shrink-0 flex items-center justify-between px-5 py-3 bg-slate-50 border-t border-slate-200">
          <span className="flex items-center gap-1.5 text-emerald-600 font-semibold text-[11px] sm:text-xs">
            <ShieldCheck style={{ width: 14, height: 14 }} />
            Dokumen Resmi &amp; Terverifikasi
          </span>
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-slate-800 font-semibold transition-colors cursor-pointer"
          >
            Tutup ✕
          </button>
        </div>
      </div>

      <style>{`
        @keyframes cvModalIn {
          from { opacity: 0; transform: scale(0.96) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
