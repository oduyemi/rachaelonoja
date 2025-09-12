"use client";
import { HeroTemplate } from "@/components/HeroTemplate";
import { MyResume } from "@/components/works/MyResume";
import { MyWorkSoFar } from "@/components/works/MyWorkSoFar";
import { Box } from "@chakra-ui/react";



export default function Works() {
  return (
    <div>
      <main>
        <Box>
            <HeroTemplate
                title="Works"
                subtitle="Over the course of a decade, I have worked across multiple EdTech and impacted several businesses in their quest to make access to opportunities for talents more distributed across markets and communities."
                // buttonText="View Portfolio"
                bgImage="/images/works.png"

            />
        </Box>
        <MyWorkSoFar />
        <MyResume />
      </main>
    </div>
  );
}