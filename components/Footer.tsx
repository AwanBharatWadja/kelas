import React from 'react';
import Link from 'next/link';
import { Heart, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/NaufalNyaa/web_kelas',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'Email',
      href: 'mailto:naufalafaf09@gmail.com',
      icon: Mail,
      color: 'hover:text-blue-500'
    }
  ];

  const quickLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Profil', href: '/profil' },
    { name: 'Galeri', href: '/galeri' },
    { name: 'Kontak', href: '/kontak' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+62 895 3373 64474',
      href: 'tel:+6289533736474'
    },
    {
      icon: Mail,
      text: 'naufalafaf09@gmail.com',
      href: 'mailto:naufalafaf09@gmail.com'
    },
    {
      icon: MapPin,
      text: 'Banten, Indonesia',
      href: '#'
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">IA</span>
              </div>
              <span className="font-display font-bold text-2xl text-gray-900 dark:text-white">
                Informatika A
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              Kelas terdepan dalam teknologi, inovasi, dan kolaborasi. 
              Bersama membangun masa depan digital yang lebih baik dengan 35 mahasiswa yang berdedikasi.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105 ${link.color}`}
                    aria-label={link.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Navigasi Cepat
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Kontak
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <li key={index}>
                    <a
                      href={contact.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <IconComponent size={16} className="mr-3 group-hover:text-blue-500 transition-colors duration-200" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <span>© {currentYear} Informatika A. Made with</span>
              <Heart size={16} className="mx-2 text-red-500 animate-pulse" fill="currentColor" />
              <span>by the class</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                35 Mahasiswa Aktif
              </span>
              <span>Semester 4</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;