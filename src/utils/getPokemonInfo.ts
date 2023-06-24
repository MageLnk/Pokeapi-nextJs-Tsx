import { pokeApi } from "../services";
// Interfaces
import { Pokemon } from "../interfaces";

const getPokemonInfo = async (nameOrId: string) => {
  try {
    const resp: Pokemon = await pokeApi(`/pokemon/${nameOrId}`);

    return {
      id: resp.id,
      name: resp.name,
      sprites: resp.sprites,
    };
  } catch (error) {
    return null;
  }
};

export default getPokemonInfo;
