"use client";
import { HeroTemplate } from "@/components/HeroTemplate";
import { Box } from "@chakra-ui/react";



export default function Blog() {
  return (
    <div>
      <main>
        <Box>
            <HeroTemplate
                title="Blog"
                subtitle="Insights, stories, and updates from our team"
                bgImage="/images/services.avif"
            />
        </Box>
      </main>
    </div>
  );
}