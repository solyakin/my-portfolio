import React from "react";
import { Select, Flex, Box, useTheme } from "@chakra-ui/react";
import { darken, lighten } from "polished";

export default React.forwardRef((props, ref) => {
  const theme = useTheme();

  return (
    <Flex
      d="flex"
      alignItems="center"
      pos="relative"
      border="1px solid red"
      borderColor={lighten(0.1, theme.colors.accent)}
      borderRadius={3}
      bg={darken(0.1, theme.colors.accent)}
      w={120}
      __css={{
        ".select-box": {
          p: 0,
          pl: 0.8,
        },
      }}
    >
      <Box
        as="i"
        px={0.5}
        className="fa fa-moon-o"
        aria-hidden={true}
        __css={{
          fontSize: "2lg",
          color: "secondary",
        }}
      />
      <Select
        ref={ref}
        {...props}
        width="full"
        h={35}
        className="select-box"
        color={darken(0.1, theme.colors.secondary)}
        border="none"
        borderLeft="1px solid"
        fontSize="4xs"
        borderColor="primary"
        __css={{
          cursor: "pointer",
          appearance: "none",
        }}
        _hover={{
          bg: lighten(0.01, theme.colors.accent),
        }}
        _focus={{
          border: "1px solid primary",
          outline: "none",
        }}
      >
        <option value="default"> Default </option>
        <option value="light"> Light </option>
        <option value="dracula"> Dracula </option>
        <option value="material"> Material </option>
        <option value="monokai"> Monokai </option>
      </Select>
    </Flex>
  );
});
