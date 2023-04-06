import "../styles/details.scss";
import { ReactComponent as EmptyStar } from "../../../assets/VectorEmptyStar.svg";
import { ReactComponent as FilledStar } from "../../../assets/VectorFilledStar.svg";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../atoms/Loading";
import { AppContext } from "../../../context/globalContext";
import Error404 from "../../../pages/error404/Error404";
type prr={
  id: string | number
}
const UserPanel = () => {
  const { isLoading, details, setSelectedUser, selectedUser, errors , setErrors} =
    useContext(AppContext);
  const { id } = useParams();
  setSelectedUser(id);
  console.log(id,"selected", selectedUser);

  if (errors) {
  
    return (
      <div style={{textAlign:"center"}}>
        <h1>Error 500 </h1><h3>Server Error</h3>
   
      </div>
    );
    
  }
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
