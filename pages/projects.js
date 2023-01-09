import dynamic from 'next/dynamic';
import { Box, Heading, useTheme } from '@chakra-ui/react';
import Boxed from '../components/Boxed';

const ProjectCards = dynamic(
  () => import('../components/ProjectsCards'),
  { ssr: false }
);

export default function Projects() {
  const theme = useTheme();

  return (
    <Boxed>
      <Heading
        as="h2"
        fontSize={['2xl', '3xl']}
        color="secondary"
        fontFamily="cursiveFont"
        fontWeight="thick"
        textShadow={`0 1.8px 1px ${theme.colors.text}`}
        filter={`drop-shadow(0 1.5px 1px ${theme.colors.text}`}
        mb={[30, 30, 0]}>
        Projects
      </Heading>
      <Box mt={3} px={[0.6, 3]}>
        <ProjectCards />
      </Box>
    </Boxed>
  );
}

Projects.meta = {
  title: 'Projects'
};
