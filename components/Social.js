import { Flex, Text, Link } from "@chakra-ui/react";

const Links = [
  {
    href: "https://github.com/solyakin",
    classes: "fa fa-github social",
    label: "github",
  },
  {
    href: "mailto:solomon.akinlade19@gmail.com",
    classes: "fa fa-envelope social",
    label: "gmail",
  },
];

export default function Social() {
  return (
    <Flex w={80} pos="relative" zIndex={50}>
      {Links.map((link) => (
        <Link
          className="social"
          href={link.href}
          key={link.label}
          aria-label={link.label}
          rel="noopener noreferrer"
          px={0.6}
          _hover={{
            opacity: "0.8 !important",
          }}
          _focus={{
            border: "none",
            outline: "none",
          }}
          isExternal
        >
          <Text
            as="i"
            px={0}
            fontSize="lg"
            className={link.classes}
            aria-hidden={true}
          ></Text>
        </Link>
      ))}
    </Flex>
  );
}
