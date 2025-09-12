"use client";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const Iframe = chakra("iframe");

export const MyWorkSoFar = () => {
  const works = [
    {
      title: "AltSchool Africa & TalentQL Inc.",
      media: (
        <Iframe
          src="https://www.youtube.com/embed/qgnmrPKbk2Q?si=72O3p59WlKQu1_Vc"
          title="AltSchool Africa & TalentQL Inc. Video"
          width="100%"
          height="320px"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          borderRadius="xl"
          boxShadow="lg"
        />
      ),
      text: [
        "For nearly 4 years at TalentQL Group, I’ve worn multiple hats as a strategic leader across programs, operations, learning, and innovation.",
        "I designed the original AltSchool Africa learning experience, now serving 100k+ learners across 100+ countries. Extended offerings beyond tech into Business and the Creative Economy.",
        "In 2023, I streamlined intake cycles, boosting applications by 55%. Expanded into East Africa (Rwanda & Kenya) and built the Pipeline by TalentQL program — Africa’s first mid-senior engineering bootcamp, collectively driving $2M+ in revenue.",
      ],
    },
    {
      title: "Decagon Institute",
      media: (
        <Image
          src="/images/works/decagon.png"
          alt="Decagon Institute"
          width={600}
          height={380}
          style={{ borderRadius: "20px", width: "100%", height: "auto" }}
        />
      ),
      text: [
        "Designed and led the ‘Hire Week’ project, matching vetted developers with hiring managers virtually, achieving a 67% placement rate within 5 days.",
        "Drove partnerships and recruitment for the UK-Nig Tech Hub Program, securing 100% placement and 80% post-program retention.",
        "Launched the ‘Workplace Preparation Program’ which increased graduate placement success by 25%.",
      ],
    },
    {
      title: "Andela Learning Community",
      media: (
        <Image
          src="/images/works/andela.png"
          alt="Andela Learning Community"
          width={600}
          height={380}
          style={{ borderRadius: "20px", width: "100%", height: "auto" }}
        />
      ),
      text: [
        "Led ALC 2.0 & 3.0 as Regional Program Assistant for North East Nigeria, training 5,000+ learners.",
        "Directed #DevCTrainingwithAndela, training 2,500 learners, and supported the Grow with Google scholarship program, training 65,000 learners across Sub-Saharan Africa.",
        "Secured contract renewal from Google to scale training to 1M talents by 2025 while improving team satisfaction for two consecutive years.",
      ],
    },
    {
      title: "Dreams Alive Nigeria",
      media: (
        <Image
          src="/images/works/dreams.png"
          alt="Dreams Alive Nigeria"
          width={600}
          height={380}
          style={{ borderRadius: "20px", width: "100%", height: "auto" }}
        />
      ),
      text: [
        "Serving as External Advisor for Storytelling, I helped Dreams Alive Nigeria amplify impact narratives — from free medical care in underserved communities to women and youth empowerment.",
        "Boosted social engagement by 47% and strengthened overall brand acceptance.",
      ],
    },
  ];

  return (
    <Box as="section" py={{ base: 20, md: 28 }} bg="white" w="100%">
      <Heading
        as="h2"
        textAlign="center"
        fontSize={{ base: "3xl", md: "5xl" }}
        mb={16}
        fontWeight="extrabold"
        bgGradient="linear(to-r, pink.500, orange.400)"
        bgClip="text"
      >
        My Work So Far
      </Heading>

      {works.map((work, i) => (
        <SimpleGrid
          key={i}
          columns={{ base: 1, md: 2 }}
          gap={12}
          alignItems="center"
          justifyItems="center"
          px={{ base: 6, md: 16 }}
          mb={20}
        >
          <MotionBox
            order={{ base: 2, md: i % 2 === 0 ? 1 : 2 }}
            initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading as="h3" fontSize="2xl" mb={4} color="pink.600">
              {work.title}
            </Heading>
            {work.text.map((t, idx) => (
              <Text key={idx} mb={4} color="gray.700" fontSize="lg">
                {t}
              </Text>
            ))}
          </MotionBox>
          <MotionBox
            order={{ base: 1, md: i % 2 === 0 ? 2 : 1 }}
            w="100%"
            initial={{ x: i % 2 === 0 ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {work.media}
          </MotionBox>
        </SimpleGrid>
      ))}
    </Box>
  );
};
