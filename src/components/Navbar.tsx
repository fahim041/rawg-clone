import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ThemeSwitch from './ThemeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

export default function Navbar({ onSearch }: Props) {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ThemeSwitch />
    </HStack>
  );
}
