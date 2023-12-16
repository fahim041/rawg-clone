import { Text, SimpleGrid, Box, Spinner } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';
import React from 'react';

interface Props {
  gameQeury: GameQuery;
}

export default function GameGrid({ gameQeury }: Props) {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQeury);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchedGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="10px">
      <InfiniteScroll
        dataLength={fetchedGameCount}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4,
          }}
          spacing={6}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page?.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
}
