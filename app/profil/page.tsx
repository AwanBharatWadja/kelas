"use client";

import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import ProfileCard from '../../components/ProfileCard';
import AnimatedText from '../../components/AnimatedText';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const studentsData = [
  {
    id: 1,
    name: "Adila Muqtashida",
    photo: "/assets/images/student-1.jpg",
    nim: "241730001",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 2,
    name: "Allyssa Putri",
    photo: "/assets/images/student-2.jpg",
    nim: "241730002",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 3,
    name: "Arlen Prima Dinova",
    photo: "/assets/images/student-3.jpg",
    nim: "241730003",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 4,
    name: "Raihan Khairul Annas",
    photo: "/assets/images/student-4.jpg",
    nim: "241730004",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 5,
    name: "Putri Dwi Manggali",
    photo: "/assets/images/student-5.jpg",
    nim: "241730005",
    role: "Sekretaris",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 6,
    name: "Derisya Febriyanti",
    photo: "/assets/images/student-6.jpg",
    nim: "241730006",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 7,
    name: "Amir Faiq Alhannan",
    photo: "/assets/images/student-7.jpg",
    nim: "241730007",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 8,
    name: "Muhammad Rifqi Hidayatullah",
    photo: "/assets/images/student-8.jpg",
    nim: "241730008",
    role: "Kosma",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 9,
    name: "Muhammad Alif Farras Syakir",
    photo: "/assets/images/student-9.jpg",
    nim: "241730009",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 10,
    name: "Muhammad Alief Rasyidin",
    photo: "/assets/images/student-10.jpg",
    nim: "241730010",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 11,
    name: "Ayub Assabiq",
    photo: "/assets/images/student-11.jpg",
    nim: "241730011",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 12,
    name: "Mohammad Irham Fastabie",
    photo: "/assets/images/student-12.jpg",
    nim: "241730012",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 13,
    name: "Risma Aulia Febrianti",
    photo: "/assets/images/student-13.jpg",
    nim: "241730013",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 14,
    name: "Lucy Amanda",
    photo: "/assets/images/student-14.jpg",
    nim: "241730014",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 15,
    name: "Fierren Al Hilal Saepul Bahri",
    photo: "/assets/images/student-15.jpg",
    nim: "241730015",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 16,
    name: "Achmad Maulana",
    photo: "/assets/images/student-16.jpg",
    nim: "241730016",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 17,
    name: "Nazwa Althafah Athalia",
    photo: "/assets/images/student-17.jpg",
    nim: "241730017",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 18,
    name: "Muhfiz Zauzi",
    photo: "/assets/images/student-18.jpg",
    nim: "241730018",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 19,
    name: "Muhammad Fadhil Dwi Saputra",
    photo: "/assets/images/student-19.jpg",
    nim: "241730019",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 20,
    name: "Danish Alfian Safaraz",
    photo: "/assets/images/student-20.jpg",
    nim: "241730020",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 21,
    name: "Amar Subagja Firdaus",
    photo: "/assets/images/student-21.jpg",
    nim: "241730021",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 22,
    name: "Safira Azahra",
    photo: "/assets/images/student-22.jpg",
    nim: "241730022",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 23,
    name: "Revan Sabillah Saputra",
    photo: "/assets/images/student-23.jpg",
    nim: "241730023",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 24,
    name: "Muhammad Daffa Aqila Hakam",
    photo: "/assets/images/student-24.jpg",
    nim: "241730024",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 25,
    name: "Ahmad Fahmirifa Fahrurozi",
    photo: "/assets/images/student-25.jpg",
    nim: "241730025",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 26,
    name: "Mohammad Azkal Azkia",
    photo: "/assets/images/student-26.jpg",
    nim: "241730026",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 27,
    name: "Ahza Zulfi Afif",
    photo: "/assets/images/student-27.jpg",
    nim: "241730027",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 28,
    name: "Riska Nurnajmah",
    photo: "/assets/images/student-28.jpg",
    nim: "241730028",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 29,
    name: "Rio Gunawan",
    photo: "/assets/images/student-29.jpg",
    nim: "241730029",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 30,
    name: "Maulina Diah Lestari",
    photo: "/assets/images/student-30.jpg",
    nim: "241730030",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 31,
    name: "Intan Nurjanah",
    photo: "/assets/images/student-31.jpg",
    nim: "241730031",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 32,
    name: "Naufal Afaf Ekayana",
    photo: "/assets/images/student-32.jpg",
    nim: "241730032",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 33,
    name: "Kamilia Inas Zahirah",
    photo: "/assets/images/student-33.jpg",
    nim: "241730033",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 34,
    name: "Siti Aminah",
    photo: "/assets/images/student-34.jpg",
    nim: "241730034",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  },
  {
    id: 35,
    name: "Muhammad Arief Rachmatullah",
    photo: "/assets/images/student-35.jpg",
    nim: "241730035",
    role: "Anggota",
    hobby: "",
    instagram: "",
    linkedin: "",
    github: ""
  }
];

const ProfilPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');

  const filteredStudents = useMemo(() => {
    return studentsData.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          student.nim.includes(searchTerm);
      const matchesRole = filterRole === 'all' || student.role.toLowerCase().includes(filterRole);
      return matchesSearch && matchesRole;
    });
  }, [searchTerm, filterRole]);

  const roles = ['all', 'anggota', 'sekretaris', 'kosma'];

  // Determine grid columns based on screen size
  const getGridCols = () => {
    if (isMobile) return 'grid-cols-1 sm:grid-cols-2';
    if (isTablet) return 'grid-cols-2 md:grid-cols-3';
    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/60 dark:from-gray-900 dark:via-slate-900/90 dark:to-indigo-950/80"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-violet-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>

        {/* Elegant flowing lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path d="M0,300 Q300,100 600,250 T1200,200" stroke="url(#lineGradient1)" strokeWidth="2" fill="none"/>
          <path d="M0,500 Q400,200 800,350 T1200,400" stroke="url(#lineGradient1)" strokeWidth="1.5" fill="none" opacity="0.7"/>
          <path d="M0,700 Q200,400 500,550 T1200,600" stroke="url(#lineGradient1)" strokeWidth="1" fill="none" opacity="0.5"/>
        </svg>

        {/* Subtle noise texture for premium feel */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
             }}>
        </div>
      </div>

      <Head>
        <title>Profil Mahasiswa - Informatika A</title>
        <meta name="description" content="Profil lengkap 35 mahasiswa Informatika A dengan informasi kontak dan keahlian." />
      </Head>

      {/* Header Section */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
            </div>
            <AnimatedText
              text="Profil Mahasiswa"
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-100"
              animation="fadeInUp"
            />
            <AnimatedText
              text="Kenali lebih dekat anggota kelas Informatika A dengan keunikan dan keahlian masing-masing"
              className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              animation="fadeInUp"
              delay={200}
            />
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Cari nama atau NIM..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 shadow-sm hover:shadow-md text-sm sm:text-base"
                />
              </div>

              {/* Role Filter */}
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 shadow-sm hover:shadow-md text-sm sm:text-base"
              >
                {roles.map(role => (
                  <option key={role} value={role}>
                    {role === 'all' ? 'Semua Peran' : role.charAt(0).toUpperCase() + role.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="text-center p-4 sm:p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300 animate-fade-in">
              <AnimatedText
                text={studentsData.length.toString()}
                className="text-2xl sm:text-3xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                animation="bounce"
              />
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Total Mahasiswa</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <AnimatedText
                text={filteredStudents.length.toString()}
                className="text-2xl sm:text-3xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                animation="bounce"
                delay={100}
              />
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Hasil Pencarian</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <AnimatedText
                text="1"
                className="text-2xl sm:text-3xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                animation="bounce"
                delay={200}
              />
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Sekretaris</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <AnimatedText
                text="1"
                className="text-2xl sm:text-3xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                animation="bounce"
                delay={300}
              />
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">Kosma</div>
            </div>
          </div>
        </div>
      </section>

      {/* Students Grid */}
      <section className="relative py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredStudents.length > 0 ? (
            <div className={`grid ${getGridCols()} gap-4 sm:gap-6`}>
              {filteredStudents.map((student, index) => (
                <div
                  key={student.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProfileCard {...student} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16 lg:py-20">
              <div className="text-4xl sm:text-6xl mb-4">🔍</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Tidak ada mahasiswa ditemukan
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Coba ubah kata kunci pencarian atau filter yang digunakan
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Fun Facts */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-blue-50/40 to-white/60 dark:from-gray-800/60 dark:via-gray-900/40 dark:to-gray-800/60 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <AnimatedText
              text="Fun Facts Kelas"
              className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800 dark:text-gray-100"
              animation="fadeInUp"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in">
              <div className="text-3xl sm:text-4xl mb-4">💻</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Total Mahasiswa</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">35 Mahasiswa Aktif</p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl sm:text-4xl mb-4">🚀</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Semangat Belajar</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Kelas yang aktif dan kreatif</p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/30 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl sm:text-4xl mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Fokus</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Mengembangkan skill programming</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilPage;