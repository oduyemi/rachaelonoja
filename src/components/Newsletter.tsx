import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";


export const Newsletter = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Subscribed successfully! 🎉");
  };

  return (
    <Box bg="gray.50" py={16}>
      <Container maxW="5xl" textAlign="center">
        <VStack gap={6}>
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            bgGradient="linear(to-r, #FF7EB9, #FFD6C0)"
            bgClip="text"
          >
            Subscribe to My Newsletter
          </Heading>
          <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
            Get the latest insights on career growth, program strategy, and
            global expansion straight to your inbox.
          </Text>
          <HStack w="100%" maxW="lg">
            <Input placeholder="Enter your email" bg="white" shadow="sm" />
            <Button
              colorScheme="pink"
              px={6}
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};