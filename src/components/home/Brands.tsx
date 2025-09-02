"use client";
import { Box, Flex, Image as ChakraImage, useBreakpointValue } from "@chakra-ui/react";
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
  const logoSize = useBreakpointValue({ base: "80px", md: "120px" });

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
      },
    });
  }, [controls]);

  // Duplicate brands to create infinite scroll illusion
  const displayBrands = [...brands, ...brands];

  return (
    <Box as="section" bg="#fff" py={{ base: 12, md: 24 }} overflow="hidden">
      <Flex justify="center" mb={8}>
        <Box fontWeight="extrabold" fontSize={{ base: "2xl", md: "4xl" }} textAlign="center">
          Brands I Have Impacted
        </Box>
      </Flex>

      <Box overflow="hidden" w="full" position="relative">
        <MotionFlex
          animate={controls}
          gap={{ base: 8, md: 16 }}
          w="max-content"
          align="center"
        >
          {displayBrands.map((brand, idx) => (
            <Box key={idx} flex="0 0 auto">
              <ChakraImage
                src={brand.logo}
                alt={brand.name}
                boxSize={logoSize}
                objectFit="contain"
                filter="grayscale(60%)"
                _hover={{ filter: "grayscale(0%)", transform: "scale(1.1)" }}
                transition="all 0.3s ease-in-out"
              />
            </Box>
          ))}
        </MotionFlex>
      </Box>
    </Box>
  );
};
