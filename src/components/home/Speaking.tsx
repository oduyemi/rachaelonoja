"use client";
import { Box, Flex, Heading, Text, VStack, SimpleGrid, AspectRatio, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    <Box
      as="section"
      bg="linear-gradient(135deg, #fff7fb 0%, #ffffff 100%)"
      color="#333"
      py={{ base: 20, md: 32 }}
      px={{ base: 6, md: 16 }}
      position="relative"
      overflow="hidden"
    >
      {/* Animated floating shapes */}
      <MotionBox
        position="absolute"
        top="-120px"
        left="-120px"
        w={{ base: "180px", md: "250px" }}
        h={{ base: "180px", md: "250px" }}
        bgGradient="radial(circle, #FFB6B9 0%, #FF7EB9 100%)"
        borderRadius="full"
        filter="blur(120px)"
        opacity={0.35}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        zIndex={0}
      />
      <MotionBox
        position="absolute"
        bottom="-140px"
        right="-120px"
        w={{ base: "220px", md: "300px" }}
        h={{ base: "220px", md: "300px" }}
        bgGradient="radial(circle, #FFD6C0 0%, #FFDAC1 100%)"
        borderRadius="full"
        filter="blur(140px)"
        opacity={0.35}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        zIndex={0}
      />

      {/* Section Intro */}
      <VStack gap={6} textAlign="center" mb={16} zIndex={1} position="relative">
        <Heading
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="black"
          bgGradient="linear(to-r, #FF7EB9, #FFD6C0)"
          bgClip="text"
        >
          Features & Speaking Engagements
        </Heading>
        <Text fontSize={{ base: "sm", md: "md" }} maxW="850px" color="gray.600" lineHeight={1.7}>
          Rachael has been driving innovation in EdTech, bridging academia and business, and mentoring startups to scale successfully. Here are some of her impactful engagements:
        </Text>
      </VStack>

      {/* Videos Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 8, md: 10 }} zIndex={1} position="relative">
        {visibleEngagements.map((engagement, idx) => (
          <MotionBox
            key={idx}
            bg="white"
            borderRadius="2xl"
            p={5}
            shadow="md"
            border="1px solid"
            borderColor="gray.100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.03, boxShadow: "xl" }}
          >
            <VStack gap={4} align="stretch">
              <Heading
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="semibold"
                bgGradient="linear(to-r, #FF7EB9, #FFD6C0)"
                bgClip="text"
              >
                {engagement.title}
              </Heading>
              <AspectRatio ratio={16 / 9} borderRadius="xl" overflow="hidden" shadow="sm">
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
      <Flex justify="center" mt={14} zIndex={1} position="relative">
        <Button
          size="lg"
          px={8}
          py={6}
          colorScheme="pink"
          bgGradient="linear(to-r, #FF7EB9, #FFD6C0)"
          color="white"
          fontWeight="bold"
          borderRadius="full"
          _hover={{ transform: "scale(1.07)", boxShadow: "xl", bgGradient: "linear(to-r, #FFD6C0, #FF7EB9)" }}
          transition="all 0.3s ease"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Load More"}
        </Button>
      </Flex>
    </Box>
  );
};