"use client";

import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Input,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const MotionBox = motion(Box);

export const Newsletter = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Subscribed successfully! 🎉");
  };

  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-r, pink.50, pink.100, white)"
      py={{ base: 16, md: 24 }}
      px={4}
    >
      {/* Subtle gradient overlay effect */}
      <MotionBox
        position="absolute"
        top="-20%"
        left="-20%"
        w="60%"
        h="60%"
        bgGradient="radial(pink.200, transparent 70%)"
        borderRadius="full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <MotionBox
        position="absolute"
        bottom="-20%"
        right="-20%"
        w="60%"
        h="60%"
        bgGradient="radial(pink.300, transparent 70%)"
        borderRadius="full"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack gap={8} textAlign="center">
          <Heading
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, pink.600, pink.400)"
            bgClip="text"
            lineHeight="shorter"
          >
            Unlock Insights That Power Your Growth 🚀
          </Heading>

          <Text
            color="gray.700"
            fontSize={{ base: "md", md: "lg" }}
            maxW="2xl"
          >
            Join a community of forward-thinkers in education and career
            development. Get strategies, trends, and expert guidance straight to
            your inbox.
          </Text>

          <HStack
            as="form"
            onSubmit={handleSubscribe}
            w="100%"
            maxW="lg"
            gap={3}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Input
              placeholder="Enter your email"
              bg="white"
              shadow="lg"
              size={useBreakpointValue({ base: "md", md: "lg" })}
              border="1px solid"
              borderColor="pink.200"
              _focus={{ borderColor: "pink.400", boxShadow: "0 0 0 2px #ED64A6" }}
            />
            <Button
              colorScheme="pink"
              size={useBreakpointValue({ base: "md", md: "lg" })}
              px={8}
              w={{ base: "100%", md: "auto" }}
              type="submit"
              shadow="md"
              _hover={{ transform: "translateY(-2px)", shadow: "xl" }}
              transition="all 0.2s"
            >
              Subscribe
            </Button>
          </HStack>
        </VStack>
      </Container>
      <Toaster position="top-center" />
    </Box>
  );
};
