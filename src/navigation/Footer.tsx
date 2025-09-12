"use client";
import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <Box bg="gray.900" color="gray.300" py={10}>
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={6}
        >
          <Text>&copy; {new Date().getFullYear()} Rachael Onoja. All rights reserved.</Text>
          <HStack gap={6}>
            <Link color="pink.600" href="https://www.instagram.com/onoja.rachael/" >
              <FaInstagram />
            </Link>
            <Link color="pink.600" href="https://x.com/onojarachael">
              <FaTwitter />
            </Link>
            <Link color="pink.600" href="https://www.linkedin.com/in/rachaelonoja/">
              <FaLinkedin />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};