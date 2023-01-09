import { useEffect, useRef } from "react";
import { Text, Box, Flex, Heading, useTheme } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { SimpleGrid } from "@chakra-ui/react/dist/chakra-ui-react.cjs";

gsap.registerPlugin(ScrollTrigger);

const SkillSets = {
  Proficient: [
    "HTML5",
    "REACT & REDUX",
    "NEXTJS",
    "TYPESCRIPT",
    "SASS",
    "JAVASCRIPT",
    "BOOTSTRAP",
  ],
  Intermediate: [
    "ANT DESIGN",
    "CHAKRA UI",
    "TAILWIND CSS",
    "WEB3JS",
    "SOLIDITY",
    "JQUERY",
    "GIT & GITHUB",
  ],
  Familiar: [
    "NODE", 
    "EXPRESS",
    "GRAPHQL",
    "REACT TESTING LIBRARY",
  ],
};

function glow(color) {
  return keyframes`
    0% {
      text-shadow: 0px 0px 0px ${color};
   }
   100% {
      text-shadow: 0px 3px 5px ${color};
   }
`;
}

export default function Skills() {
  const theme = useTheme();
  const skillRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: skillRef.current,
            start: "top 80%",
            end: "bottom top",
          },
        })
        .fromTo(
          ".skill",
          {
            opacity: 0,
            visibility: "hidden",
          },
          {
            duration: 0.25,
            stagger: 0.2,
            opacity: 1,
            visibility: "visible",
          }
        );
    }
  }, []);

  return (
    <Box
      ref={skillRef}
      pos="relative"
      px={2}
      py={4}
      width={["96%", "80%"]}
      bg="accent"
      _before={{
        pos: "absolute",
        pointerEvents: "none",
        position: "absolute",
        content: '""',
        width: "25px",
        height: "25px",
        top: 0,
        right: 0,
        bg: `linear-gradient(225deg, ${theme.colors.secondary} 45%, ${theme.colors.text} 50%, ${theme.colors.text} 56%, ${theme.colors.text} 80%)`,
        zIndex: 100,
      }}
      mt={4}
      mx="auto"
    >
      <Heading
        as="h2"
        fontSize={["2xl", "3xl"]}
        textAlign="center"
        fontFamily="cursiveFont"
        fontWeight="thick"
        animation={`${glow(
          theme.colors.text
        )} 2s ease infinite alternate both}`}
        width={["100%", 250]}
      >
        Skills
      </Heading>
      <SimpleGrid
        px={2}
        py={3}
        textAlign="center"
        gridTemplateColumns="repeat(auto-fit, minmax(180px, 1fr))"
        gap="30px"
      >
        {Object.entries(SkillSets).map(([key, skill], index) => {
          return (
            <Box key={index + key} w="full" mx={[0, 0, 0, "auto"]}>
              <Heading
                as="h3"
                fontSize={["2lg", "3lg", "xl"]}
                fontFamily="cursiveFont"
                fontWeight="thick"
                color="secondary"
                py={1}
                letterSpacing={3}
              >
                {key}
              </Heading>
              {skill.map((language, index) => {
                return (
                  <Text
                    key={index + language}
                    className="skill"
                    fontSize={["md", "lg"]}
                    opacity={0}
                    py={0.6}
                  >
                    {language}
                  </Text>
                );
              })}
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
