"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export const MyResume = () => {
  return (
    <Box
      as="section"
      pb={{ base: 20, md: 28 }}
      bgGradient="linear(to-br, #FFF0F5, #FFE4E1, #FFDAB9)"
      position="relative"
      overflow="hidden"
    >
      {/* Floating glow orbs */}
      <Box
        position="absolute"
        top="-100px"
        left="-100px"
        w="280px"
        h="280px"
        bgGradient="radial(circle, rgba(255,126,185,0.6), transparent)"
        borderRadius="full"
        filter="blur(100px)"
      />
      <Box
        position="absolute"
        bottom="-120px"
        right="-80px"
        w="300px"
        h="300px"
        bgGradient="radial(circle, rgba(255,214,192,0.7), transparent)"
        borderRadius="full"
        filter="blur(120px)"
      />

      <Container maxW="8xl" centerContent position="relative" zIndex={1}>
        <VStack gap={8} align="center" textAlign="center" w="full">
          {/* Heading with shimmer gradient */}
          <MotionHeading
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
            fontWeight="extrabold"
            bgGradient="linear(to-r, #FF7EB9, #FFD6C0, #FF7EB9)"
            bgClip="text"
            backgroundSize="200% auto"
            animation="gradientShift 6s linear infinite"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            My Resume
          </MotionHeading>

          {/* Description */}
          <MotionText
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            maxW="2xl"
            mx="auto" // centers inside container
            lineHeight="taller"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the full journey of my career, leadership, and impact across{" "}
            <Text as="span" color="#FF7EB9" fontWeight="semibold">
              EdTech
            </Text>
            ,{" "}
            <Text as="span" color="#FFB347" fontWeight="semibold">
              innovation
            </Text>{" "}
            and{" "}
            <Text as="span" color="#FF6F61" fontWeight="semibold">
              global expansion
            </Text>
            . Explore milestones and collaborations that shaped transformative programs.
          </MotionText>

          {/* CTA Button */}
          <Box>
            <Link
              href="https://www.linkedin.com/in/rachaelonoja/"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              <Button
                size="lg"
                px={10}
                py={6}
                fontWeight="bold"
                borderRadius="full"
                bgGradient="linear(to-r, #FF7EB9, #FFB347)"
                color="white"
                boxShadow="lg"
                _hover={{
                  transform: "scale(1.1)",
                  boxShadow: "0 8px 30px rgba(255,126,185,0.6)",
                  bgGradient: "linear(to-r, #FFB347, #FF7EB9)",
                }}
                transition="all 0.35s ease"
              >
                View My Resume on LinkedIn
              </Button>
            </Link>
          </Box>
        </VStack>
      </Container>

      {/* Gradient shimmer keyframes */}
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
