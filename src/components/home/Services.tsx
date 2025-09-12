"use client";
import { Box, Flex, Heading, Text, VStack, SimpleGrid, Link, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

type HeadingSizes = "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
const MotionBox = motion(Box);
const MotionLink = motion(Link);

export const Ways = () => {
  const headingSize = useBreakpointValue<HeadingSizes>({ base: "2xl", md: "3xl" }) ?? "2xl";
  const services = [
    {
      title: "Career Design & Scaling",
      description: "Coached high-achieving GenZ professionals to increase visibility, promotions, and achieve 5-8x salary growth.",
      href: "/services/career-design-scaling",
    },
    {
      title: "Program Strategy & Implementation",
      description: "Designed and implemented 5 innovative talent development programs for EdTech businesses and ran 7 workshops to enhance team productivity by 35%.",
      href: "/services/program-strategy",
    },
    {
      title: "Global Expansion Strategy",
      description: "Crafted market-proof strategies for businesses to expand into Nigeria, Ghana, Rwanda, Kenya, the USA, the UK, boosting operational capacity by 35% and revenue by 28%.",
      href: "/services/global-expansion",
    },
    {
      title: "Speaking Engagements",
      description: "Delivered 150+ events with raving reviews, sharing insights on career building, global market expansion, balanced living, and alternative education.",
      href: "/services/speaking-engagements",
    },
  ];

  return (
    <Box
      as="section"
      bg="#ffffff"
      color="#333"
      py={{ base: 20, md: 32 }}
      position="relative"
      overflow="hidden"
    >
      {/* Floating shapes */}
      <Box
        position="absolute"
        top="-50px"
        left="-50px"
        w="200px"
        h="200px"
        bgGradient="radial(circle, #FFB6B9 0%, pink.600 100%)"
        borderRadius="full"
        filter="blur(100px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-80px"
        right="-60px"
        w="250px"
        h="250px"
        bgGradient="radial(circle, #FFD6C0 0%, #FFDAC1 100%)"
        borderRadius="full"
        filter="blur(120px)"
        zIndex={0}
      />

      {/* Top statement */}
      <Flex
        direction="column"
        align="center"
        px={{ base: 6, md: 16 }}
        mb={16}
        textAlign="center"
        zIndex={1}
        position="relative"
      >
        <Heading
          size={headingSize}
          fontWeight="extrabold"
          mb={4}
          lineHeight={1.2}
          maxW="800px"
        >
          Ways I Can Help You
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" maxW="700px">
          I am fuelled by the belief that <Text as="span" color="pink.600">Education</Text> and{" "}
          <Text as="span" color="#FFD6C0">Technology</Text> are true global equalisers. Here’s how I partner with individuals and businesses to create impact.
        </Text>
      </Flex>

      {/* Services Grid */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        gap={{ base: 8, md: 10 }}
        px={{ base: 4, md: 16 }}
        zIndex={1}
        position="relative"
      >
        {services.map((service, index) => (
          <MotionLink
            key={index}
            href={service.href}
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            p={6}
            bg="#FFF0F5"
            borderRadius="2xl"
            boxShadow="xl"
            whileHover={{ y: -10, boxShadow: "2xl", scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <VStack align="flex-start" gap={3}>
              <Heading size="md" color="pink.600">
                {service.title}
              </Heading>
              <Text color="#555">{service.description}</Text>
            </VStack>
          </MotionLink>
        ))}
      </SimpleGrid>

    </Box>
  );
};
