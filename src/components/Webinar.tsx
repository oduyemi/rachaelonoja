import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
export const BookWebinar = () => {
  return (
    <Box bg="white" py={20}>
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} alignItems="center">
          <MotionBox
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={4} color="pink.600">
              Book a Webinar with Me
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={6}>
              Let’s dive deeper into building impactful programs, scaling careers,
              and expanding businesses globally. Book a webinar and let’s make it
              happen.
            </Text>
            <Button
              size="lg"
              colorScheme="pink"
              px={8}
            >
              Book Now
            </Button>
          </MotionBox>
          <MotionBox
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box
              borderRadius="xl"
              shadow="xl"
              h="300px"
              bgGradient="linear(to-r, #FF7EB9, #FFD6C0)"
            />
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
};