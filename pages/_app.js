import '../styles/globals.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const initAlita = async () => {
      await import('alita-micro');
    }
    initAlita();
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
