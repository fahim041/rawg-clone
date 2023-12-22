import { useState } from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

export default function SearchInput() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchText(search);
        navigate('/');
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
        {search && (
          <InputRightElement
            cursor="pointer"
            onClick={() => {
              setSearch('');
              setSearchText('');
            }}
            children={<MdOutlineClose />}
          />
        )}
      </InputGroup>
    </form>
  );
}
