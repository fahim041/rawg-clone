import { useState } from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';

interface Props {
  onSearch: (searchText: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
  const [search, setSearch] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(search);
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
              onSearch('');
            }}
            children={<MdOutlineClose />}
          />
        )}
      </InputGroup>
    </form>
  );
}
