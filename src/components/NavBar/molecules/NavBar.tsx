import Logo from "../../Login/atoms/Logo";
import SearchField from "../atoms/SearchField";
import "../styles/nav.scss";
import img from '../../../assets/image4.png'
import { AiOutlineBell } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { useContext, useState } from "react";
import { AppContext } from "../../../context/globalContext";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const {showNav, setShowNav} = useContext(AppContext)
  const handleSearch = () => {
    console.log(searchValue);
  };
  if (window.innerWidth < 740) {
    setShowNav(true)
  }

  return (
    <nav className="navigation">
      <div
          className="nav_toggle"
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
        
          {!showNav ? <FaTimes className="close_icon" />:  <FaBars className="icon" /> }
          <Logo />
        </div>
      <SearchField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        searchValue={searchValue}
      />

      <ul>
        <li>
          <a href="#">Docs</a>
        </li>
        <li>
          <AiOutlineBell />
        </li>
        <li>
          <img
            src={img}
            alt="Profile picture"
          />
        </li>
        <li>
          <span className="dropdown">
            <p>Adedeji</p>
            <IoMdArrowDropdown />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
