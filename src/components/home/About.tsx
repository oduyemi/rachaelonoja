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

type HeadingSizes =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "xs"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl";

export const AboutSection = () => {
  const headingSize =
    useBreakpointValue<HeadingSizes>({ base: "2xl", md: "3xl" }) ?? "2xl";
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
    >
      {/* Background gradient blobs */}
      <Box
        position="absolute"
        top={{ base: -60, md: -90 }}
        left={{ base: -40, md: -100 }}
        w={{ base: "140px", md: "220px" }}
        h={{ base: "140px", md: "220px" }}
        bgGradient="radial(circle, #FFB6B9 0%, pink.600 100%)"
        borderRadius="full"
        filter="blur(80px)"
        opacity={0.6}
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
        opacity={0.6}
      />

      <Container maxW="7xl" px={{ base: 6, md: 12 }} position="relative" zIndex={1}>
        <Box maxW="1100px" mx="auto">
          {/* Top Grid */}
          <Grid
            templateColumns={{ base: "1fr", md: "420px 1fr" }}
            alignItems="center"
            gap={{ base: 10, md: 14 }}
            mb={{ base: 12, md: 20 }}
          >
            {/* Image */}
            <Box display="flex" justifyContent="center">
              <MotionBox
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35 }}
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                w={{ base: "250px", md: "420px" }}
                h={{ base: "250px", md: "420px" }}
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

            {/* Text */}
            <Stack
              gap={6}
              align={{ base: "center", md: "flex-start" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Heading size={headingSize} fontWeight="extrabold" lineHeight={1.1}>
                <Text
                  as="span"
                  bgGradient="linear(to-r, pink.600, #FFD6C0)"
                  bgClip="text"
                >
                  Hi, I am Rachael
                </Text>
              </Heading>

              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="680px">
                As a versatile education technology business consultant, I have
                spent over half a decade designing impactful program strategies
                and policies — developing the talent capacity of over half a
                million professionals.
              </Text>

              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="680px">
                See how I&apos;ve impacted businesses, supported governments,
                expanded markets, and promoted #BalanceUnleashed.
              </Text>

              <HStack gap={4} pt={2}>
                <Link
                  href={focusAreas[0].link}
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    size="lg"
                    borderRadius="full"
                    bgGradient="linear(to-r, pink.600, #FFD6C0)"
                    color="white"
                    fontWeight="bold"
                    px={7}
                    py={6}
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "xl",
                    }}
                  >
                    <HStack gap={2}>
                      <Text className="mt-3">Explore Works</Text>
                      <FaArrowRight />
                    </HStack>
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  borderRadius="full"
                  px={7}
                  py={6}
                  borderColor="pink.600"
                  color="pink.600"
                  _hover={{
                    bg: "rgba(255,126,185,0.08)",
                    transform: "scale(1.03)",
                  }}
                >
                  Contact
                </Button>
              </HStack>
            </Stack>
          </Grid>

          {/* Focus Areas */}
          <VStack gap={10} align="stretch">
            <Box
              overflowX={{ base: "auto", md: "visible" }}
              css={{ "&::-webkit-scrollbar": { height: 6 } }}
            >
              <HStack gap={4} justify={{ base: "flex-start", md: "center" }} pb={2}>
                {focusAreas.map((area, idx) => (
                  <Button
                    key={idx}
                    size="sm"
                    variant="ghost"
                    px={6}
                    py={4}
                    borderRadius="full"
                    bgGradient={
                      activeIndex === idx
                        ? "linear(to-r, pink.600, #FFD6C0)"
                        : undefined
                    }
                    color={activeIndex === idx ? "white" : "#333"}
                    fontWeight={activeIndex === idx ? "bold" : "semibold"}
                    boxShadow={activeIndex === idx ? "md" : "none"}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                    transition="all 0.3s"
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
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45 }}
              bg="white"
              borderRadius="2xl"
              p={{ base: 6, md: 10 }}
              boxShadow="2xl"
              borderWidth={1}
              borderColor="rgba(0,0,0,0.06)"
              maxW="900px"
              mx="auto"
            >
              <VStack gap={5} align="flex-start">
                <Heading size="md" color="pink.600">
                  {focusAreas[activeIndex].title}
                </Heading>
                <Text color="gray.700" fontSize={{ base: "md", md: "lg" }}>
                  {focusAreas[activeIndex].description}
                </Text>
                <Link
                  href={focusAreas[activeIndex].link}
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    size="md"
                    borderRadius="full"
                    bgGradient="linear(to-r, pink.600, #FFD6C0)"
                    color="white"
                    fontWeight="bold"
                    px={6}
                    py={4}
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "lg",
                    }}
                  >
                    <HStack gap={2}>
                      <Text className="mt-3">Learn More</Text>
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
