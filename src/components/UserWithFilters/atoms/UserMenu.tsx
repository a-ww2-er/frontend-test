import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { ReactComponent as Blacklist } from "../../../assets/VectorBlacklist.svg";
import { ReactComponent as Activate } from "../../../assets/VectorActivateUser.svg";
const UserMenu = () => {
  return (
    <ul>
      <li>
        <AiOutlineEye /> <Link to="">View details</Link>
      </li>
      <li>
        <Blacklist /> <Link to="">Blacklist User</Link>
      </li>
      <li>
        <Activate /> <Link to="">Activate User</Link>
      </li>
    </ul>
  );
};

export default UserMenu;
