"use client";
import { Box, Flex, Heading, Text, Button, VStack, useBreakpointValue, HStack, Link } from "@chakra-ui/react";
import type { SystemStyleObject } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const MotionBox = motion(Box);
type HeadingSizes = "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";

export const Hero = () => {
  const headingSize = useBreakpointValue<HeadingSizes>({ base: "2xl", md: "3xl" }) ?? "2xl";
  const containerDirection = useBreakpointValue({ base: "column-reverse", md: "row" });

  return (
    <Box as="section" bg="#ffffff" color="#333" minH="50vh" overflow="hidden">
      <Flex
        className="container"
        w="100%"
        px={{ base: 6, md: 16 }}
        py={{ base: 12, md: 24 }}
        direction={containerDirection}
        justify="space-between"
        align="center"
        gap={{ base: 12, md: 8 }}
      >
        {/* Left Text */}
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          maxW={{ base: "100%", md: "50%" }}
        >
          <VStack align="flex-start" gap={4}>
            <Text fontSize={{ base: "sm", md: "md" }} letterSpacing="wider" color="gray.500">
              Rachael Onoja – Education Technology Consultant
            </Text>

            <Heading size={headingSize} fontWeight="extrabold" lineHeight="1.2">
              Designing{" "}
              <Text
                as="span"
                bgGradient="linear(to-r, #FF7EB9, #FFB6B9)"
                bgClip="text"
                textShadow="0px 2px 5px rgba(255, 182, 185, 0.6)"
              >
                Impactful
              </Text>{" "}
              Programs
            </Heading>

            <Heading size={headingSize} fontWeight="extrabold" lineHeight="1.2">
              Driving{" "}
              <Text
                as="span"
                bgGradient="linear(to-r, #FFDAC1, #FFD6C0)"
                bgClip="text"
                textShadow="0px 2px 5px rgba(255, 218, 193, 0.6)"
              >
                EdTech
              </Text>{" "}
              Innovation
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" mt={2}>
              With over 5 years of experience, I help organizations create strategies, programs, and policies that scale globally and leave a lasting impact in education technology.
            </Text>

            <Link href="" _hover={{ textDecoration: "none" }}>
              <Button
                mt={6}
                size="lg"
                py={6}
                px={8}
                borderRadius="full"
                bgGradient="linear(to-r, #FF7EB9, #FFB6B9)"
                color="white"
                fontWeight="bold"
                _hover={{
                  transform: "scale(1.05)",
                  bgGradient: "linear(to-r, #FFB6B9, #FFDAC1)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s"
              >
                <HStack gap={2}>
                  <Text>Collaborate With Me</Text>
                  <FaArrowRight />
                </HStack>
              </Button>
            </Link>
          </VStack>
        </MotionBox>

        {/* Right Image */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          w={{ base: "95%", md: "50%" }}
          maxW="600px"
          position="relative"
        >
          {/* Floating Gradient Shapes */}
          <Box
            position="absolute"
            top="-40px"
            left="-40px"
            w="150px"
            h="150px"
            bgGradient="radial(circle, #FFB6B9 0%, #FF7EB9 100%)"
            borderRadius="full"
            filter="blur(70px)"
            zIndex={0}
          />
          <Box
            position="absolute"
            bottom="-50px"
            right="-60px"
            w="200px"
            h="200px"
            bgGradient="radial(circle, #FFD6C0 0%, #FFDAC1 100%)"
            borderRadius="full"
            filter="blur(90px)"
            zIndex={0}
          />

          <MotionBox whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }}>
            <Image
              src="/images/homehero.png"
              alt="Rachael Onoja"
              width={600}
              height={700}
              className="rounded-3xl shadow-2xl relative z-10"
              style={{ width: "100%", height: "auto" }}
            />
          </MotionBox>
        </MotionBox>
      </Flex>
    </Box>
  );
};
