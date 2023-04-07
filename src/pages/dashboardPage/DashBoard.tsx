import "../../styles/dashboardpage.scss";
import UserTable from "./../../components/Dashboard/molecules/UserTable";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaCoins, FaUsers } from "react-icons/fa";
import { ReactComponent as LoanRecord } from "../../assets/VectorLoanRecord.svg";
import { useContext } from "react";
import { usePagination, useTable } from "react-table";
import TableElement from "../../components/Dashboard/atoms/TableElement";
import UserMetric from "../../components/Dashboard/atoms/UserMetric";
const DashBoard = () => {
  return (
    <div className="dashboard">
    <h1>Users</h1>
    <div className="dashboard_metrics">
      <UserMetric metric={"2,453"} text="Users">
        <span >
          <IoPeopleOutline />
        </span>
      </UserMetric>

      <UserMetric metric={"2,453"} text="Active Users">
        <span>
          <FaUsers  />
        </span>
      </UserMetric>
      <UserMetric metric={"12,453"} text="Users with Loans">
        <span>
          <AiOutlineFileProtect />
        </span>
      </UserMetric>
      <UserMetric text="Users with Savings" metric={"102,453"}>
        <span>
          <FaCoins />
        </span>
      </UserMetric>
    </div>
      <TableElement />
    </div>
  );
};

export default DashBoard;
