import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import ApiClient, { FetchResponse } from '../services/api-client';
import { Platform } from './usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: async ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 20 * 60 * 1000,
  });

export default useGames;
