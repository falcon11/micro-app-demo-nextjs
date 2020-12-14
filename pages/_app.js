import '../styles/globals.css'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isAlitaMicroLoaded, setIsAlitaMicroLoaded] = useState(false);
  useEffect(() => {
    const initAlita = async () => {
      await import('alita-micro');
      setIsAlitaMicroLoaded(true);
    }
    initAlita();
  }, []);
  return isAlitaMicroLoaded ? <Component {...pageProps} /> : null;
}

export default MyApp
