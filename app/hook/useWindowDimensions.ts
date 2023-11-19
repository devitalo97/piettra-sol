import { useState, useEffect } from 'react';

type WindowDimensions = {
  width: number | undefined;
  height: number | undefined;
  isMobile: boolean;
};

const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
    isMobile: false,
  });

  useEffect(() => {
    function handleResize(): void {
      const width = window.innerWidth;
      const isMobile = width < 768;

      setWindowDimensions({
        width,
        height: window.innerHeight,
        isMobile,
      });
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  }, []); // Array vazio garante que o efeito é executado apenas na montagem

  return windowDimensions;
};

export default useWindowDimensions;
