import Image from "next/image";
import { Text, Spacer, Link } from "@nextui-org/react";
import NextLink from "next/link";

// App
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0 20px",
        backgroundColor: "#111111",
      }}
    >
      <NextLink href={"/"}>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
          alt="Icono de la app"
          width={70}
          height={70}
        />
      </NextLink>

      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h2>
        okemon
      </Text>

      <Spacer css={{ flex: 1 }} />

      <NextLink href={"/favorites"}>
        <Text color="white">Favoritos</Text>
      </NextLink>
    </div>
  );
};

export default Navbar;
