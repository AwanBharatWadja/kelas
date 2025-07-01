import React from 'react';
import { Providers } from '../components/Providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: 'Informatika A - Kelas Terdepan dalam Teknologi',
  description: 'Website resmi kelas Informatika A - Mengenal lebih dekat mahasiswa, kegiatan, dan prestasi kelas.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;