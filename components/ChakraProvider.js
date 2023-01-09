import { ChakraProvider } from '@chakra-ui/react';

const RootThemeProvider = ({ theme, children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default RootThemeProvider;
