"use client";
import { HeroTemplate } from "@/components/HeroTemplate";
import { Box } from "@chakra-ui/react";



export default function Works() {
  return (
    <div>
      <main>
        <Box>
            <HeroTemplate
                title="Works"
                subtitle="Check out some of the amazing projects I have worked on"
                // buttonText="View Portfolio"
                bgImage="/images/works.png"

            />
        </Box>
      </main>
    </div>
  );
}