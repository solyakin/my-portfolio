import { Box } from '@chakra-ui/react';

export default function Loader({ ...rest }) {
  return (
    <Box
      pos="fixed"
      top={0}
      w="100vw"
      h="100vh"
      left={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      m={0}
      p={0}
      overflow="hidden"
      bg="radial-gradient( #1d445e, #000)"
      zIndex={1000}
      {...rest}>
      <img
        src="/static/solo.svg"
        alt="Solomon Akinlade"
        aria-label="Solomon Loader"
        style={{
          position: 'relative',
          width: '250px',
          height: '250px',
          objectFit: 'contain'
        }}
      />
    </Box>
  );
}
