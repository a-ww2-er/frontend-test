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

  //filter function
  function SelectColumnFilter( {
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    const options = React.useMemo(() => {
      const options = new Set()
      preFilteredRows.forEach(row => {
        options.add(row.values[id])
      })
      return [...options.values()]
    }, [id, preFilteredRows])
    return (
      <select
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
       <option value="">Select</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  }
  const column1 = React.useMemo(
    () => [
      {
        Header: "ORGANIZATION",
        accessor: "orgName",
        Filter: SelectColumnFilter,
        filter: 'includes',
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
        Header: "DATE",
        accessor: "createdAt",
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
{
        Header: "PHONE NUMBER",
        accessor: "phoneNumber",
      },
      {
        Header: "STATUS",
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
