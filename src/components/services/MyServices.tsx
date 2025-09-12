"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaUserTie, FaProjectDiagram, FaGlobe, FaMicrophone } from "react-icons/fa";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const services = [
  {
    subheading: "High Achieving GenZ Professionals",
    heading: "Career Design & Scaling",
    icon: FaUserTie,
    text: "I’ve coached high-achieving GenZ and late-millennial professionals to gain visibility, earn well-deserved promotions, and achieve up to 5–8x salary growth in their careers.",
  },
  {
    subheading: "High Impact Businesses",
    heading: "Program Strategy & Implementation",
    icon: FaProjectDiagram,
    text: "I designed and implemented five innovative talent development programs for EdTech businesses, ran seven workshops to transform delivery teams into high-performing units with a 35% productivity boost, and consulted with leaders on building a strong culture of innovation.",
  },
  {
    subheading: "Ambitious Business Owners",
    heading: "Global Expansion Strategy",
    icon: FaGlobe,
    text: "I’ve helped businesses craft market-proof strategies for expansion into markets such as Nigeria, Ghana, Rwanda, Kenya, the USA, and the UK, increasing operational capacity by 35% and driving 28% revenue growth.",
  },
  {
    subheading: "Community",
    heading: "Speaking Engagements",
    icon: FaMicrophone,
    text: "I’ve spoken at over 150 events with raving reviews, delivering insights on strategic career growth, global market expansion, balanced living, and the role of alternative education in driving impact for individuals and economies.",
  },
];

export const MyServices = () => {
  return (
    <Box as="section" pb={{ base: 16, md: 24 }} bgGradient="linear(to-br, white, pink.50)">
      {/* Wrapper that prevents whitespace */}
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }}>
        {/* Intro */}
        <VStack gap={6} mb={16} textAlign="center">
          <MotionHeading
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, #FF7EB9, #FFD6C0)"
            bgClip="text"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ways I Can Help You…
          </MotionHeading>
          <MotionText
            fontSize={{ base: "sm", md: "md" }}
            color="gray.600"
            maxW="2xl"
            mx="auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From strategic career growth to scaling businesses globally — here’s how I bring impact.
          </MotionText>
        </VStack>

        {/* Services */}
        <VStack gap={14}>
          {services.map((service, idx) => (
            <MotionFlex
                key={idx}
                direction={{ base: "column", md: idx % 2 === 1 ? "row-reverse" : "row" }}
                align="center"
                justify="space-between"
                w="100%"
                gap={10}
                p={8}
                borderRadius="2xl"
                bg="white"
                shadow="lg"
                _hover={{
                    transform: "translateY(-6px)",
                    shadow: "xl",
                }}
                // animate={{ scale: 1.2, x: 100 }}
                transition={{
                    scale: { type: "spring", damping: 10, stiffness: 100 },
                    x: { duration: 0.5, ease: "easeInOut" }
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
              {/* Icon */}
              <Flex
                flexShrink={0}
                w={20}
                h={20}
                borderRadius="full"
                bgGradient="linear(to-br, #FF7EB9, #FFD6C0)"
                align="center"
                justify="center"
                color="white"
                fontSize="2xl"
                shadow="md"
              >
                <Icon as={service.icon} boxSize={10} />
              </Flex>

              {/* Text */}
              <Box flex="1">
                <Text
                  fontSize="sm"
                  textTransform="uppercase"
                  fontWeight="semibold"
                  letterSpacing="wider"
                  color="pink.500"
                  mb={2}
                >
                  {service.subheading}
                </Text>
                <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={4} color="gray.800">
                  {service.heading}
                </Heading>
                <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" lineHeight={1.7}>
                  {service.text}
                </Text>
              </Box>
            </MotionFlex>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};
