import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/global.css";

const StaminaApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default StaminaApp;
