import { HStack, Image, ListItem, List, Spinner, Button } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-urls';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

export default function GenreList({onSelectGenre}: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={() => onSelectGenre(genre)} fontSize="lg" variant="link">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
