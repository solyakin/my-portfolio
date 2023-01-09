import { Text, Flex, Heading, useTheme } from "@chakra-ui/react";

export default function WhoAmI() {
  const theme = useTheme();

  return (
    <Flex
      pos="relative"
      px={2}
      py={4}
      width={["96%", "80%"]}
      bg="accent"
      mx="auto"
      align="center"
      direction={["column", "column", "row"]}
      _before={{
        pointerEvents: "none",
        pos: "absolute",
        content: '""',
        width: "25px",
        height: "25px",
        top: 0,
        left: 0,
        bg: `linear-gradient(135deg, ${theme.colors.accent} 45%, ${theme.colors.text} 50%, ${theme.colors.text} 56%, ${theme.colors.secondary} 80%)`,
        zIndex: 100,
      }}
    >
      <Heading
        as="h2"
        fontSize={["2xl", "3xl"]}
        textAlign="center"
        fontFamily="cursiveFont"
        fontWeight="thick"
        width={["100%", 250]}
        mb="30px"
      >
        Who
        <Text as="span" display="block" color="secondary">
          Am I?
        </Text>
      </Heading>
      <Text
        as="p"
        fontSize={["lg", "2lg"]}
        width={["98%", "95%", "calc(100% - 250px)"]}
        lineHeight="short"
        mt={[3, 3, 3, 0]}
      >
        I'm a{" "}
        <Text as="strong" color="secondary">
          Front-End Developer
        </Text>{" "}
        from{" "}
        <Text
          as="strong"
          bgGradient="linear(flag.100 20%, flag.200, flag.100)"
          backgroundClip="text"
        >
          Nigeria{" "}
        </Text>{" "}
        who enjoys creating user-friendly websites and web applications. I write
        semantic, scalable, easy-to-maintain, cross-browser compatible, and
        efficient standards-based code.
        <br />
        When I am not coding, I watch movies, play chess or learn new things.
      </Text>
    </Flex>
  );
}
