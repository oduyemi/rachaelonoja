"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Link as ChakraLink,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export const MyStory = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="6xl">
        {/* Intro */}
        <VStack spacing={4} mb={12} textAlign="center">
          <MotionHeading
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            My Story
          </MotionHeading>
          <MotionText
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I’m Rachael Onoja. Education and technology are my superpowers for global impact.
          </MotionText>
        </VStack>

        {/* Section 1: Career & Impact */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" mb={16}>
          <MotionBox
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading as="h3" fontSize="2xl" mb={4} color="pink.600">
              Career & Impact
            </Heading>
            <Text mb={4} color="gray.700">
              Over half a decade designing impactful education tech programs, helping over 500,000 talents worldwide.
            </Text>
            <Text color="gray.700">
              I craft strategies for global expansion into Ghana, Rwanda, Kenya, USA, and beyond. I coach professionals to excel and see their careers as a calling.
            </Text>
          </MotionBox>
          <MotionBox
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/abt1.png"
              alt="Career Impact"
              width={500}
              height={300}
              style={{ borderRadius: "8px", width: "100%", height: "auto" }}
            />
          </MotionBox>
        </SimpleGrid>

        {/* Section 2: Initiatives & Balance */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" mb={16}>
          <MotionBox
            order={{ base: 2, md: 1 }}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading as="h3" fontSize="2xl" mb={4} color="pink.600">
              Passions & Initiatives
            </Heading>
            <Text mb={4} color="gray.700">
              I launched <strong>#BalanceUnleashed</strong> after overcoming burnout, helping professionals live balanced, productive lives.
            </Text>
            <Text color="gray.700">
              I advocate for women’s all-around wellness: health, financial, intellectual, and spiritual.
            </Text>
          </MotionBox>
          <MotionBox
            order={{ base: 1, md: 2 }}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/balanceunleashed.jpeg"
              alt="Balance Unleashed"
              width={500}
              height={300}
              style={{ borderRadius: "8px", width: "100%", height: "auto" }}
            />
          </MotionBox>
        </SimpleGrid>

        {/* Section 3: Adventures */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" mb={16}>
          <MotionBox
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading as="h3" fontSize="2xl" mb={4} color="pink.600">
              Adventures & Personality
            </Heading>
            <Text mb={4} color="gray.700">
              Star Trek, KDrama binge-watching, paragliding over the Mediterranean, and bungee jumping in Fazenda Senga. Always chasing adventure!
            </Text>
            <Text color="gray.700">
              Bucket list: Skydiving over Jumeirah or flying a plane.
            </Text>
          </MotionBox>
          <MotionBox
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/adventure.jpg"
              alt="Adventures"
              width={500}
              height={300}
              style={{ borderRadius: "8px", width: "100%", height: "auto" }}
            />
          </MotionBox>
        </SimpleGrid>

        {/* Embedded Videos */}
        <MotionBox mb={12} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
          <Heading as="h3" fontSize="2xl" mb={6} color="pink.600" textAlign="center">
            Fun Videos & Connect
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={6}>
            <Box
              as="iframe"
              src="https://www.youtube.com/embed/TdEM9KSmlCo"
              title="Fun Video 1"
              width="100%"
              height="300px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              borderRadius="md"
              boxShadow="md"
            />
            <Box
              as="iframe"
              src="https://www.youtube.com/embed/1o8TWBxUBYY"
              title="Fun Video 2"
              width="100%"
              height="300px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              borderRadius="md"
              boxShadow="md"
            />
          </SimpleGrid>

          <Text textAlign="center" fontSize="md" color="gray.700">
            Still here? Check out my <ChakraLink href="/blog" color="pink.600">Blog</ChakraLink> and <ChakraLink href="/works" color="pink.600">Work</ChakraLink> or connect with me.
          </Text>
        </MotionBox>
      </Container>
    </Box>
  );
};
