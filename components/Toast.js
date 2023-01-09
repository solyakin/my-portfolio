import React from 'react';
import { useToast, Button } from '@chakra-ui/react';
import useTimeOut from './useTimeOut';

export default function Toast({ ...rest }) {
  const toast = useToast();
  const [isTimeOut] = useTimeOut({
    timeOutDelay: 12000,
    endTimeOut: true
  });
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    if (isTimeOut) {
      toast.closeAll();
      buttonRef.current.click();
    }
  }, [isTimeOut]);

  return (
    <>
      {isTimeOut && (
        <Button
          __css={{
            visibility: 'hidden',
            opacity: 0
          }}
          ref={buttonRef}
          onClick={() =>
            toast({
              title: 'Hi',
              description: 'I am open to opportunities.',
              status: 'error',
              duration: 15000,
              isClosable: true,
              ...rest
            })
          }></Button>
      )}
    </>
  );
}
