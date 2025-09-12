"use client";
import { HeroTemplate } from "@/components/HeroTemplate";
import { TestimonialSection } from "@/components/home/Testimonial";
import { MyServices } from "@/components/services/MyServices";
import { Box } from "@chakra-ui/react";



export default function Services() {
  return (
    <div>
      <main>
        <Box>
            <HeroTemplate
                title="Services"
                subtitle="Do you need someone who can approach your career or special project with empathy, candor, and strategies that deliver results? Here’s how I can support you."
                bgImage="/images/serviceshero.jpg"
            />
        </Box>
        <Box>
          <MyServices />
        </Box>
        <Box>
          <TestimonialSection />
        </Box>
      </main>
    </div>
  );
}