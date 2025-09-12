"use client";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image as ChakraImage,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);

interface Testimonial {
  content?: string;
  author?: string;
  image?: string;
  screenshot?: string;
}

const testimonials: Testimonial[] = [
  {
    content: `Rachael has been an excellent executor. She designed our pipeline program for building senior talents, and also created the first AltSchool Africa’s learning structure before passing the baton. She did excellently well with the expansion of our operations into Rwanda. She literally makes my life easy with every project she oversees.`,
    author: `Adewale Yusuf, CEO, TalentQL & AltSchool Africa.`,
    image: "/images/adewale.png",
  },
  {
    content: `Rachael's leadership, vision, and abilities have profoundly impacted my career, serving as a testament to her brilliant work during the Pipeline program. Her investment in my career orientation and her relentless push for my aspirations have been instrumental in my journey from the program to securing a new job with all the promised benefits and more. Under Rachael's guidance, I've learned invaluable lessons about careers, mentorship, and navigating the tech ecosystem. Her mentorship has not just been a part but the catalyst in my transformation from an ordinary contractor with part-time gigs to an influential Senior Software Engineer and Educator. I am now part of a team building a fantastic product and have had the privilege of training over 10,000 engineers.`,
    author: `Setemi Ojo, Senior Software Engineer`,
    image: "/images/setemi.png",
  },
  {
    screenshot: "/images/screenshots.png",
  },
];

export const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = useBreakpointValue({ base: "95%", md: "700px" });

  // Autoplay every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      as="section"
      bg="#fff7fb"
      py={{ base: 20, md: 32 }}
      px={{ base: 6, md: 16 }}
      position="relative"
      overflow="hidden"
    >
      {/* Floating background accents */}
      <Box
        position="absolute"
        top="-100px"
        left="-80px"
        w="220px"
        h="220px"
        bgGradient="radial(circle, #FFB6B9 0%, pink.600 100%)"
        borderRadius="full"
        filter="blur(120px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-120px"
        right="-100px"
        w="260px"
        h="260px"
        bgGradient="radial(circle, #FFD6C0 0%, #FFDAC1 100%)"
        borderRadius="full"
        filter="blur(130px)"
        zIndex={0}
      />

      {/* Section header */}
      <VStack gap={6} textAlign="center" mb={14} zIndex={1} position="relative">
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="extrabold"
          bgGradient="linear(to-r, pink.600, #FFD6C0)"
          bgClip="text"
        >
          Testimonials
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          maxW="800px"
          color="gray.600"
        >
          Hear what professionals say about my impact and mentorship.
        </Text>
      </VStack>

      {/* Carousel */}
      <Flex justify="center" align="center" position="relative" zIndex={1}>
        <AnimatePresence mode="wait">
          <MotionBox
            key={activeIndex}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            bg="white"
            borderRadius="2xl"
            p={{ base: 6, md: 10 }}
            shadow="2xl"
            maxW={cardWidth}
            w="full"
          >
            <VStack gap={6} align="center">
              {testimonials[activeIndex].image && (
                <ChakraImage
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].author}
                  boxSize={{ base: "80px", md: "120px" }}
                  borderRadius="full"
                  objectFit="cover"
                  shadow="lg"
                />
              )}

              {testimonials[activeIndex].screenshot && (
                <ChakraImage
                  src={testimonials[activeIndex].screenshot}
                  alt="Collage of testimonials"
                  borderRadius="2xl"
                  objectFit="cover"
                  w="100%"
                  h="auto"
                  shadow="lg"
                />
              )}

              {testimonials[activeIndex].content && (
                <>
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="gray.700"
                    textAlign="center"
                  >
                    &ldquo;{testimonials[activeIndex].content}&rdquo;
                  </Text>
                  <Text
                    fontWeight="bold"
                    color="pink.600"
                    textAlign="center"
                  >
                    — {testimonials[activeIndex].author}
                  </Text>
                </>
              )}
            </VStack>
          </MotionBox>
        </AnimatePresence>
      </Flex>

      {/* Dots Indicator */}
      {/* <Flex justify="center" mt={8} gap={3}>
        {testimonials.map((_, idx) => (
          <Box
            key={idx}
            w={idx === activeIndex ? "12px" : "8px"}
            h={idx === activeIndex ? "12px" : "8px"}
            borderRadius="full"
            bg={idx === activeIndex ? "pink.400" : "gray.300"}
            transition="all 0.3s"
            cursor="pointer"
            onClick={() => setActiveIndex(idx)}
          />
        ))} */}
      {/* </Flex> */}
    </Box>
  );
};
