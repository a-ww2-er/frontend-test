import { ReactComponent as Menu } from "../../../assets/VectorMenu.svg";
import React, { useEffect, useState } from "react";
import UserTable from "../molecules/UserTable";
import axios from "axios";
import { Loading } from "../../UserDetails/atoms/Loading";

const TableElement = () => {
  const [details, setDetails] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getUserDetailsFromApi = async () => {
      setIsLoading(true);
      const result = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      setDetails(result.data);
      setIsLoading(false);
    };
    getUserDetailsFromApi();
  }, []);

  const column1 = React.useMemo(
    () => [
      {
        Header: "Full name",
        accessor: "profile.firstName",
      },
      {
        Header: "Phone number",
        accessor: "profile.phoneNumber",
      },
      {
        Header: "Email Address",
        accessor: "email",
      },

      {
        Header: "BVN",
        accessor: "profile.bvn",
      },

      {
        Header: "Gender",
        accessor: "profile.gender",
      },

      {
        Header: "Address",
        accessor: "profile.address",
      },
    ],
    []
  );
  if (isLoading) {
    return (
      <div className="user_details">
        <Loading />
      </div>
    );
  }

  let dataArray = details;
  return (
    <div className="user_details">
      <UserTable columns={column1} data={dataArray} loading={isLoading} />
    </div>
  );
};
export default TableElement;
