import Button from "../../components/Login/atoms/Button";
import BackButton from "../../components/UserDetails/atoms/BackButton";
import UserDetails from "../../components/UserDetails/molecules/UserDetails";
import UserPanel from "../../components/UserDetails/molecules/UserPanel";
import "../../styles/detailspage.scss";
const UserDetailsPage = () => {
  return (
    <div className="details_container">
      <BackButton />
      <div className="details_container_title">
        <h1>User Details</h1>{" "}
        <span>
          <Button
            onClick={() => console.log("I")}
            text="Blacklist User"
            className="blacklist"
          />
          <Button
            onClick={() => console.log("I")}
            text="Activate User"
            className="activate"
          />
        </span>
      </div>
      <UserPanel />
      <UserDetails />
    </div>
  );
};

export default UserDetailsPage;
