import "../styles/globals.css";
import { useEffect, useState } from "react";
import Plugins from "../plugins";

function MyApp({ Component, pageProps }) {
  const [isAlitaMicroLoaded, setIsAlitaMicroLoaded] = useState(false);
  useEffect(() => {
    const initAlita = async () => {
      await import("alita-micro");
      // window.alitanative 存在：表示是 微应用 环境 或 微应用开发环境，此时要等待 WebViewJavascriptBridge 初始化完成
      if (window.alitanative && !window.WebViewJavascriptBridge) {
        document.addEventListener("AlitaBridgeReady", () => {
          console.log('hello ready')
          setIsAlitaMicroLoaded(true);
          Plugins.forEach((plugin) => {
            window.WebViewJavascriptBridge.registerPlugin(plugin);
          });
        });
      } else {
        setIsAlitaMicroLoaded(true);
        Plugins.forEach((plugin) => {
          window?.WebViewJavascriptBridge?.registerPlugin(plugin);
        });
      }
    };
    initAlita();
  }, []);
  return isAlitaMicroLoaded ? <Component {...pageProps} /> : null;
}

export default MyApp;
