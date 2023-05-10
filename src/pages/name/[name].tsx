import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
// Components
import { Layout } from "../../components/layouts";
// Interfaces
import { Pokemon, PokemonListResponse } from "../../interfaces";
interface PokemonPageProps {
  pokemon: Pokemon;
}
// Utils
import { pokeApi } from "../../services";
// Styles
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";
// Utils
import { getPokemonInfo, handleFavoritesPokemon } from "../../utils";
// App
const PokemonByNamePage: NextPage<PokemonPageProps> = ({ pokemon }) => {
  const [inFavoritesText, setInFavoritesText] = useState("Eliminar de favoritos");
  const [isInFavorites, setIsInFavorites] = useState(handleFavoritesPokemon.checkFavoritesPokemon(pokemon.id));

  const onToggleFavorite = (id: number) => {
    handleFavoritesPokemon.toggleFavorite(id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({ zIndex: 999, particleCount: 1000, spread: 200, angle: -100, origin: { x: 1, y: 0 } });
  };

  useEffect(() => {
    if (!isInFavorites) {
      setInFavoritesText("Guardar en favoritos");
      return;
    }
    setInFavoritesText("Eliminar de favoritos");
  }, [isInFavorites]);

  return (
    <Layout title={`Pokemon ${pokemon.name} - Data`}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button color="gradient" ghost={!isInFavorites} onPress={() => onToggleFavorite(pokemon.id)}>
                <span>{inFavoritesText}</span>
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container display="flex" direction="row" gap={0}>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const resp: PokemonListResponse = await pokeApi("/pokemon?limit=151");

  const buildParams = () =>
    resp.results.map((pokemonInfo) => ({
      params: { name: pokemonInfo.name },
    }));

  // Hay que considerar, que en este proceso y en todos los posibles, la información que pasamos para que el sitio
  // se guarde estaticamente, sea la justa que ocupamos. No guardar información demás.

  return {
    paths: buildParams(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const pokemon = await getPokemonInfo(name);

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonByNamePage;
