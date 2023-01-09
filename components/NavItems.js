import { Flex, Text, Box, useTheme } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { darken } from "polished";

const Navs = [
  { name: "Home", href: "/", classes: "fa fa-home" },
  { name: "About", href: "/about", classes: "fa fa-user" },
  { name: "Projects", href: "/projects", classes: "fa fa-briefcase" },
];

export default function NavItems({ onClose, ...rest }) {
  const { pathname } = useRouter();
  const theme = useTheme();

  return (
    <Flex
      alignItems="center"
      textAlign="center"
      bg={["primary", "primary", "transparent"]}
      {...rest}
    >
      {Navs.map((nav) => {
        return (
          <Link href={nav.href} key={nav.name} passHref>
            <Box
              className={pathname === "/" ? "home-link" : "nav-link"}
              onClick={onClose}
              display="inline-block"
              as="span"
              py={[0, 0, 0.6]}
              color={pathname === nav.href ? "primary" : "text"}
              bg={pathname === nav.href ? "text" : "transparent"}
              fontWeight={pathname === nav.href ? "bold" : "medium"}
              borderRadius={[40, 40, 0]}
              w={["60px", "60px", "72px"]}
              _hover={{
                textDecoration: "none",
                color:
                  pathname === nav.href
                    ? darken(0.1, theme.colors.primary)
                    : darken(0.25, theme.colors.text),
              }}
            >
              <Text
                as="span"
                w="auto"
                display={["none", "none", "inline-block"]}
              >
                {nav.name}
              </Text>
              <Text
                as="i"
                py={1.5}
                px={0}
                fontSize="3lg"
                display={["inline-block", "inline-block", "none"]}
                className={nav.classes}
                aria-hidden={true}
              ></Text>
            </Box>
          </Link>
        );
      })}
    </Flex>
  );
}
