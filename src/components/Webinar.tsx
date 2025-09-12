"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Image,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const BookWebinar = () => {
  return (
    <Box
      as="section"
      bg="gray.50"
      py={{ base: 16, md: 24 }}
      px={4}
      overflow="hidden"
    >
      <Container maxW="7xl">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={{ base: 10, md: 16 }}
          alignItems="center"
        >
          {/* Left Content */}
          <MotionBox
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <VStack gap={6} align="start" maxW="nd">
              <Heading
                fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                fontWeight="extrabold"
                lineHeight="shorter"
                bgGradient="linear(to-r, pink.600, pink.400)"
                bgClip="text"
              >
                Book a Webinar with Me
              </Heading>

              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                Want to scale your career, build impactful programs, or expand
                globally? Let’s dive deep into actionable strategies that can
                transform your growth journey.
              </Text>

              <Button
                size="lg"
                colorScheme="pink"
                px={8}
                shadow="md"
                _hover={{ transform: "translateY(-2px)", shadow: "xl" }}
                transition="all 0.2s"
              >
                Book Now
              </Button>
            </VStack>
          </MotionBox>

          {/* Right Image */}
          <MotionBox
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            textAlign="center"
          >
            <Image
              src="/images/achieve.png"
              alt="Webinar with Rachael"
              borderRadius="2xl"
              shadow="2xl"
              objectFit="cover"
              w="100%"
              maxH={{ base: "300px", md: "400px" }}
            />
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
