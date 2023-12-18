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

export default function SearchInput() {
  const [search, setSearch] = useState('');
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchText(search);
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
