"use client";
import { HeroTemplate } from "@/components/HeroTemplate";
import { MyServices } from "@/components/services/MyServices";
import { Box } from "@chakra-ui/react";



export default function Services() {
  return (
    <div>
      <main>
        <Box>
            <HeroTemplate
                title="Services"
                subtitle="We provide world-class solutions tailored to your needs."
                bgImage="/images/serviceshero.jpg"
            />
        </Box>
        <Box>
          <MyServices />
        </Box>
      </main>
    </div>
  );
}