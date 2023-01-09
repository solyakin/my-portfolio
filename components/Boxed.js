import { Box } from "@chakra-ui/react";

export default function Boxed({ children }) {
  return (
    <Box bg="muted" px={1} py={3} pos="relative" mt={2}>
      {children}
    </Box>
  );
}
