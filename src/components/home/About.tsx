"use client";
import {
  Box,
  Grid,
  Stack,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  useBreakpointValue,
  Image as ChakraImage,
  Container,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const MotionBox = motion(Box);



type HeadingSizes = "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";




export const AboutSection = () => {
  const headingSize = useBreakpointValue<HeadingSizes>({ base: "2xl", md: "3xl" }) ?? "2xl";
  const [activeIndex, setActiveIndex] = useState(0);

  const focusAreas = [
    {
      title: "Businesses",
      description:
        "Supported businesses to design impactful EdTech programs, training over half a million talents across professional levels, improving learner outcomes and profitability.",
      link: "/works/businesses",
    },
    {
      title: "Governments",
      description:
        "Advised governments on alternative education policies, helping massive talent capacity development and economic growth. One key project: 3MTT program.",
      link: "/works/governments",
    },
    {
      title: "Expansion",
      description:
        "Provide winning strategies to founders for conquering new markets in Africa, North America, and beyond while increasing profitability.",
      link: "/works/expansion",
    },
    {
      title: "#BalanceUnleashed",
      description:
        "Founded #BalanceUnleashed after overcoming burnout to help professionals and executives live slower, more productive lives.",
      link: "/works/balance-unleashed",
    },
  ];

  return (
    <Box
      as="section"
      bg="#fff7fb"
      color="#333"
      py={{ base: 16, md: 28 }}
      position="relative"
      overflow="hidden"
      w="100%"
      className="mx-auto"
    >
      {/* Symmetric floating shapes (less distracting) */}
      <Box
        position="absolute"
        top={{ base: -60, md: -90 }}
        left={{ base: -40, md: -100 }}
        w={{ base: "140px", md: "220px" }}
        h={{ base: "140px", md: "220px" }}
        bgGradient="radial(circle, #FFB6B9 0%, #FF7EB9 100%)"
        borderRadius="full"
        filter="blur(80px)"
        opacity={0.85}
        zIndex={0}
      />

      <Box
        position="absolute"
        bottom={{ base: -60, md: -100 }}
        right={{ base: -40, md: -100 }}
        w={{ base: "160px", md: "240px" }}
        h={{ base: "160px", md: "240px" }}
        bgGradient="radial(circle, #FFD6C0 0%, #FFDAC1 100%)"
        borderRadius="full"
        filter="blur(90px)"
        opacity={0.85}
        zIndex={0}
      />

      <Container maxW="100%" px={{ base: 6, md: 12 }} position="relative" zIndex={1}>
        {/* Constrain width so the section doesn't feel too wide on large displays */}
        <Box maxW={{ base: "100%", md: "1100px" }} mx="auto">
          {/* Top Grid: image + intro */}
          <Grid
            templateColumns={{ base: "1fr", md: "420px 1fr" }}
            alignItems="center"
            gap={{ base: 8, md: 12 }}
            mb={{ base: 10, md: 16 }}
          >
            {/* Image column - centered inside its column */}
            <Box display="flex" justifyContent="center">
              <MotionBox
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="lg"
                w={{ base: "250px", md: "420px" }}
                h={{ base: "250px", md: "420px" }}
                borderWidth={2}
                borderColor="transparent"
                _hover={{ borderColor: "rgba(255,126,185,0.14)" }}
              >
                <ChakraImage
                  src="/images/homeabt.png"
                  alt="Rachael Onoja"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </MotionBox>
            </Box>

            {/* Text column */}
            <Stack gap={5} align={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }}>
              <Heading size={headingSize} fontWeight="extrabold" lineHeight={1.1}>
                <Text as="span" bgGradient="linear(to-r, #FF7EB9, #FFD6C0)" bgClip="text">
                  Hi, I am Rachael
                </Text>
              </Heading>

              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW={{ md: "680px" }}>
                As a versatile education technology business consultant, I have spent over half a decade designing impactful program strategies and policies — developing the talent capacity of over half a million professionals.
              </Text>

              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW={{ md: "680px" }}>
                See how I&apos;ve impacted businesses, supported governments, expanded markets, and promoted #BalanceUnleashed.
              </Text>

              <HStack gap={4} pt={2}>
                <Link href={focusAreas[0].link} _hover={{ textDecoration: "none" }}>
                  <Button
                    size="md"
                    py={4}
                    px={6}
                    borderRadius="full"
                    bgGradient="linear(to-r, #FF7EB9, #FFD6C0)"
                    color="white"
                    fontWeight="bold"
                    _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                  >
                    <HStack gap={2}>
                      <Text>Explore Works</Text>
                      <FaArrowRight />
                    </HStack>
                  </Button>
                </Link>

                <Button size="md" variant="ghost" px={6} borderRadius="full">
                  Contact
                </Button>
              </HStack>
            </Stack>
          </Grid>

          {/* Tabs / Focus areas - improved visual styling */}
          <VStack gap={8} align="stretch">
            <Box overflowX={{ base: "auto", md: "visible" }} css={{ "&::-webkit-scrollbar": { height: 6 } }}>
              <HStack
                gap={4}
                justify={{ base: "flex-start", md: "center" }}
                flexWrap="nowrap"
                pb={2}
              >
                {focusAreas.map((area, idx) => (
                  <Button
                    key={idx}
                    size="sm"
                    variant={activeIndex === idx ? "solid" : "ghost"}
                    px={6}
                    bg={activeIndex === idx ? undefined : "transparent"}
                    bgGradient={
                      activeIndex === idx
                        ? "linear(to-r, #FF7EB9, #FFD6C0)"
                        : undefined
                    }
                    color={activeIndex === idx ? "white" : "#333"}
                    fontWeight={activeIndex === idx ? "bold" : "semibold"}
                    borderRadius="full"
                    boxShadow={activeIndex === idx ? "md" : "none"}
                    _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
                    transition="all 0.25s"
                    onClick={() => setActiveIndex(idx)}
                    minW="140px"
                    flexShrink={0}
                  >
                    {area.title}
                  </Button>
                ))}
              </HStack>
            </Box>

            {/* Active Card */}
            <MotionBox
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              bg="white"
              borderRadius="2xl"
              p={{ base: 5, md: 8 }}
              boxShadow="xl"
              borderWidth={1}
              borderColor="rgba(0,0,0,0.04)"
              maxW={{ base: "100%", md: "900px" }}
              mx="auto"
            >
              <VStack gap={4} align="flex-start">
                <Heading size="md" color="#FF7EB9">
                  {focusAreas[activeIndex].title}
                </Heading>
                <Text color="#555" fontSize={{ base: "md", md: "lg" }}>
                  {focusAreas[activeIndex].description}
                </Text>
                <Link href={focusAreas[activeIndex].link} _hover={{ textDecoration: "none" }}>
                  <Button
                  size="md"
                  py={3}
                  px={5}
                  borderRadius="full"
                  bgGradient="linear(to-r, #FF7EB9, #FFD6C0)"
                  color="white"
                  fontWeight="bold"
                  _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                  transition="all 0.25s"
                  as="a"
                >
                  <HStack gap={2}>
                      <Text>Learn More</Text>
                      <FaArrowRight />
                  </HStack>
                </Button>
                </Link>
                <Link href={focusAreas[activeIndex].link} _hover={{ textDecoration: "none" }}>
                  <Button
                    size="md"
                    py={3}
                    px={5}
                    borderRadius="full"
                    bgGradient="linear(to-r, #FF7EB9, #FFD6C0)"
                    color="white"
                    fontWeight="bold"
                    _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                    transition="all 0.25s"
                    as="a"
                  >
                    <HStack gap={2}>
                        <Text>Learn More</Text>
                        <FaArrowRight />
                    </HStack>
                  </Button>
                </Link>
              </VStack>
            </MotionBox>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};