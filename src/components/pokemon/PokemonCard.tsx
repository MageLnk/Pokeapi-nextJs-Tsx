import { FC } from "react";
import { useRouter } from "next/router";
// Interfaces
import { SmallPokemon } from "../../interfaces";
interface PokemonCardProps {
  id: number;
  img: string;
  name: string;
}
// Styles
import { Card, Grid, Row, Text } from "@nextui-org/react";
// App
const PokemonCard: FC<PokemonCardProps> = ({ id, img, name }) => {
  const router = useRouter();
  const onPokemonClick = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable onClick={onPokemonClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
