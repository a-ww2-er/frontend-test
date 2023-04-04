import { ReactComponent as BackToUsers } from "../../../assets/VectorBackToUsers.svg";
import { Link } from "react-router-dom";
const BackButton = () => {
  return (
    <Link className="go_back_link" to="/dashboard">
      <BackToUsers />
      Back to Users
    </Link>
  );
};

export default BackButton;
