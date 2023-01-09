import { useState } from "react";
import { Text, Box, Button, Collapse } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavItems from "./NavItems";

export default function NavBar() {
  const { pathname } = useRouter();
  const [show, setShow] = useState(false);

  const onToggle = () => setShow(!show);

  return (
    <Box w={[58, 58, "auto"]} pos="relative" zIndex={50} textAlign="center">
      <Button
        type="button"
        role="Menu Toggle"
        display={["inline-block", "inline-block", "none"]}
        border="none"
        bg="transparent"
        h="auto"
        m={0}
        p={0}
        _hover={{
          border: "none",
        }}
        _focus={{
          border: "none",
        }}
        _active={{
          bg: "transparent",
        }}
        onClick={onToggle}
      >
        <Text
          as="i"
          py={1.5}
          px={0}
          w="full"
          fontSize="3lg"
          display={["inline-block", "inline-block", "none"]}
          className={show ? "fa fa-times" : "fa fa-bars"}
          aria-hidden={true}
          _hover={{
            opacity: 0.9,
          }}
        ></Text>
      </Button>
      <Collapse in={show} animateOpacity>
        <NavItems
          display={["flex", "flex", "none"]}
          pos="absolute"
          w="full"
          zIndex="1000"
          flexDirection={["column", "column", "row"]}
          borderRadius={[40, 40, 0]}
          onClose={onToggle}
        />
      </Collapse>
      {pathname !== "/" && (
        <NavItems pos="relative" display={["none", "none", "block"]} />
      )}
    </Box>
  );
}
