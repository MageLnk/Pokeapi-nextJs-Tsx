import { useRouter } from "next/router";
// Interface
interface FavoriteCardPokemonProps {
  pokemonId: number;
}
// Style
import { Card, Grid } from "@nextui-org/react";
// App
const FavoriteCardPokemon = ({ pokemonId }: FavoriteCardPokemonProps) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} onClick={onFavoriteClicked}>
      <Card isHoverable isPressable css={{ padding: "10" }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};

export default FavoriteCardPokemon;
