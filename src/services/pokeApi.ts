const baseUrl = "https://pokeapi.co/api/v2";

const pokeApi = async (pokeUrlLimit: string) => {
  const response = await fetch(`${baseUrl}${pokeUrlLimit}`);
  const data = response.json();

  return data;
};

export default pokeApi;
