import "../../styles/dashboardpage.scss";
import UserTable from "./../../components/Dashboard/molecules/UserTable";
import { UserContext } from "../../context/globalContext";
import { useContext } from "react";
import { usePagination, useTable } from "react-table";
import TableElement from "../../components/Dashboard/atoms/TableElement";
const DashBoard = () => {
  const details: any = useContext(UserContext);
  return (
    <>
      <TableElement />
    </>
  );
};

export default DashBoard;
