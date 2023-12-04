import { Card, Image, CardBody, Heading, HStack } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIcons from './PlatformIcon';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-urls';
import Emoji from './Emoji';

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        borderRadius={10}
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}
