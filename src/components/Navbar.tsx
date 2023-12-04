import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ThemeSwitch from './ThemeSwitch';
import SearchInput from './SearchInput';

export default function Navbar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ThemeSwitch />
    </HStack>
  );
}
