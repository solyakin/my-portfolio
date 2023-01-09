import { useEffect, useState } from 'react';

const useTimeOut = ({ timeOutDelay, endTimeOut }) => {
  const [isTimeOut, setIsTimeOut] = useState(false);

  useEffect(() => {
    let timer = null;
    if (typeof window !== 'undefined' && endTimeOut) {
      timer = setTimeout(() => {
        setIsTimeOut(true);
      }, timeOutDelay);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [endTimeOut]);

  return [isTimeOut];
};

export default useTimeOut;
