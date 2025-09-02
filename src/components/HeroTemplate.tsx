"use client";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  onButtonClick?: () => void;
  bgImage?: string; // optional background image
  inlineImage?: string; // optional inline illustration
}

export const HeroTemplate = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  bgImage,
  inlineImage,
}: HeroProps) =>{
  return (
    <MotionBox
      as="section"
      w="100%"
      minH={{ base: "50vh", md: "60vh" }} // reduced height
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
      position="relative"
      bg={bgImage ? undefined : "linear-gradient(to-r, teal.500, blue.500)"}
      color="white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background image */}
      {bgImage && (
        <Box
          position="absolute"
          inset={0}
          zIndex={0}
          bgImage={`url(${bgImage})`}
          bgSize="cover"
          bgPos="center"
          _before={{
            content: '""',
            position: "absolute",
            inset: 0,
            bg: "blackAlpha.500", // subtle overlay
          }}
        />
      )}

      <VStack
        spacing={4} // reduced spacing
        maxW="3xl"
        position="relative"
        zIndex={1}
        align="center"
        textAlign="center"
      >
        <MotionHeading
          fontSize={{ base: "2xl", md: "4xl" }} // smaller on mobile
          fontWeight="bold"
          lineHeight="shorter"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </MotionHeading>

        <MotionText
          fontSize={{ base: "sm", md: "md" }} // smaller subtitle
          maxW="2xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </MotionText>

        {buttonText && (
          <MotionButton
            size="md"
            bg="white"
            color="teal.600"
            _hover={{ bg: "teal.100" }}
            onClick={onButtonClick}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {buttonText}
          </MotionButton>
        )}

        {inlineImage && (
          <MotionBox
            mt={4}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            maxW={{ base: "80%", md: "400px" }}
          >
            <Image
              src={inlineImage}
              alt={title}
              width={400}
              height={300}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </MotionBox>
        )}
      </VStack>
    </MotionBox>
  );
}
