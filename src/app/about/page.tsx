"use client";
import { MyStory } from "@/components/about/MyStory";
import { HeroTemplate } from "@/components/HeroTemplate";
import { Box } from "@chakra-ui/react";



export default function About() {
  return (
    <div>
      <main>
        <Box>
            <HeroTemplate
                title="About Us"
                subtitle="Learn more about my journey, values, and mission."
                bgImage="/images/abthero.png"
                />
        </Box>
        <Box>
          <MyStory />
        </Box>
      </main>
    </div>
  );
}