"use client";
import { Box, Flex, Heading, Text, Button, VStack, useBreakpointValue, HStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const MotionBox = motion(Box);
type HeadingSizes = "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";

export const Hero = () => {
  const headingSize = useBreakpointValue<HeadingSizes>({ base: "2xl", md: "4xl", lg: "5xl" }) ?? "2xl";
  const containerDirection = useBreakpointValue({ base: "column-reverse", md: "row" });

  return (
    <Box as="section" bg="linear-gradient(135deg, #ffffff 0%, #fafafa 100%)" color="gray.800" minH="70vh" overflow="hidden">
      <Flex
        w="100%"
        maxW="1280px"
        mx="auto"
        px={{ base: 6, md: 12, lg: 16 }}
        py={{ base: 12, md: 20, lg: 28 }}
        direction={containerDirection}
        justify="space-between"
        align="center"
        gap={{ base: 12, md: 10 }}
      >
        {/* Left Content */}
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          maxW={{ base: "100%", md: "50%" }}
        >
          <VStack align="flex-start" gap={5}>
            <Text fontSize={{ base: "sm", md: "md" }} letterSpacing="wider" color="gray.500">
              Rachael Onoja – Education Technology Consultant
            </Text>

            <Heading size={headingSize} fontWeight="black" lineHeight="1.2">
              Designing {" "}
              <Text
                as="span"
                bgGradient="linear(to-r, #FF006E, #FF7EB9)"
                bgClip="text"
                color="transparent"
                fontWeight="extrabold"
                textShadow="0px 2px 4px rgba(255,0,0,0.25)"
              >
                Impactful
              </Text>{" "}
              Programs
            </Heading>

            <Heading size={headingSize} fontWeight="black" lineHeight="1.2">
              Driving {" "}
              <Text
                as="span"
                bgGradient="linear(to-r, #FF8C00, #FFB800)"
                bgClip="text"
                color="transparent"
                fontWeight="extrabold"
                textShadow="0px 2px 4px rgba(222, 0, 93,0.25)"
              >
                EdTech
              </Text>{" "}
              Innovation
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" mt={2} lineHeight={1.7} maxW="600px">
              With over 5 years of experience, I help organizations create strategies, programs, and policies that scale globally and leave a lasting impact in education technology.
            </Text>

            <Link href="" textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Button
                mt={6}
                size="lg"
                py={6}
                px={8}
                borderRadius="full"
                bgGradient="linear(to-r, #FF7EB9, #FFB6B9)"
                color="white"
                fontWeight="bold"
                boxShadow="md"
                _hover={{
                  transform: "translateY(-4px) scale(1.05)",
                  bgGradient: "linear(to-r, #FFB6B9, #FFD6C0)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s ease"
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
          transition={{ duration: 1 }}
          w={{ base: "95%", md: "50%" }}
          maxW="600px"
          position="relative"
        >
          {/* Floating Gradient Shapes */}
          <Box
            position="absolute"
            top="-50px"
            left="-50px"
            w="180px"
            h="180px"
            bgGradient="radial(circle, #FFB6B9 0%, #FF7EB9 100%)"
            borderRadius="full"
            filter="blur(90px)"
            zIndex={0}
            opacity={0.5}
          />
          <Box
            position="absolute"
            bottom="-60px"
            right="-70px"
            w="220px"
            h="220px"
            bgGradient="radial(circle, #FFD6C0 0%, #FFDAC1 100%)"
            borderRadius="full"
            filter="blur(100px)"
            zIndex={0}
            opacity={0.5}
          />

          <MotionBox whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }}>
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
