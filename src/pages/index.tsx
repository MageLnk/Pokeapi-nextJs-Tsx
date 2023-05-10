import { GetStaticProps, NextPage } from "next";
// Components
import { PokemonCard } from "../components/pokemon";
import { Layout } from "../components/layouts";
// Interfaces
import { SmallPokemon, PokemonListResponse } from "../interfaces";
interface HomePageProps {
  pokemons: SmallPokemon;
}
// Apis
import { pokeApi } from "../services";
// Styles
import { Grid } from "@nextui-org/react";
// App
const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <Layout title="Listado de pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(({ id, name, img }) => (
          <PokemonCard key={id} id={id} name={name} img={img} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // Acá debería ir la interfaz de pokemon-list, pero no funciona por alguan razón
  const resp: PokemonListResponse = await pokeApi("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = resp.results.map((pokeDataResp, i) => ({
    ...pokeDataResp,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
