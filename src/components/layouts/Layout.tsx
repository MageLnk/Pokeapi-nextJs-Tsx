import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";
// Type
interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
}
// Utils
const origin = typeof window === "undefined" ? "" : window.location.origin;
// App
const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Mighty MageLink" />
        <meta name="description" content={`Información sobre el ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/imgs/banner.png`} />
      </Head>

      <Navbar />

      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};

export default Layout;
