import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import CursorEffects from '../components/CursorEffects';
import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

// This should be the root layout for Next.js App Router
const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Informatika A - Kelas Terdepan dalam Teknologi</title>
        <meta name="description" content="Website resmi kelas Informatika A - Mengenal lebih dekat mahasiswa, kegiatan, dan prestasi kelas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* Custom Cursor Components */}
          <CustomCursor />
          <CursorEffects />
          
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;