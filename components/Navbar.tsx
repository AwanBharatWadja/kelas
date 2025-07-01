"use client";

import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Text,
  Container,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Moon, 
  Sun
} from 'lucide-react';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Profil', href: '/profil' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Kontak', href: '/kontak' },
];

const NavLink = ({ children, href, isActive }: { children: React.ReactNode; href: string; isActive: boolean }) => {
  const hoverColor = useColorModeValue('mint.500', 'mint.300');
  const activeColor = useColorModeValue('mint.600', 'mint.400');

  return (
    <Box position="relative">
      <Link href={href} passHref>
        <Button
          variant="ghost"
          size="md"
          fontWeight={isActive ? 'bold' : 'medium'}
          color={isActive ? activeColor : 'inherit'}
          _hover={{
            color: hoverColor,
            transform: 'translateY(-1px)',
          }}
          transition="all 0.2s ease"
        >
          {children}
        </Button>
      </Link>
      <AnimatePresence>
        {isActive && (
          <MotionBox
            position="absolute"
            bottom="-2px"
            left="50%"
            width="80%"
            height="2px"
            bg="gradient-to-r"
            bgGradient="linear(to-r, mint.400, ocean.400)"
            borderRadius="full"
            initial={{ scaleX: 0, x: '-50%' }}
            animate={{ scaleX: 1, x: '-50%' }}
            exit={{ scaleX: 0, x: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const bg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname?.startsWith(href) || false;
  };

  return (
    <MotionBox
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={bg}
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor={scrolled ? borderColor : 'transparent'}
      boxShadow={scrolled ? 'lg' : 'none'}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Container maxW="7xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <MotionFlex
            alignItems="center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">
              <Flex alignItems="center" cursor="pointer">
                <Box
                  w={10}
                  h={10}
                  bgGradient="linear(to-r, mint.400, ocean.400)"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mr={3}
                  boxShadow="lg"
                >
                  <Text color="white" fontWeight="bold" fontSize="sm">
                    IA
                  </Text>
                </Box>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  fontFamily="heading"
                  bgGradient="linear(to-r, mint.500, ocean.500)"
                  bgClip="text"
                >
                  Informatika A
                </Text>
              </Flex>
            </Link>
          </MotionFlex>

          {/* Desktop Navigation */}
          <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
            <HStack as="nav" spacing={4}>
              {navigation.map((item) => (
                <NavLink key={item.name} href={item.href} isActive={isActive(item.href)}>
                  {item.name}
                </NavLink>
              ))}
            </HStack>

            {/* Theme Toggle */}
            <IconButton
              size="md"
              variant="ghost"
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              onClick={toggleColorMode}
              _hover={{
                transform: 'rotate(180deg)',
                bg: useColorModeValue('mint.50', 'mint.800'),
              }}
              transition="all 0.3s ease"
            />
          </HStack>

          {/* Mobile menu button */}
          <Flex alignItems="center" display={{ base: 'flex', md: 'none' }}>
            <IconButton
              size="md"
              variant="ghost"
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              onClick={toggleColorMode}
              mr={2}
              _hover={{
                transform: 'rotate(180deg)',
                bg: useColorModeValue('mint.50', 'mint.800'),
              }}
              transition="all 0.3s ease"
            />
            <IconButton
              size="md"
              icon={isOpen ? <X size={20} /> : <Menu size={20} />}
              aria-label="Open Menu"
              onClick={onOpen}
              variant="ghost"
              _hover={{
                bg: useColorModeValue('mint.50', 'mint.800'),
              }}
            />
          </Flex>
        </Flex>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text
              fontSize="lg"
              fontWeight="bold"
              bgGradient="linear(to-r, mint.500, ocean.500)"
              bgClip="text"
            >
              Menu
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    w="full"
                    justifyContent="flex-start"
                    fontWeight={isActive(item.href) ? 'bold' : 'medium'}
                    color={isActive(item.href) ? 'mint.500' : 'inherit'}
                    onClick={onClose}
                    _hover={{
                      bg: useColorModeValue('mint.50', 'mint.800'),
                      transform: 'translateX(4px)',
                    }}
                    transition="all 0.2s ease"
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionBox>
  );
}