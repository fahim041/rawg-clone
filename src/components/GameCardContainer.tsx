import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function GameCardContainer({ children }: Props) {
  return (
    <Box
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform 0.15s ease-in-out',
      }}
      borderRadius={10}
    >
      {children}
    </Box>
  );
}
