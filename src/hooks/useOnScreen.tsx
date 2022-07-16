import { useCallback, useEffect, useMemo, useState } from 'react';

import { HEADER_PADDING_Y } from '@components/Header';

const useOnScreen = (ref: React.MutableRefObject<null | HTMLDivElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const handleObserver = useCallback((entries) => {
    const [entry] = entries;
    setIntersecting(entry.isIntersecting);
  }, []);

  const observer = useMemo(
    () =>
      new IntersectionObserver(handleObserver, {
        rootMargin: HEADER_PADDING_Y,
      }),
    [],
  );

  const unobserve = useCallback(() => {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return { isIntersecting, unobserve };
};

export default useOnScreen;
