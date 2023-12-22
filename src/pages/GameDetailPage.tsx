import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Heading, Spinner } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, isError } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (isError || !game) throw new Error('Game not found');

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
