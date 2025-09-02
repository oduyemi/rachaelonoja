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
                subtitle="Check out some of the amazing projects we’ve built"
                buttonText="View Portfolio"
                inlineImage="/images/services-illustration.svg"
            />
        </Box>
      </main>
    </div>
  );
}