"use client";
import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/home/Hero";
import { Ways } from "@/components/home/Services";
import { AboutSection } from "@/components/home/About";
import { BrandsCarousel } from "@/components/home/Brands";
import { FeaturesAndSpeakingEngagements } from "@/components/home/Speaking";
import { TestimonialSection } from "@/components/home/Testimonial";
import { BookWebinar } from "@/components/Webinar";



export default function Home() {
  return (
    <div>
      <main>
        <Box mt={8}>
          <Hero />
        </Box>
        <Box>
          <Ways />
        </Box>
        <Box>
          <AboutSection />
        </Box>
        <Box>
          <BrandsCarousel />
        </Box>
        <Box>
          <FeaturesAndSpeakingEngagements />
        </Box>
        <Box>
          <TestimonialSection />
        </Box>
        <Box>
          <BookWebinar />
        </Box>
      </main>
    </div>
  );
}