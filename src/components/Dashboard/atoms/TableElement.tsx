import { ReactComponent as Menu } from "../../../assets/VectorMenu.svg";
import React, { useContext, useEffect, useState } from "react";
import UserTable from "../molecules/UserTable";
import axios from "axios";
import { Loading } from "../../UserDetails/atoms/Loading";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { AppContext } from "../../../context/globalContext";

const TableElement = () => {
  const {details2, isLoading, setIsLoading} = useContext(AppContext)

  //filter function
  function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    const options = React.useMemo(() => {
      const options = new Set();
      preFilteredRows.forEach((row) => {
        options.add(row.values[id]);
      });
      return [...options.values()];
    }, [id, preFilteredRows]);
    return (
      <select
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">Select</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
  function randomStatus(arr: JSX.Element[]) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }
  const status = [
    <span className="active_status">Active</span>,
    <span className="inactive_status">Inactive</span>,
    <span className="pending_status">Pending</span>,
    <span className="blacklisted_status">BlackListed</span>,
  ];
  function showMenu(row) {
    setRowOpen(row.toString());
    console.log("rowopen", rowOpen, "id", row);
  }
  const column1 = React.useMemo(
    () => [
      {
        Header: "ORGANIZATION",
        accessor: "orgName",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "USERNAME",
        accessor: "userName",
      },
      {
        Header: "EMAIL",
        accessor: "email",
      },

      {
        Header: "PHONE NUMBER",
        accessor: "phoneNumber",
      },
      {
        Header: "DATE JOINED",
        accessor: "createdAt",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "STATUS",
        accessor: "profile.address",
        Cell: () => randomStatus(status),
      },
      {
        Header: "",
        accessor: "89",
        Cell: () =>  <HiOutlineDotsVertical />
        
      
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

  let dataArray = details2;
  return (
    <div className="all_users_table">
      <UserTable columns={column1} data={dataArray} loading={isLoading} />
    </div>
  );
};
export default TableElement;
