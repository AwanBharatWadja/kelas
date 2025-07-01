import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const colors = {
  brand: {
    50: '#E6FFFA',
    100: '#B2F5EA',
    200: '#81E6D9',
    300: '#4FD1C7',
    400: '#38B2AC',
    500: '#319795',
    600: '#2C7A7B',
    700: '#285E61',
    800: '#234E52',
    900: '#1D4044',
  },
  mint: {
    50: '#F0FDFA',
    100: '#CCFBF1',
    200: '#99F6E4',
    300: '#5EEAD4',
    400: '#2DD4BF',
    500: '#14B8A6',
    600: '#0D9488',
    700: '#0F766E',
    800: '#115E59',
    900: '#134E4A',
  },
  ocean: {
    50: '#ECFEFF',
    100: '#CFFAFE',
    200: '#A5F3FC',
    300: '#67E8F9',
    400: '#22D3EE',
    500: '#06B6D4',
    600: '#0891B2',
    700: '#0E7490',
    800: '#155E75',
    900: '#164E63',
  },
};

const fonts = {
  heading: 'Poppins, system-ui, sans-serif',
  body: 'Inter, system-ui, sans-serif',
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
      color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      fontFamily: 'Inter, system-ui, sans-serif',
      lineHeight: 'tall',
    },
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      scrollBehavior: 'smooth',
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'semibold',
      borderRadius: 'xl',
    },
    variants: {
      solid: (props: any) => ({
        bg: props.colorMode === 'dark' ? 'mint.400' : 'mint.500',
        color: 'white',
        _hover: {
          bg: props.colorMode === 'dark' ? 'mint.300' : 'mint.600',
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        },
        _active: {
          transform: 'translateY(0)',
        },
        transition: 'all 0.2s',
      }),
      ghost: (props: any) => ({
        color: props.colorMode === 'dark' ? 'mint.200' : 'mint.600',
        _hover: {
          bg: props.colorMode === 'dark' ? 'mint.800' : 'mint.50',
          color: props.colorMode === 'dark' ? 'mint.100' : 'mint.700',
        },
      }),
    },
  },
  Card: {
    baseStyle: (props: any) => ({
      container: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        borderRadius: '2xl',
        boxShadow: props.colorMode === 'dark' ? 'dark-lg' : 'lg',
        border: '1px solid',
        borderColor: props.colorMode === 'dark' ? 'gray.700' : 'gray.200',
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'translateY(-4px)',
          boxShadow: props.colorMode === 'dark' ? '2xl' : 'xl',
        },
      },
    }),
  },
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  styles,
  components,
});