"use client";

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Grid,
  GridItem,
  Card,
  CardBody,
  Icon,
  useColorModeValue,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiUsers, FiCamera, FiPhone, FiStar } from 'react-icons/fi';
import TypewriterText from '../components/TypewriterText';
import ThreeBackground from '../components/ThreeBackground';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const Homepage: React.FC = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, white, mint.50, ocean.50)',
    'linear(to-br, gray.900, mint.900, ocean.900)'
  );

  const features = [
    {
      icon: FiUsers,
      title: 'Profil Mahasiswa',
      description: 'Kenali lebih dekat 35 mahasiswa Informatika A dengan profil lengkap dan foto.',
      href: '/profil',
      color: 'mint',
    },
    {
      icon: FiCamera,
      title: 'Galeri Kegiatan',
      description: 'Dokumentasi foto dan video kegiatan kelas dan organisasi.',
      href: '/galeri',
      color: 'ocean',
    },
    {
      icon: FiPhone,
      title: 'Hubungi Kami',
      description: 'Terhubung dengan kelas melalui form kontak dan media sosial.',
      href: '/kontak',
      color: 'mint',
    }
  ];

  const stats = [
    { number: '35', label: 'Mahasiswa', icon: FiUsers },
    { number: '100+', label: 'Kegiatan', icon: FiCamera },
    { number: '4', label: 'Semester', icon: FiStar },
    { number: '1', label: 'Kelas Terbaik', icon: FiStar }
  ];

  const typewriterTexts = [
    'Kelas Terdepan dalam Teknologi',
    'Inovasi dan Kolaborasi',
    'Membangun Masa Depan Digital',
    'Bersama Informatika A'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        position="relative"
        minH="100vh"
        bgGradient={bgGradient}
        overflow="hidden"
      >
        <ThreeBackground />
        
        <Container maxW="7xl" h="100vh" display="flex" alignItems="center">
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            textAlign="center"
            w="full"
          >
            <VStack spacing={8}>
              <MotionBox variants={itemVariants}>
                <Heading
                  as="h1"
                  size="4xl"
                  fontFamily="heading"
                  bgGradient="linear(to-r, mint.500, ocean.500)"
                  bgClip="text"
                  mb={6}
                  lineHeight="shorter"
                >
                  Informatika A
                </Heading>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <Box minH="20" display="flex" alignItems="center" justifyContent="center">
                  <Text
                    fontSize={{ base: 'xl', md: '2xl' }}
                    color={useColorModeValue('gray.600', 'gray.300')}
                    fontWeight="medium"
                  >
                    <TypewriterText
                      texts={typewriterTexts}
                      speed={80}
                      deleteSpeed={40}
                      pauseTime={2000}
                    />
                  </Text>
                </Box>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color={useColorModeValue('gray.600', 'gray.400')}
                  maxW="2xl"
                  mx="auto"
                  mb={8}
                  lineHeight="tall"
                >
                  Bersama membangun masa depan digital yang lebih baik dengan 35 mahasiswa yang berdedikasi.
                </Text>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <HStack spacing={4} justify="center" flexWrap="wrap">
                  <Link href="/profil">
                    <Button
                      size="lg"
                      bgGradient="linear(to-r, mint.400, ocean.400)"
                      color="white"
                      _hover={{
                        bgGradient: 'linear(to-r, mint.500, ocean.500)',
                        transform: 'translateY(-2px)',
                        boxShadow: 'xl',
                      }}
                      _active={{
                        transform: 'translateY(0)',
                      }}
                      transition="all 0.2s"
                      px={8}
                      py={6}
                      fontSize="lg"
                      borderRadius="xl"
                    >
                      Kenali Kami
                    </Button>
                  </Link>
                  <Link href="/galeri">
                    <Button
                      size="lg"
                      variant="outline"
                      borderColor="mint.400"
                      color="mint.500"
                      _hover={{
                        bg: 'mint.50',
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      _active={{
                        transform: 'translateY(0)',
                      }}
                      transition="all 0.2s"
                      px={8}
                      py={6}
                      fontSize="lg"
                      borderRadius="xl"
                    >
                      Lihat Galeri
                    </Button>
                  </Link>
                </HStack>
              </MotionBox>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={20} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Heading
              as="h2"
              size="xl"
              textAlign="center"
              bgGradient="linear(to-r, mint.500, ocean.500)"
              bgClip="text"
            >
              Statistik Kelas
            </Heading>
            
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
              {stats.map((stat, index) => (
                <MotionCard
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  textAlign="center"
                  bg={useColorModeValue('white', 'gray.700')}
                  shadow="lg"
                  borderRadius="2xl"
                  _hover={{
                    transform: 'translateY(-4px)',
                    shadow: 'xl',
                  }}
                  transition="all 0.3s ease"
                >
                  <CardBody>
                    <VStack spacing={4}>
                      <Icon
                        as={stat.icon}
                        w={8}
                        h={8}
                        color="mint.500"
                      />
                      <Heading
                        as="h3"
                        size="2xl"
                        bgGradient="linear(to-r, mint.500, ocean.500)"
                        bgClip="text"
                      >
                        {stat.number}
                      </Heading>
                      <Text
                        color={useColorModeValue('gray.600', 'gray.400')}
                        fontWeight="medium"
                      >
                        {stat.label}
                      </Text>
                    </VStack>
                  </CardBody>
                </MotionCard>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="7xl">
          <VStack spacing={16}>
            <VStack spacing={4} textAlign="center">
              <Heading
                as="h2"
                size="2xl"
                fontFamily="heading"
                bgGradient="linear(to-r, mint.500, ocean.500)"
                bgClip="text"
              >
                Jelajahi Kelas Kami
              </Heading>
              <Text
                fontSize="xl"
                color={useColorModeValue('gray.600', 'gray.300')}
                maxW="2xl"
              >
                Temukan berbagai informasi menarik tentang kelas Informatika A
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
              {features.map((feature, index) => (
                <Link key={index} href={feature.href}>
                  <MotionCard
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    bg={useColorModeValue('white', 'gray.700')}
                    shadow="lg"
                    borderRadius="2xl"
                    cursor="pointer"
                    h="full"
                    _hover={{
                      shadow: '2xl',
                    }}
                    transition="all 0.3s ease"
                  >
                    <CardBody>
                      <VStack spacing={6} align="start" h="full">
                        <Icon
                          as={feature.icon}
                          w={12}
                          h={12}
                          color={`${feature.color}.500`}
                        />
                        <VStack spacing={3} align="start" flex={1}>
                          <Heading
                            as="h3"
                            size="lg"
                            color={useColorModeValue('gray.800', 'white')}
                          >
                            {feature.title}
                          </Heading>
                          <Text
                            color={useColorModeValue('gray.600', 'gray.300')}
                            lineHeight="tall"
                          >
                            {feature.description}
                          </Text>
                        </VStack>
                        <HStack
                          color={`${feature.color}.500`}
                          fontWeight="medium"
                          _groupHover={{ transform: 'translateX(4px)' }}
                          transition="transform 0.2s"
                        >
                          <Text>Selengkapnya</Text>
                          <Text>→</Text>
                        </HStack>
                      </VStack>
                    </CardBody>
                  </MotionCard>
                </Link>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        py={20}
        bgGradient="linear(to-r, mint.500, ocean.500)"
        color="white"
      >
        <Container maxW="4xl" textAlign="center">
          <VStack spacing={8}>
            <Heading
              as="h2"
              size="2xl"
              fontFamily="heading"
            >
              Bergabung dengan Komunitas Kami
            </Heading>
            <Text
              fontSize="xl"
              opacity={0.9}
              maxW="2xl"
            >
              Terhubung dengan mahasiswa Informatika A dan ikuti perkembangan terbaru kelas
            </Text>
            <Link href="/kontak">
              <Button
                size="lg"
                bg="white"
                color="mint.600"
                _hover={{
                  bg: 'gray.100',
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                }}
                _active={{
                  transform: 'translateY(0)',
                }}
                transition="all 0.2s"
                px={8}
                py={6}
                fontSize="lg"
                borderRadius="xl"
                fontWeight="bold"
              >
                Hubungi Kami
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default Homepage;