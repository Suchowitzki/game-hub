import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        name="search"
        borderRadius={20}
        placeholder="Search..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
