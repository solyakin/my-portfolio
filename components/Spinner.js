import { Flex, Spinner as ChakraSpinner } from '@chakra-ui/react';

function Spinner({ isTimeOut }) {
  return (
    <>
      {!isTimeOut && (
        <Flex
          pos="relative"
          flexWrap="wrap"
          align="center"
          h={200}
          justify="center">
          <ChakraSpinner color="secondary" size="xl" />
        </Flex>
      )}
    </>
  );
}

export default Spinner;
