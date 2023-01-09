import { Box, Text } from "@chakra-ui/react";
import Router from "next/router";

export default function Logo() {
  return (
    <Box
      w={[50, 100]}
      pos="relative"
      fontFamily="cursiveFont"
      textAlign={["left", "right"]}
      alignSelf={["center", "self-start"]}
    >
      <Box d={["none", "block"]}>
        <Text pos="relative" letterSpacing="1px" fontSize={["md", "2lg"]}>
          Solomon
        </Text>
        <Text
          fontSize={["md", "2lg"]}
          pos="relative"
          color="secondary"
          top="-15px"
          left={["35px", "5px"]}
        >
          Akinlade
        </Text>
      </Box>
      <Box
        d={["block", "none"]}
        onClick={() => Router.push("/")}
        cursor="pointer"
      >
        <Text as="span" pos="relative" fontSize={["md", "2lg"]}>
          S
        </Text>
        <Text
          as="span"
          fontSize={["md", "2lg"]}
          pos="relative"
          color="secondary"
        >
          A
        </Text>
      </Box>
    </Box>
  );
}
