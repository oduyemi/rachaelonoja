"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  chakra,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Newsletter } from "../Newsletter";
import { BookWebinar } from "../Webinar";

const MotionBox = motion(Box);
// const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const Iframe = chakra("iframe");

export const MyStory = () => {
  return (
    <Box
      as="section"
      py={{ base: 20, md: 28 }}
      bg="gray.50"
      position="relative"
      overflow="hidden"
      w="100%"
    >
      {/* Background accents */}
      <Box
        position="absolute"
        top="-80px"
        left="-60px"
        w="220px"
        h="220px"
        bgGradient="radial(circle, #FFB6B9 0%, #FF7EB9 100%)"
        borderRadius="full"
        filter="blur(120px)"
        opacity={0.4}
      />
      <Box
        position="absolute"
        bottom="-120px"
        right="-80px"
        w="260px"
        h="260px"
        bgGradient="radial(circle, #FFD6C0 0%, #FFDAC1 100%)"
        borderRadius="full"
        filter="blur(140px)"
        opacity={0.5}
      />

      {/* Intro */}
      <VStack gap={4} mb={16} textAlign="center" px={{ base: 6, md: 12 }}>
        {/* <MotionHeading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="extrabold"
          bgGradient="linear(to-r, pink.500, orange.300)"
          bgClip="text"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Story
        </MotionHeading> */}
        <MotionText
          fontSize={{ base: "md", md: "xl" }}
          color="gray.700"
          maxW="3xl"
          mx="auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I’m <strong>Rachael Onoja</strong>. Education and technology are my
          superpowers for creating global impact.
        </MotionText>
      </VStack>

      {/* Story sections */}
      {[
        {
          title: "Career & Impact",
          text1:
            "Over half a decade designing impactful education tech programs, helping over 500,000 talents worldwide.",
          text2:
            "I craft strategies for global expansion into Ghana, Rwanda, Kenya, USA, and beyond. I coach professionals to excel and see their careers as a calling.",
          img: "/images/abt1.png",
          reverse: false,
        },
        {
          title: "Passions & Initiatives",
          text1:
            "I launched #BalanceUnleashed after overcoming burnout, helping professionals live balanced, productive lives.",
          text2:
            "I advocate for women’s all-around wellness: health, financial, intellectual, and spiritual.",
          img: "/images/balanceunleashed.jpeg",
          reverse: true,
        },
        {
          title: "Adventures & Personality",
          text1:
            "Star Trek, KDrama binge-watching, paragliding over the Mediterranean, and bungee jumping in Fazenda Senga. Always chasing adventure!",
          text2: "Bucket list: Skydiving over Jumeirah or flying a plane.",
          img: "/images/adventure.jpg",
          reverse: false,
        },
      ].map((section, i) => (
        <SimpleGrid
          key={i}
          columns={{ base: 1, md: 2 }}
          gap={12}
          alignItems="center"
          justifyItems="center"
          px={{ base: 6, md: 16 }}
          mb={20}
        >
          <MotionBox
            order={{ base: 2, md: section.reverse ? 2 : 1 }}
            maxW="full"
            initial={{ x: section.reverse ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading as="h3" fontSize="2xl" mb={4} color="pink.600">
              {section.title}
            </Heading>
            <Text mb={4} color="gray.700" fontSize="md">
              {section.text1}
            </Text>
            <Text color="gray.700" fontSize="md">
              {section.text2}
            </Text>
          </MotionBox>
          <MotionBox
            order={{ base: 1, md: section.reverse ? 1 : 2 }}
            w="100%"
            initial={{ x: section.reverse ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={section.img}
              alt={section.title}
              width={600}
              height={380}
              style={{
                borderRadius: "20px",
                width: "100%",
                height: "auto",
                objectFit: "cover",
                boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
              }}
            />
          </MotionBox>
        </SimpleGrid>
      ))}
        <Box>
          <BookWebinar />
        </Box>
          <Box mb={10}>
        </Box>

      {/* Embedded Videos */}
      <MotionBox
        mb={12}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        px={{ base: 6, md: 16 }}
      >
        <Heading
          as="h3"
          fontSize="2xl"
          mb={8}
          color="pink.600"
          textAlign="center"
        >
          Fun Videos & Connect
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} mb={8}>
          <Iframe
            src="https://www.youtube.com/embed/TdEM9KSmlCo"
            title="Fun Video 1"
            width="100%"
            height="320px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            borderRadius="xl"
            boxShadow="xl"
          />
          <Iframe
            src="https://www.youtube.com/embed/1o8TWBxUBYY"
            title="Fun Video 2"
            width="100%"
            height="320px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            borderRadius="xl"
            boxShadow="xl"
          />
        </SimpleGrid>
        {/* <Text textAlign="center" fontSize="lg" color="gray.700">
          Still here? Check out my{" "}
          <ChakraLink href="/blog" color="pink.600" fontWeight="semibold">
            Blog
          </ChakraLink>{" "}
          and{" "}
          <ChakraLink href="/works" color="pink.600" fontWeight="semibold">
            Work
          </ChakraLink>{" "}
          or connect with me.
        </Text> */}
          <Newsletter />
          <Box mb={10}></Box>
      </MotionBox>
    </Box>
  );
};
