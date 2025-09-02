"use client";
import { HeroTemplate } from "@/components/HeroTemplate";
import { Box } from "@chakra-ui/react";



export default function Services() {
  return (
    <div>
      <main>
        <Box>
            <HeroTemplate
                title="Services"
                subtitle="We provide world-class solutions tailored to your needs."
                buttonText="Explore Services"
                inlineImage="/images/services-illustration.svg"
            />
        </Box>
      </main>
    </div>
  );
}