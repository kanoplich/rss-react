import { useEffect, useLayoutEffect, useRef } from 'react';

export const useFetch = (callback: () => void, query: string) => {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    callbackRef.current();
  }, [query]);
};

export default useFetch;
