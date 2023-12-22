import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ThemeSwitch from './ThemeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ThemeSwitch />
    </HStack>
  );
}
