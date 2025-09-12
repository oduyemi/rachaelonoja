"use client";
import { ContactMe } from "@/components/contact";
import { HeroTemplate } from "@/components/HeroTemplate";
import { Box } from "@chakra-ui/react";



export default function Contact() {
  return (
    <div>
      <main>
        <Box>
            <HeroTemplate
                title="Get in Touch"
                subtitle="I’d love to hear from you. Let’s connect today"
                bgImage="/images/contacthero.jpg"
                />
        </Box>
        <Box>
          <ContactMe />
        </Box>
      </main>
    </div>
  );
}