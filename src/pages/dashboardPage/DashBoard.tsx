import TableElement from "../../components/Dashboard/atoms/TableElement";
import UserMetric from "../../components/Dashboard/atoms/UserMetric";
import Pagination from "../../components/Dashboard/molecules/Pagination";
import "../../styles/dashboardpage.scss";
import UserTable from "./../../components/Dashboard/molecules/UserTable";
const DashBoard = () => {
  return (
    <div className="dashboard">
      <h1>Users</h1>
      <div className="dashboard_metrics">
        <UserMetric/>
        <UserMetric/>
        <UserMetric/>
        <UserMetric/>
      </div>
      <UserTable>
        <TableElement />
        <TableElement />
        <TableElement />
        <TableElement />
        <TableElement />
        <TableElement />
        <TableElement />
        <TableElement />
        <TableElement />
      </UserTable>

      <Pagination/>
    </div>
  );
};

export default DashBoard;
