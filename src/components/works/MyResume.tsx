"use client";
import { Box, Container, Heading, Text, VStack, Button, Link, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
// import { FaLinkedin } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export const MyResume = () => {
  return (
    <Box
      as="section"
      py={{ base: 16, md: 24 }}
      bgGradient="linear(to-br, gray.50, white, pink.50)"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative gradient circles */}
      <Box
        position="absolute"
        top="-50px"
        right="-50px"
        w="200px"
        h="200px"
        bgGradient="radial(pink.200, transparent)"
        borderRadius="full"
        filter="blur(80px)"
        opacity={0.4}
      />
      <Box
        position="absolute"
        bottom="-80px"
        left="-80px"
        w="250px"
        h="250px"
        bgGradient="radial(pink.100, transparent)"
        borderRadius="full"
        filter="blur(100px)"
        opacity={0.5}
      />

      <Container maxW="5xl" textAlign="center" position="relative" zIndex={1}>
        <VStack gap={8}>
          <MotionHeading
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
            fontWeight="extrabold"
            bgGradient="linear(to-r, #FF7EB9, #FFD6C0, #FF7EB9)"
            bgClip="text"
            backgroundSize="200% auto"
            animation="gradientShift 4s linear infinite"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            My Resume
          </MotionHeading>

          <MotionText
            fontSize={{ base: "md", md: "lg" }}
            color="gray.600"
            maxW="2xl"
            lineHeight="taller"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the full journey of my career, leadership, and impact across
            EdTech, innovation, and global expansion strategies. Explore my
            professional milestones and collaborations that shaped transformative
            programs.
          </MotionText>

          <Link
            href="https://www.linkedin.com/in/rachaelonoja/"
            _hover={{ textDecoration: "none" }}
          >
            <Button
              size="lg"
              px={8}
              py={6}
            //   leftIcon={<FaLinkedin />}
              fontWeight="bold"
              borderRadius="full"
              bg="rgba(255, 126, 185, 0.9)"
              color="white"
              backdropFilter="blur(6px)"
              boxShadow="lg"
              _hover={{
                transform: "scale(1.08)",
                boxShadow: "xl",
                bg: "rgba(255, 126, 185, 1)",
              }}
              transition="all 0.3s ease"
            >
              View My Resume on LinkedIn
            </Button>
          </Link>
        </VStack>
      </Container>

      {/* Keyframes for shimmer effect */}
      <style jsx global>{`
        @keyframes gradientShift {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </Box>
  );
};
