import {
  Text,
  Box,
  Heading,
  Button,
  useTheme
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { darken } from 'polished';
import Link from 'next/link';
import NavItems from './NavItems';
import Social from './Social';

const spin = keyframes`
  0% { content:"😇"; }
  5% { content:"😉"; }
  10% { content:"😍"; }
  20% { content:"😊"; }
  25% { content:"😂"; }
  30% { content:"😃"; }
  35% { content:"💛"; }
  40% { content:"👋"; }
  50% { content: "😎"; }
  55% { content: "😋"; }
  60% { content: "😅"; }
  70% { content: "😀"; }
  75% { content: "😏"; }
  80% { content: "😆"; }
  85% { content: "😜"; }
  90% { content: "😅"; }
  100% { content: "🇳🇬"; }
`;

function FullName() {
  return (
    <>
      <Box className="salute" fontSize={['lg', '2lg']}>
        <Text
          as="span"
          fontFamily="cursiveFont"
          mr={1}
          _before={{
            content: '""',
            animation: `${spin} 4s linear infinite alternate both`
          }}>
          Hi,
        </Text>
        I'm
      </Box>
      <Heading
        className="fullname"
        as="h1"
        wordwrap="break-word"
        fontSize={['3lg', '3xl', '4xl']}
        fontWeight="thick"
        lineHeight="none">
        <Text mr={[1, 1.5]} as="span">
          Solomon
        </Text>
        <Text color="secondary" as="span">
          Akinlade
        </Text>
      </Heading>
    </>
  );
}

function Role() {
  return (
    <Heading
      as="h3"
      className="role"
      aria-label="role"
      lineHeight="base"
      fontSize={['md', '2lg', 'xl']}
      fontWeight="medium">
      {' '}
      Frontend Web Developer
    </Heading>
  );
}

export default function Info() {
  const theme = useTheme();

  return (
    <Box pos="relative" zIndex={10}>
      <NavItems mb={1} display={['none', 'none', 'flex']} />
      <FullName />
      <Role />
      <Social />
      <Link href="/projects">
        <Button
          className="portfolio-btn"
          type="button"
          role="button"
          w={120}
          h={38.5}
          color="primary"
          bg="secondary"
          borderRadius={0}
          fontSize="md"
          fontWeight="thick"
          py={1}
          px={0.5}
          mt={0.5}
          _hover={{
            bg: darken(0.1, theme.colors.secondary)
          }}>
          Portfolio
        </Button>
      </Link>
    </Box>
  );
}
