"use client";
import { Box, Flex, Heading, Text, VStack, SimpleGrid, AspectRatio, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const MotionBox = motion(Box);

interface SpeakingEngagement {
  title: string;
  youtubeUrl: string;
}

const allEngagements: SpeakingEngagement[] = [
  { title: "EdTech for transforming education in Nigeria", youtubeUrl: "https://www.youtube.com/embed/FHxnWS4Fk_Q" },
  { title: "Bridging the gap between academia and business", youtubeUrl: "https://www.youtube.com/embed/QhN_c_vJ2jE" },
  { title: "Startup Pitch, AltSchool Africa", youtubeUrl: "https://www.youtube.com/embed/_wh8RO1eYUE" },
  { title: "The Path Taken: Self Leadership for Impact", youtubeUrl: "https://www.youtube.com/embed/TdEM9KSmlCo" },
  { title: "Bridging Educational Deficit via Virtual Learning", youtubeUrl: "https://www.youtube.com/embed/o7qPRaj9Hqc" },
  { title: "Education for the future", youtubeUrl: "https://www.youtube.com/embed/-f4g7pYS6Ig" },
];

export const FeaturesAndSpeakingEngagements = () => {
  const [visibleEngagements, setVisibleEngagements] = useState<SpeakingEngagement[]>([]);
  const [showAll, setShowAll] = useState(false);

  // Randomize 3 videos on initial load
  useEffect(() => {
    if (!showAll) {
      const shuffled = [...allEngagements].sort(() => 0.5 - Math.random());
      setVisibleEngagements(shuffled.slice(0, 3));
    } else {
      setVisibleEngagements(allEngagements);
    }
  }, [showAll]);

  return (
    <Box as="section" bg="#fff7fb" color="#333" py={{ base: 20, md: 32 }} px={{ base: 6, md: 16 }} position="relative" overflow="hidden">
      {/* Soft floating shapes */}
      <Box position="absolute" top="-100px" left="-100px" w="200px" h="200px" bgGradient="radial(circle, #FFB6B9 0%, #FF7EB9 100%)" borderRadius="full" filter="blur(120px)" zIndex={0} />
      <Box position="absolute" bottom="-120px" right="-100px" w="250px" h="250px" bgGradient="radial(circle, #FFD6C0 0%, #FFDAC1 100%)" borderRadius="full" filter="blur(140px)" zIndex={0} />

      {/* Section Intro */}
      <VStack spacing={6} textAlign="center" mb={16} zIndex={1} position="relative">
        <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="extrabold" bgGradient="linear(to-r, #FF7EB9, #FFD6C0)" bgClip="text">
          Features & Speaking Engagements
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} maxW="800px">
          Rachael has been driving innovation in EdTech, bridging academia and business, and mentoring startups to scale successfully. Here are some of her impactful engagements:
        </Text>
      </VStack>

      {/* Videos Grid */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} zIndex={1} position="relative">
        {visibleEngagements.map((engagement, idx) => (
          <MotionBox
            key={idx}
            bg="white"
            borderRadius="2xl"
            p={4}
            shadow="xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "2xl" }}
          >
            <VStack spacing={4} align="stretch">
              <Heading fontSize={{ base: "lg", md: "xl" }} bgGradient="linear(to-r, #FF7EB9, #FFD6C0)" bgClip="text">
                {engagement.title}
              </Heading>
              <AspectRatio ratio={16 / 9} borderRadius="2xl" overflow="hidden">
                <iframe
                  src={engagement.youtubeUrl}
                  title={engagement.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>

      {/* Load More / Load Less CTA */}
      <Flex justify="center" mt={12} zIndex={1} position="relative">
        <Button
          size="lg"
          px={6}
          colorScheme="pink"
          bgGradient="linear(to-r, #FF7EB9, #FFD6C0)"
          color="white"
          fontWeight="bold"
          borderRadius="full"
          _hover={{ transform: "scale(1.05)", boxShadow: "2xl", bgGradient: "linear(to-r, #FFD6C0, #FFDAC1)" }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Load More"}
        </Button>
      </Flex>
    </Box>
  );
};
