import "../../styles/dashboardpage.scss";
import UserTable from "./../../components/Dashboard/molecules/UserTable";

import { useContext } from "react";
import { usePagination, useTable } from "react-table";
import TableElement from "../../components/Dashboard/atoms/TableElement";
const DashBoard = () => {
  return (
    <>
      <TableElement />
    </>
  );
};

export default DashBoard;
