import { AiOutlineSearch } from "react-icons/ai";
import Input from "../../Login/atoms/Input";

const SearchField = () => {
  return (
    <div className="search">
      <Input placeholder="Search for anything" value="" type="search" />
      <span>
        <AiOutlineSearch />
      </span>
    </div>
  );
};

export default SearchField;
