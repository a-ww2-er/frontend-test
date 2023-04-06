import "../styles/details.scss";
import { ReactComponent as EmptyStar } from "../../../assets/VectorEmptyStar.svg";
import { ReactComponent as FilledStar } from "../../../assets/VectorFilledStar.svg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DetailsContext } from "../../../context/globalContext";
import axios from "axios";
import { Loading } from "../atoms/Loading";

const UserPanel = () => {
  const [details, setDetails] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getUserDetailsFromApi = async () => {
      setIsLoading(true);
      const result = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/7"
      );
      setDetails(result.data);
      setIsLoading(false);
      console.log(details);
    };
    getUserDetailsFromApi();
  }, []);
  if (isLoading) {
    return (
      <div className="user_panel">
        <div className="user_panel_container">
          <div className="user_panel_user">
            <Loading />
          </div>
        </div>
      </div>
    );
  }
  const { profile, userName, accountBalance, accountNumber } = details;
  // console.log(details);
  // console.log(isLoading)
  return (
    <div className="user_panel">
      <div className="user_panel_container">
        <div className="user_panel_user">
          <div className="user_panel_user_avatar">
            {profile ? <img src={profile.avatar} /> : " "}
          </div>

          <div className="user_panel_user_account_name">
            <h2>{userName}</h2>
            <span>LSQFf587g90</span>
          </div>

          <div className="user_panel_user_tier">
            <p>User's tier</p>
            <span>
              <FilledStar />
              <EmptyStar />
              <EmptyStar />
            </span>
          </div>

          <div className="user_panel_user_account_balance">
            <h3>NGN {accountBalance}</h3>
            <p>{accountNumber}/Providus Bank</p>
          </div>
        </div>

        <nav>
          <Link to="#">General Details</Link>
          <Link to="#">Documents</Link>
          <Link to="#">Bank Details</Link>
          <Link to="#">Loans</Link>
          <Link to="#">Savings</Link>
          <Link to="#">App and System</Link>
        </nav>
      </div>
    </div>
  );
};

export default UserPanel;
