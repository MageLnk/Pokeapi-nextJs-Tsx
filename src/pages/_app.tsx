import type { AppProps } from "next/app";
// Style
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../themes";
import "@/styles/globals.css";
// App
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

export default App;
