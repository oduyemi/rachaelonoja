"use client";
import { Box, Flex, Heading, Text, Button, VStack, HStack, useBreakpointValue, Image as ChakraImage } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const MotionBox = motion(Box);

export const AboutSection = () => {
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl" });
  const [activeIndex, setActiveIndex] = useState(0);

  const focusAreas = [
    {
      title: "Businesses",
      description: "Supported businesses to design impactful EdTech programs, training over half a million talents across professional levels, improving learner outcomes and profitability.",
      link: "/works/businesses",
    },
    {
      title: "Governments",
      description: "Advised governments on alternative education policies, helping massive talent capacity development and economic growth. One key project: 3MTT program.",
      link: "/works/governments",
    },
    {
      title: "Expansion",
      description: "Provide winning strategies to founders for conquering new markets in Africa, North America, and beyond while increasing profitability.",
      link: "/works/expansion",
    },
    {
      title: "#BalanceUnleashed",
      description: "Founded #BalanceUnleashed after overcoming burnout to help professionals and executives live slower, more productive lives.",
      link: "/works/balance-unleashed",
    },
  ];

  return (
    <Box as="section" bg="#fff7fb" color="#333" py={{ base: 20, md: 32 }} position="relative" overflow="hidden">
      {/* Floating shapes for depth */}
      <Box position="absolute" top="-80px" left="-80px" w="200px" h="200px" bgGradient="radial(circle, #FFB6B9 0%, #FF7EB9 100%)" borderRadius="full" filter="blur(120px)" zIndex={0} />
      <Box position="absolute" bottom="-100px" right="-80px" w="250px" h="250px" bgGradient="radial(circle, #FFD6C0 0%, #FFDAC1 100%)" borderRadius="full" filter="blur(140px)" zIndex={0} />

      {/* Intro */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        px={{ base: 6, md: 16 }}
        mb={16}
        gap={{ base: 12, md: 16 }}
        position="relative"
        zIndex={1}
      >
        <ChakraImage
          src="/images/homeabt.png"
          alt="Rachael Onoja"
          boxSize={{ base: "250px", md: "400px" }}
          borderRadius="2xl"
          objectFit="cover"
          mx={{ base: "auto", md: "0" }}
          shadow="2xl"
        />

        <VStack align={{ base: "center", md: "flex-start" }} spacing={6} textAlign={{ base: "center", md: "left" }}>
          <Heading size={headingSize} fontWeight="extrabold" lineHeight={1.2}>
            Hi, I am Rachael
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="700px">
            As a versatile education technology business consultant, I have spent over half a decade designing impactful program strategies and policies, developing the talent capacity of over half a million professionals.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="700px">
            See how I&apos;ve impacted businesses, supported governments, expanded markets, and promoted #BalanceUnleashed:
          </Text>
        </VStack>
      </Flex>

      {/* Custom Parallax Tabs */}
      <VStack spacing={8} px={{ base: 4, md: 16 }} zIndex={1} position="relative">
        {/* Navigation */}
        <HStack spacing={4} justify="center" flexWrap="wrap">
          {focusAreas.map((area, idx) => (
            <Button
              key={idx}
              size="sm"
              variant="solid"
              px={6}
              bgGradient={activeIndex === idx ? "linear(to-r, #FF7EB9, #FFD6C0)" : "gray.200"}
              color={activeIndex === idx ? "white" : "#333"}
              fontWeight="bold"
              borderRadius="full"
              boxShadow={activeIndex === idx ? "xl" : "none"}
              _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
              transition="all 0.3s"
              onClick={() => setActiveIndex(idx)}
            >
              {area.title}
            </Button>
          ))}
        </HStack>

        {/* Active Card */}
        <MotionBox
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          bg="white"
          borderRadius="2xl"
          p={{ base: 6, md: 10 }}
          boxShadow="2xl"
          maxW="800px"
          mx="auto"
        >
          <VStack spacing={6} align="flex-start">
            <Heading size="lg" color="#FF7EB9">{focusAreas[activeIndex].title}</Heading>
            <Text color="#555" fontSize={{ base: "md", md: "lg" }}>
              {focusAreas[activeIndex].description}
            </Text>
            <Button
              size="md"
              py={4}
              px={6}
              borderRadius="full"
              bgGradient="linear(to-r, #FF7EB9, #FFD6C0)"
              color="white"
              fontWeight="bold"
              rightIcon={<FaArrowRight />}
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "2xl",
                bgGradient: "linear(to-r, #FFD6C0, #FFDAC1)",
              }}
              transition="all 0.3s"
              as="a"
              href={focusAreas[activeIndex].link} 
            >
              Learn More
            </Button>
          </VStack>
        </MotionBox>
      </VStack>
    </Box>
  );
};
