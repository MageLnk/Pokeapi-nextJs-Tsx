import { pokeApi } from "../services";
// Interfaces
import { Pokemon } from "../interfaces";

const getPokemonInfo = async (nameOrId: string) => {
  const resp: Pokemon = await pokeApi(`/pokemon/${nameOrId}`);

  return {
    id: resp.id,
    name: resp.name,
    sprites: resp.sprites,
  };
};

export default getPokemonInfo;
