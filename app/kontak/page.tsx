"use client";

import { Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import AnimatedText from '../../components/AnimatedText';

export default function Kontak() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      {/* Optimized animated background particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-15"></div>
          </div>
        ))}
      </div>

      {/* Optimized gradient orbs */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-8 left-1/2 w-48 h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>

      <div className="relative z-10 py-12 sm:py-16 px-4">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <AnimatedText
            text="Hubungi Kami"
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
            animation="fadeInUp"
          />
          <AnimatedText
            text="Mari terhubung dan wujudkan ide-ide brilian bersama. Kami siap mendengar cerita Anda."
            className="text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            animation="fadeInUp"
            delay={200}
          />
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              {/* Contact Cards */}
              <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1 text-sm sm:text-base">Telepon</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">+62 895 3373 64474</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1 text-sm sm:text-base">Alamat</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Banten, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group hover:scale-105 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-1 text-sm sm:text-base">Jadwal Kuliah</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Sen - Rab, 07:30 - 14:00</p>
                  </div>
                </div>
              </div>

              {/* Quote Section */}
              <div className="backdrop-blur-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl p-6 sm:p-8 border border-white/20 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Mari Berkolaborasi!</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  "Setiap ide besar dimulai dari percakapan sederhana. Mari kita mulai percakapan yang akan mengubah segalanya."
                </p>
              </div>

              {/* Social Media Links */}
              <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-4 sm:p-6 border border-white/20 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-sm sm:text-base">Ikuti Kami</h3>
                <div className="flex justify-center space-x-3 sm:space-x-4">
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xs sm:text-sm">f</span>
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xs sm:text-sm">t</span>
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xs sm:text-sm">ig</span>
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xs sm:text-sm">in</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}