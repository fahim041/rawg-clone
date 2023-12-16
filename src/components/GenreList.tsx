import {
  HStack,
  Image,
  ListItem,
  List,
  Spinner,
  Button,
  Heading,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-urls';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export default function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genre
      </Heading>
      <List>
        {data &&
          data.results.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                  variant="link"
                  fontWeight={
                    selectedGenre?.id === genre.id ? 'bold' : 'normal'
                  }
                  whiteSpace="normal"
                  textAlign="left"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
}
