import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Maven_Pro } from "@next/font/google";
const maven_Pro = Maven_Pro({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --maven_Pro-font: ${maven_Pro.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
