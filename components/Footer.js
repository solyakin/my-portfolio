import { Flex, Text, Badge } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      py={1.5}
      w="full"
      justify="center"
      textAlign="center"
      opacity={0.5}
      flexDirection="column"
    >
      <Text fontWeight="thick" fontSize="xs" w="full" py={0.6}>
        © {new Date().getFullYear()} OS. All Right Reserved.
      </Text>
      <Text fontSize="xs" w="full">
        Built with <Badge>NextJS</Badge> <Badge>Chakra UI</Badge> and{" "}
        <Badge>Vercel</Badge>
      </Text>
    </Flex>
  );
}
