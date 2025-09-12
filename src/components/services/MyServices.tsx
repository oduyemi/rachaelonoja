"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image as ChakraImage,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface ServiceItemProps {
  subheading: string;
  heading: string;
  media: string;
  text: string[];
  reverse?: boolean;
}

const ServiceItem = ({ subheading, heading, media, text, reverse }: ServiceItemProps) => (
  <SimpleGrid
    columns={{ base: 1, md: 2 }}
    gap={10}
    alignItems="center"
    mb={20}
    direction={reverse ? "row-reverse" : "row"}
  >
    {/* Text */}
    <MotionBox
      initial={{ x: reverse ? 50 : -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Text fontSize="sm" textTransform="uppercase" fontWeight="bold" color="pink.500" mb={2}>
        {subheading}
      </Text>
      <Heading as="h3" fontSize={{ base: "2xl", md: "3xl" }} mb={4} color="pink.600">
        {heading}
      </Heading>
      {text.map((t, idx) => (
        <Text key={idx} mb={4} color="gray.700" fontSize={{ base: "md", md: "lg" }}>
          {t}
        </Text>
      ))}
    </MotionBox>

    {/* Media */}
    <MotionBox
      initial={{ x: reverse ? -50 : 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <ChakraImage
        src={media}
        alt={heading}
        borderRadius="2xl"
        shadow="xl"
        w="100%"
        h="auto"
      />
    </MotionBox>
  </SimpleGrid>
);

export const MyServices = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="6xl">
        {/* Intro */}
        <VStack gap={4} mb={16} textAlign="center">
          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, #FF7EB9, #FFD6C0)"
            bgClip="text"
          >
            Ways I Can Help You...
          </Heading>
          <Text maxW="800px" fontSize={{ base: "md", md: "lg" }} color="gray.700">
            Do you need someone who will approach your project or career with empathy and candour,
            delivering strategies that truly work? Here’s how I partner with professionals and businesses
            to create lasting impact.
          </Text>
        </VStack>

        {/* Service Items */}
        <ServiceItem
          subheading="High-Achieving GenZ Professionals"
          heading="Career Design & Scaling"
          media="/images/achieve.png"
          text={[
            "I’ve coached ambitious GenZ and late-millennial professionals to gain visibility, secure promotions, and achieve up to 5–8x salary growth.",
          ]}
        />

        <ServiceItem
          subheading="High-Impact Businesses"
          heading="Program Strategy & Implementation"
          media="/images/programs.png"
          text={[
            "Designed and implemented 5 innovative talent development programs for EdTech businesses.",
            "Facilitated 7 workshops that transformed program delivery teams into high-performing units, boosting productivity by 35%.",
            "Consulted with business owners to foster a culture of program innovation and excellence.",
          ]}
          reverse
        />

        <ServiceItem
          subheading="Ambitious Business Owners"
          heading="Global Expansion Strategy"
          media="/images/expand.png"
          text={[
            "Supported businesses in crafting market-proof strategies to expand into new regions including Nigeria, Ghana, Rwanda, Kenya, the USA, and the UK.",
            "Increased operational capacity by 35% and revenue growth by 28% through structured expansion roadmaps.",
          ]}
        />

        <ServiceItem
          subheading="Community"
          heading="Speaking Engagements"
          media="/images/rach1.png"
          text={[
            "Delivered over 150 events with outstanding feedback, sharing insights on career growth, global market expansion, balanced living, and alternative education.",
          ]}
          reverse
        />
      </Container>
    </Box>
  );
};
