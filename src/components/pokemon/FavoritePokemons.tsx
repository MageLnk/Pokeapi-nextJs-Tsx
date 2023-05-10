import { FC } from "react";
// Components
import FavoriteCardPokemon from "./FavoriteCardPokemon";
// Interface
interface FavoritePokemonsProps {
  pokemons: number[];
}
// Style
import { Grid } from "@nextui-org/react";
// App
const FavoritePokemons: FC<FavoritePokemonsProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoritePokemons;
