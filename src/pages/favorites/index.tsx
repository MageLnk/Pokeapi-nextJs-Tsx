// Components
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { FavoritePokemons } from "../../components/pokemon";
// Utils
import { handleFavoritesPokemon } from "../../utils";
// App
const FavoritePage = () => {
  const [favoritePokemons, setFavoritesProkemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesProkemons(handleFavoritesPokemon.favoritePokemonList());
  }, []);

  return (
    <Layout title="Pokemons - Favorites">
      {favoritePokemons.length === 0 ? <NoFavorites /> : <FavoritePokemons pokemons={favoritePokemons} />}
    </Layout>
  );
};

export default FavoritePage;
