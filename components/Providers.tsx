"use client";

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { theme } from '../theme/theme';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="informatika-theme"
          themes={['light', 'dark']}
        >
          {children}
        </ThemeProvider>
      </ChakraProvider>
    </>
  );
}