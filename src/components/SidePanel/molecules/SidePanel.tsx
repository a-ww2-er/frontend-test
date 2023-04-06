import SidePanelLink from "../atoms/SidePanelLink";
import { ReactComponent as Organizations } from "../../../assets/Vector.svg";
import { ReactComponent as HomeIcon } from "../../../assets/Home.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import "../styles/sidepanel.scss";
import Category from "./Category";
import { NavLink } from "react-router-dom";

const SidePanel = () => {
  return (
    <nav className="side_panel">
      <div className="side_panel_main_links">
        <Category>
          <NavLink to="">
            <Organizations />
            Switch Organizations
            <IoMdArrowDropdown />
          </NavLink>

          <NavLink to="/dashboard">
            <HomeIcon />
            Dashboard
          </NavLink>
        </Category>
      </div>

      <Category title="CUSTOMERS">
        <SidePanelLink text="Users" to="/user">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
      </Category>

      <Category title="BUSINESSES">
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
      </Category>
      <Category title="SETTINGS">
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
        <SidePanelLink text="Dashboard" to="">
          <HomeIcon />
        </SidePanelLink>
      </Category>
    </nav>
  );
};

export default SidePanel;
