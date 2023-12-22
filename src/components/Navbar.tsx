import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ThemeSwitch from './ThemeSwitch';
import SearchInput from './SearchInput';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate('/');
  };

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" cursor="pointer" onClick={onClickLogo} />
      <SearchInput />
      <ThemeSwitch />
    </HStack>
  );
}
