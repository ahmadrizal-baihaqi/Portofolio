export const personalInfo = {
  name: "Ahmad Rizal Baihaqi",
  title: "Web Developer & Administrasi Office",
  location: "Tangerang",
  status: "Open to Work / Discuss Project",
  email: "ahmadrizalbaihaqi25@gmail.com",
  github: "https://github.com/ahmadrizal-baihaqi",
  instagram: "https://www.instagram.com/arzlbhqi_/",
  bio: "Web Developer dengan ketertarikan pada pengembangan aplikasi berbasis web, pengolahan data, dan teknologi digital. Terus belajar, membangun, dan mengembangkan solusi yang fungsional serta relevan dengan kebutuhan dunia kerja.",
  cvPdf: "/asset/CV_AHMAD_RIZAL_BAIHAQI.pdf",
  profilePhoto: "/asset/Profile.png",
};

export const webDevSkills = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap"],
  backend: ["PHP", "Laravel", "Node.js", "Express.js", "Python", "MySQL", "PostgreSQL"],
  tools: ["Git", "GitHub", "Visual Studio Code", "Postman", "Vercel", "Figma", "Docker"]
};

export const adminSkills = {
  software: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Google Docs", "Google Sheets"],
  operations: ["Entri Data", "Pengarsipan Berkas", "Pengolahan Data", "Penyusunan Laporan", "Administrasi Dokumen", "Pengecekan & Pencatatan Data"]
};

export const educationList = [
  {
    institution: "SMKN 4 Kota Tangerang",
    major: "Rekayasa Perangkat Lunak (RPL)",
    period: "2023 – 2026",
    location: "Tangerang",
    description: "Fokus pada pengembangan perangkat lunak berbasis web, pemrograman terstruktur, arsitektur basis data, serta etika profesionalisme kerja."
  }
];

export const experienceList = [
  {
    company: "PT Mahiza Karya Mandiri",
    role: "Staff Administrasi (PKL)",
    period: "Juni – Desember 2025",
    location: "Tangerang",
    description: "Melaksanakan tugas operasional administrasi perkantoran secara menyeluruh dalam program Praktik Kerja Lapangan (PKL).",
    tasks: [
      "Entri dan pengolahan data administrasi harian perusahaan dengan akurasi tinggi.",
      "Pengarsipan dan penataan dokumen penting baik secara fisik maupun digital secara terstruktur.",
      "Penyusunan laporan administrasi berkala menggunakan Microsoft Office.",
      "Pengecekan, verifikasi, dan pencatatan data operasional kantor secara konsisten."
    ]
  }
];

// Project List focused purely on Web Development projects
export const projectList = [
  {
    id: 1,
    title: "CertVault — Digital Certificate Vault & Management System",
    categoryLabel: "Security & Management",
    shortDesc: "Aplikasi Laravel full-stack untuk pengelolaan, pengarsipan, & verifikasi sertifikat digital secara aman.",
    fullDesc: "CertVault adalah aplikasi Laravel 12 full-stack yang dikembangkan menggunakan PHP 8.2+, Blade Templates, Tailwind CSS v4, Vite, & basis data MySQL. Dilengkapi autentikasi Laravel Sanctum, komunikasi API via Axios, serta lingkungan development Docker (Laravel Sail).",
    tags: ["Laravel", "PHP", "Blade", "Tailwind CSS", "MySQL", "Laravel Sanctum", "Vite", "Docker"],
    github: "https://github.com/ahmadrizal-baihaqi/Cert-Vault.git",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "WeathWeb — Real-Time Weather Forecast & Climate App",
    categoryLabel: "Web App & API Integration",
    shortDesc: "Aplikasi web pemantau cuaca real-time yang menyajikan prakiraan cuaca & suhu kota secara presisi.",
    fullDesc: "WeathWeb dikembangkan menggunakan Next.js 16 (App Router) & TypeScript dengan GPU-accelerated smooth scrolling, animasi Framer Motion, integrasi API WeatherAPI.com, serta penyimpanan client-side localStorage.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "WeatherAPI"],
    github: "https://github.com/ahmadrizal-baihaqi/WeathWeb-.git",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Sistem Informasi Perpustakaan Digital (UKK RPL)",
    categoryLabel: "Web System & Database",
    shortDesc: "Sistem manajemen perpustakaan digital berbasis Laravel & Blade untuk sirkulasi & peminjaman buku.",
    fullDesc: "Sistem informasi perpustakaan digital berbasis Laravel (PHP 8.2) dan Laravel Breeze authentication yang dikembangkan untuk Uji Kompetensi Keahlian (UKK RPL). Menggunakan Blade templating, Tailwind CSS, Vite, serta basis data MySQL/SQLite.",
    tags: ["Laravel", "PHP", "Blade", "MySQL", "Tailwind CSS", "Laravel Breeze", "Vite"],
    github: "https://github.com/ahmadrizal-baihaqi/ukk-perpustakaan.git",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80"
  }
];

export const certificateList = [
  {
    id: 1,
    title: "Sertifikat Uji Kompetensi Rekayasa Perangkat Lunak (RPL)",
    issuer: "Dinas Pendidikan & SMKN 4 Kota Tangerang",
    date: "2024",
    credentialId: "RPL-COMPETENCY-2024-AR",
    description: "Menyatakan kelulusan uji kompetensi keahlian dalam pembuatan aplikasi berbasis web dan pengelolaan basis data.",
    skills: ["Web Development", "PHP & MySQL", "HTML5 & CSS3", "Algoritma Pemrograman"],
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Sertifikat Pelatihan & Keahlian Administrasi Perkantoran",
    issuer: "Lembaga Sertifikasi & Pelatihan",
    date: "2024",
    credentialId: "ADMIN-OFFICE-EXCEL-2024",
    description: "Sertifikasi penguasaan perangkat lunak administrasi Microsoft Word, Excel (Pivot Table, VLOOKUP), dan manajemen dokumen perkantoran.",
    skills: ["Microsoft Excel", "Microsoft Word", "Entri Data", "Pengarsipan Berkas"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Sertifikat Praktik Kerja Lapangan (PKL)",
    issuer: "PT Mahiza Karya Mandiri",
    date: "Juni – Desember 2025",
    credentialId: "PKL-MAHIZA-2025",
    description: "Sertifikat apresiasi kinerja selama melaksanakan kegiatan PKL di bidang administrasi operasional dan entri data perusahaan.",
    skills: ["Staff Administrasi", "Pengolahan Data", "Microsoft Office", "Kedisiplinan Kerja"],
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80"
  }
];
