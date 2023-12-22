import { Trailer } from '../interfaces/Trailer';

interface Props {
  trailer: Trailer;
  error: boolean;
  isLoading: boolean;
}

const GameTrailer = ({ trailer, isLoading, error }: Props) => {
  if (isLoading) return null;

  if (error) throw error;

  return (
    <video src={trailer.data[480]} poster={trailer.preview} controls></video>
  );
};

export default GameTrailer;
