import { AiOutlineSearch } from "react-icons/ai";
import Input from "../../Login/atoms/Input";

type SearchProps = {
  searchValue: string;
  onChange: any
}

const SearchField = ({searchValue, onChange}: SearchProps) => {
  return (
    <div className="search">
      <Input placeholder="Search for anything" onChange={onChange} value={searchValue} type="search" />
      <span>
        <AiOutlineSearch />
      </span>
    </div>
  );
};

export default SearchField;
