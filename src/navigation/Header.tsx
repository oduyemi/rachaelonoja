"use client";
import {
  Box,
  Flex,
  HStack,
  VStack,
  IconButton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Works", href: "/works" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "/facebook", label: "Facebook" },
    { icon: FaTwitter, href: "/twitter", label: "Twitter" },
    { icon: FaLinkedinIn, href: "/linkedin", label: "LinkedIn" },
    { icon: FaInstagram, href: "/instagram", label: "Instagram" },
  ];

  const linkStyle = (href: string) => ({
    textDecoration: "none",
    color: pathname === href ? "pink.400" : "gray.800",
    fontWeight: pathname === href ? "bold" : "medium",
    _hover: {
      color: "pink.400",
      textDecoration: "none",
    },
  });

  return (
    <Box
      as="header"
      px={{ base: 4, md: 10 }}
      py={{ base: 2, md: 4 }} // smaller padding on mobile
      position="fixed"
      top={0}
      left={0}
      w="100%"
      zIndex={100} // stays above hero
      bg={scrolled ? "white" : "transparent"}
      boxShadow={scrolled ? "sm" : "none"}
      transition="all 0.3s ease"
    >
      <Flex justify="space-between" align="center" h={{ base: "50px", md: "70px" }}>
        {/* Logo */}
        <Box textAlign={{ base: "center", md: "left" }}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={100} // smaller on mobile
              height={32}
              alt="sitelogo"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </Box>

        {/* Desktop Nav Links */}
        <HStack gap={10} display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => (
            <ChakraLink
              key={link.label}
              as={Link}
              href={link.href}
              {...linkStyle(link.href)}
            >
              {link.label}
            </ChakraLink>
          ))}
        </HStack>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          aria-label="Toggle Menu"
          icon={isOpen ? <FaTimes /> : <FaBars />}
          display={{ base: "block", md: "none" }}
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          fontSize="22px"
          color="gray.800"
          _hover={{ bg: "gray.100" }}
          _active={{ bg: "gray.200" }}
        />
      </Flex>

      {/* Mobile Menu with slide-down animation */}
      <Box
        overflow="hidden"
        maxHeight={isOpen ? "500px" : "0"}
        transition="max-height 0.3s ease-in-out"
      >
        <VStack
          spacing={4}
          mt={2}
          display={{ base: "flex", md: "none" }}
          bg="white"
          py={4}
          px={2}
          shadow="xs"
          borderRadius="md"
        >
          {navLinks.map((link) => (
            <ChakraLink
              key={link.label}
              as={Link}
              href={link.href}
              w="full"
              textAlign="center"
              py={2}
              {...linkStyle(link.href)}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </ChakraLink>
          ))}
        </VStack>
      </Box>

      {/* Social Icons (fixed right for desktop) */}
      <VStack
        spacing={4}
        position="fixed"
        right="4"
        top="28%"
        display={{ base: "none", md: "flex" }}
      >
        {socialLinks.map((social) => (
          <ChakraLink
            key={social.label}
            href={social.href}
            isExternal
            color="white"
            bg="black"
            w={10}
            h={10}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="full"
            _hover={{ bg: "gray.800" }}
          >
            <social.icon />
          </ChakraLink>
        ))}
      </VStack>
    </Box>
  );
};
