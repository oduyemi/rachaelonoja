"use client";
import { Box, Flex, Heading, Text, VStack, Image as ChakraImage, Button, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
  const cardWidth = useBreakpointValue({ base: "90%", md: "600px" });

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box as="section" bg="#fff7fb" py={{ base: 20, md: 32 }} px={{ base: 6, md: 16 }} position="relative">
      <VStack spacing={8} textAlign="center" mb={12}>
        <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="extrabold" bgGradient="linear(to-r, #FF7EB9, #FFD6C0)" bgClip="text">
          Testimonials
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} maxW="800px" color="gray.600">
          Hear what professionals say about my impact and mentorship.
        </Text>
      </VStack>

      <Flex justify="center" align="center" position="relative">
        {/* Prev Button */}
        <Button
          onClick={handlePrev}
          position="absolute"
          left={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          colorScheme="pink"
          borderRadius="full"
          p={4}
          _hover={{ bgGradient: "linear(to-r, #FF7EB9, #FFD6C0)", color: "white" }}
        >
          <FaArrowLeft />
        </Button>

        {/* Testimonial Card */}
        <MotionBox
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          bg="white"
          borderRadius="2xl"
          p={{ base: 6, md: 10 }}
          shadow="2xl"
          maxW={cardWidth}
        >
          <VStack spacing={6} align="flex-start">
            {testimonials[activeIndex].image && (
              <ChakraImage
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].author}
                boxSize={{ base: "80px", md: "120px" }}
                borderRadius="full"
                objectFit="cover"
                shadow="lg"
                alignSelf="center"
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
              />
            )}

            {testimonials[activeIndex].content && (
              <>
                <Text fontSize={{ base: "md", md: "lg" }} color="#555">
                  "{testimonials[activeIndex].content}"
                </Text>
                <Text fontWeight="bold" color="#FF7EB9">
                  — {testimonials[activeIndex].author}
                </Text>
              </>
            )}
          </VStack>
        </MotionBox>

        {/* Next Button */}
        <Button
          onClick={handleNext}
          position="absolute"
          right={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          colorScheme="pink"
          borderRadius="full"
          p={4}
          _hover={{ bgGradient: "linear(to-r, #FF7EB9, #FFD6C0)", color: "white" }}
        >
          <FaArrowRight />
        </Button>
      </Flex>
    </Box>
  );
};
