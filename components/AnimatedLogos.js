import { Box, Grid } from '@chakra-ui/react';

const Logos = [
  {
    src: '/logos/adobe-photoshop-express-seeklogo.com.svg',
    alt: 'Photoshop Logo'
  },
  {
    src: '/logos/bootstrap-seeklogo.com.svg',
    alt: 'Bootstrap Logo'
  },
  {
    src: '/logos/git-seeklogo.com.svg',
    alt: 'Git Logo'
  },
  {
    src: '/logos/github-seeklogo.com.svg',
    alt: 'Github Logo'
  },
  {
    src: '/logos/html5-with-wordmark-color.svg',
    alt: 'Html5 Logo'
  },
  {
    src: '/logos/javascript-js-seeklogo.com.svg',
    alt: 'Javascript Logo'
  },
  {
    src: '/logos/jquery-seeklogo.com.svg',
    alt: 'Jquery Logo'
  },
  {
    src: '/logos/react-seeklogo.com.svg',
    alt: 'React Logo'
  },
  {
    src: '/logos/sass-seeklogo.com.svg',
    alt: 'Sass Logo'
  },
  {
    src: '/logos/node-node-js-seeklogo.com.svg',
    alt: 'NodeJs Logo'
  },
  {
    src: '/logos/php-seeklogo.com.svg',
    alt: 'Php Logo'
  },
  {
    src: '/logos/js_webpack-icon.svg',
    alt: 'Webpack Logo'
  }
];

export default function AnimatedLogos() {
  return (
    <Box
      pos="absolute"
      top={20}
      mx="auto"
      w="90%"
      h="80%"
      overflow="hidden"
      zIndex="hidden">
      <Grid
        gap={2}
        templateColumns="1fr 1fr"
        alignItems="center"
        justifyContent="center">
        {Logos.map((img) => (
          <img
            className="animated-logo"
            key={img.alt}
            src={img.src}
            alt={img.alt}
            style={{
              margin: 'auto',
              width: '90px',
              height: '90px',
              objectFit: 'contain',
              opacity: 0
            }}
          />
        ))}
      </Grid>
    </Box>
  );
}
