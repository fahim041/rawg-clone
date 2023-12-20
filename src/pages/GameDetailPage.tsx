import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Heading, Spinner, Text } from '@chakra-ui/react';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, isError } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (isError || !game) throw new Error('Game not found');

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
