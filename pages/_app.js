import "../styles/globals.css";
import { useEffect, useState } from "react";
import Plugins from "../plugins";

function MyApp({ Component, pageProps }) {
  const [isAlitaMicroLoaded, setIsAlitaMicroLoaded] = useState(false);
  useEffect(() => {
    const initAlita = async () => {
      await import("alita-micro");
      document.addEventListener("AlitaBridgeReady", () => {
        setIsAlitaMicroLoaded(true);
        Plugins.forEach((plugin) => {
          window.WebViewJavascriptBridge.registerPlugin(plugin);
        });
      });
    };
    initAlita();
  }, []);
  return isAlitaMicroLoaded ? <Component {...pageProps} /> : null;
}

export default MyApp;
