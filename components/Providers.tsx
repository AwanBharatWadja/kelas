"use client";

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light" // Changed from "system" to prevent hydration issues
      enableSystem={true}
      disableTransitionOnChange={false} // Enable smooth transitions
      storageKey="informatika-theme" // More specific storage key
      themes={['light', 'dark']} // Removed 'system' to simplify
      forcedTheme={undefined}
    >
      {children}
    </ThemeProvider>
  );
}
