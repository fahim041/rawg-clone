import { GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import useGame from '../hooks/useGame';
import GameTrailer from '../components/GameTrailer';
import GameScreenshots from '../components/GameScreenshots';
import useTrailers from '../hooks/useTrailers';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, isError } = useGame(slug!);
  const {
    data: trailer,
    isLoading: trailerLoading,
    isError: trailerError,
  } = useTrailers(game?.id!);

  const trailerData = trailer?.results[0];

  if (isLoading) return <Spinner />;

  if (isError || !game) throw new Error('Game not found');

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          {trailerData ? (
            <GameTrailer
              trailer={trailer?.results[0]}
              error={trailerError}
              isLoading={trailerLoading}
            />
          ) : (
            <GameScreenshots gameId={game.id} />
          )}
        </GridItem>
      </SimpleGrid>
      {trailerData && <GameScreenshots gameId={game.id} />}
    </>
  );
};

export default GameDetailPage;
