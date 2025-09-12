"use client";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";

export const ContactMe = () => {
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! 🎉 I will get back to you soon.");
  };

  return (
    <Box
      bgGradient="linear(to-br, pink.50, white)"
      pb={{ base: 16, md: 24 }}
    >
      <Toaster position="top-center" />

      <Container maxW="8xl">
        {/* Section Heading */}
        <VStack gap={4} textAlign="center" mb={12}>
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, pink.400, orange.300)"
            bgClip="text"
          >
            Contact Me
          </Heading>
          <Text color="gray.600" maxW="2xl" mx="auto" fontSize={{ base: "sm", md: "md" }}>
            Whether you’re scaling an EdTech venture, seeking guidance on global
            market entry, or building impactful talent development programs —
            let’s explore how I can support your vision.
          </Text>
        </VStack>

        {/* Contact Form */}
        <Box
          bg="white"
          p={{ base: 6, md: 10 }}
          borderRadius="2xl"
          shadow="xl"
          maxW={{ base: "full", md: "2xl" }}
          mx="auto"
          w="100%"
        >
          <VStack as="form" gap={6} onSubmit={handleSend}>
            <Input
              placeholder="Your Name"
              size="lg"
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
              _focus={{
                borderColor: "pink.400",
                boxShadow: "0 0 0 2px rgba(236, 72, 153, 0.4)",
              }}
              w="100%"
            />
            <Input
              placeholder="Your Email"
              size="lg"
              type="email"
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
              _focus={{
                borderColor: "pink.400",
                boxShadow: "0 0 0 2px rgba(236, 72, 153, 0.4)",
              }}
              w="100%"
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              size="lg"
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
              _focus={{
                borderColor: "pink.400",
                boxShadow: "0 0 0 2px rgba(236, 72, 153, 0.4)",
              }}
              w="100%"
            />
            <Button
              size="lg"
              colorScheme="pink"
              px={10}
              py={6}
              borderRadius="xl"
              fontWeight="bold"
              _hover={{
                transform: "translateY(-3px)",
                shadow: "lg",
              }}
              transition="all 0.3s ease"
              type="submit"
              w="100%"
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};
