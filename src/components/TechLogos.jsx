import React from 'react';
import { CloudSun, Shield, Zap } from 'lucide-react';

// Pure Inline SVGs & Devicon Brand Icons
export function SkillIcon({ name, className = "w-5 h-5" }) {
  const normalized = name.toLowerCase().trim();

  // Web Dev Tools (Devicon CDN)
  if (normalized.includes('html')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className={className} />;
  }
  if (normalized.includes('css') && !normalized.includes('tailwind')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className={className} />;
  }
  if (normalized.includes('typescript') || normalized === 'ts') {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className={className} />;
  }
  if (normalized.includes('javascript') || normalized === 'js') {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className={className} />;
  }
  if (normalized.includes('react')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className={className} />;
  }
  if (normalized.includes('next')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className={className} />;
  }
  if (normalized.includes('vue')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className={className} />;
  }
  if (normalized.includes('tailwind')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className={className} />;
  }
  if (normalized.includes('bootstrap')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className={className} />;
  }
  if (normalized.includes('blade') || normalized.includes('breeze') || normalized.includes('laravel')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" className={className} />;
  }
  if (normalized.includes('vite')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" className={className} />;
  }
  if (normalized.includes('php')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className={className} />;
  }
  if (normalized.includes('node')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className={className} />;
  }
  if (normalized.includes('express')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className={`${className} filter invert`} />;
  }
  if (normalized.includes('python')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className={className} />;
  }
  if (normalized.includes('mysql')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className={className} />;
  }
  if (normalized.includes('postgres')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className={className} />;
  }
  if (normalized === 'git') {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className={className} />;
  }
  if (normalized.includes('github')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className={className} />;
  }
  if (normalized.includes('code') || normalized.includes('vs code')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className={className} />;
  }
  if (normalized.includes('postman')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" className={className} />;
  }
  if (normalized.includes('vercel')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" className={className} />;
  }
  if (normalized.includes('figma')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className={className} />;
  }
  if (normalized.includes('docker')) {
    return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className={className} />;
  }
  if (normalized.includes('framer') || normalized.includes('motion')) {
    return <Zap className={`${className} text-indigo-500`} />;
  }
  if (normalized.includes('weather')) {
    return <CloudSun className={`${className} text-sky-500`} />;
  }

  // --- OFFICE TOOLS (100% Guaranteed Pure Inline SVG Icons) ---

  // Microsoft Excel Icon
  if (normalized.includes('excel')) {
    return (
      <svg viewBox="0 0 48 48" className={className}>
        <path fill="#107C41" d="M6 6h24v36H6z" />
        <path fill="#1F9A55" d="M30 6l12 6v24l-12 6z" opacity="0.4" />
        <path fill="#FFF" d="M14.5 15l3.2 6.5 3.3-6.5h3.5l-4.9 8.8 5.1 9.2h-3.5l-3.5-7-3.5 7H14l5-9.1-4.7-8.9z" />
      </svg>
    );
  }

  // Microsoft Word Icon
  if (normalized.includes('word')) {
    return (
      <svg viewBox="0 0 48 48" className={className}>
        <path fill="#185ABD" d="M6 6h24v36H6z" />
        <path fill="#2B7CD3" d="M30 6l12 6v24l-12 6z" opacity="0.4" />
        <path fill="#FFF" d="M12.5 15h3.2l2.3 9.8 2.5-9.8h3l2.5 9.8 2.3-9.8h3.2l-3.8 15h-3.4l-2.3-9.2-2.3 9.2h-3.4z" />
      </svg>
    );
  }

  // Microsoft PowerPoint Icon
  if (normalized.includes('powerpoint')) {
    return (
      <svg viewBox="0 0 48 48" className={className}>
        <path fill="#C43E1C" d="M6 6h24v36H6z" />
        <path fill="#E85C3A" d="M30 6l12 6v24l-12 6z" opacity="0.4" />
        <path fill="#FFF" d="M14.5 15h6.5c3.5 0 5.5 1.8 5.5 4.8 0 3.2-2.1 5-5.6 5h-3.4v5.2h-3zm3 3v4h3.2c1.8 0 2.8-.8 2.8-2s-1-2-2.8-2z" />
      </svg>
    );
  }

  // Google Docs Icon
  if (normalized.includes('google docs')) {
    return (
      <svg viewBox="0 0 48 48" className={className}>
        <path fill="#2684FC" d="M30 4H10c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V16L30 4z" />
        <path fill="#0066DA" d="M30 4l12 12H30V4z" />
        <path fill="#FFF" d="M14 22h20v2.5H14zm0 6h20v2.5H14zm0 6h14v2.5H14z" />
      </svg>
    );
  }

  // Google Sheets Icon
  if (normalized.includes('google sheets')) {
    return (
      <svg viewBox="0 0 48 48" className={className}>
        <path fill="#0F9D58" d="M30 4H10c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V16L30 4z" />
        <path fill="#076638" d="M30 4l12 12H30V4z" />
        <path fill="#FFF" d="M14 20h20v14H14zm2 2v3.5h7.5V22zm9.5 0V22H32v3.5zm-9.5 5.5v3.5h7.5V27.5zm9.5 0v3.5H32v-3.5z" />
      </svg>
    );
  }

  // Fallback icon
  return <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />;
}
