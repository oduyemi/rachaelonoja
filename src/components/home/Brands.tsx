"use client";
import {
  Box,
  Flex,
  Image as ChakraImage,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const MotionFlex = motion(Flex);

interface Brand {
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { name: "Andela", logo: "/images/brands/andela.png" },
  { name: "AltSchool Africa", logo: "/images/brands/altschool.png" },
  { name: "Decagon", logo: "/images/brands/decagon.png" },
  { name: "Dreams Alive", logo: "/images/brands/dream.png" },
  { name: "3MTT", logo: "/images/brands/three.png" },
  { name: "TalentQL", logo: "/images/brands/talentql.png" },
];

export const BrandsCarousel = () => {
  const controls = useAnimation();
  const logoSize = useBreakpointValue({ base: "70px", md: "110px", lg: "130px" });

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  // Duplicate brands more for seamless infinite scroll
  const displayBrands = [...brands, ...brands, ...brands];

  return (
    <Box
      as="section"
      bgGradient="linear(to-b, white, #fff7fb)"
      py={{ base: 12, md: 24 }}
      overflow="hidden"
      position="relative"
    >
      {/* Heading */}
      <Flex justify="center" mb={10} px={4}>
        <Heading
          as="h2"
          fontWeight="extrabold"
          fontSize={{ base: "2xl", md: "4xl" }}
          textAlign="center"
          lineHeight="shorter"
          bgGradient="linear(to-r, #FF7EB9, #FFD6C0)"
          bgClip="text"
        >
          Brands I Have Impacted
        </Heading>
      </Flex>

      {/* Carousel */}
      <Box overflow="hidden" w="full" position="relative">
        <MotionFlex
          animate={controls}
          gap={{ base: 8, md: 16, lg: 20 }}
          w="max-content"
          align="center"
          px={{ base: 4, md: 8 }}
        >
          {displayBrands.map((brand, idx) => (
            <Box key={idx} flex="0 0 auto">
              <ChakraImage
                src={brand.logo}
                alt={brand.name}
                boxSize={logoSize}
                objectFit="contain"
                filter="grayscale(80%)"
                opacity={0.8}
                transition="all 0.35s ease-in-out"
                _hover={{
                  filter: "grayscale(0%)",
                  opacity: 1,
                  transform: "scale(1.1)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                }}
              />
            </Box>
          ))}
        </MotionFlex>
      </Box>
    </Box>
  );
};
