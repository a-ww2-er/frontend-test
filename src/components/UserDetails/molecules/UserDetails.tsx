import "../styles/details.scss";
import React from "react";
import Table from "./Table";
import axios from "axios";

type myRow = {
  row: { original: { profile: { firstName: String; lastName: String } } };
};

const UserDetails = () => {
  const [data, setData] = React.useState<any>({});

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/1"
      );
      setData(result.data);
      // console.log(data.socials.facebook);
    };

    fetchData();
  }, []);
  const column1 = React.useMemo(
    () => [
      {
        Header: "Personal Information",
        columns: [
          {
            Header: "Full name",
            accessor: "profile.firstName",
            Cell: ({ row }: myRow) =>
              row.original.profile
                ? row.original.profile.firstName +
                  " " +
                  row.original.profile.lastName
                : row.groupByVal,
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
      },
    ],
    []
  );
  const column2 = React.useMemo(
    () => [
      {
        Header: "Education and Employment",
        columns: [
          {
            Header: "Level of Education",
            accessor: "education.level",
          },
          {
            Header: "Employment Status",
            accessor: "education.employmentStatus",
          },
          {
            Header: "Sector of Employment",
            accessor: "education.sector",
          },
          {
            Header: "Duration of Employment",
            accessor: "education.duration",
          },
          {
            Header: "Office Email",
            accessor: "education.officeEmail",
          },
          {
            Header: "Monthly Income",
            accessor: "education.monthlyIncome",
          },
        ],
      },
    ],
    []
  );
  const column3 = React.useMemo(
    () => [
      {
        Header: "Socials",
        columns: [
          {
            Header: "TWITTER",
            accessor: "socials.twitter",
          },
          {
            Header: "FACEBOOK",
            accessor: "socials.facebook",
          },
          {
            Header: "INSTAGRAM",
            accessor: "socials.instagram",
          },
        ],
      },
    ],
    []
  );
  const column4 = React.useMemo(
    () => [
      {
        Header: "Guarantor",
        columns: [
          {
            Header: "Full Name",
            accessor: "guarantor.firstName",
          },
          {
            Header: "Phone Number",
            accessor: "guarantor.phoneNumber",
          },
          {
            Header: "Gender",
            accessor: "guarantor.gender",
          },
          {
            Header: "Address",
            accessor: "guarantor.address",
          },
        ],
      },
    ],
    []
  );

  let dataArray = [data];

  return (
    <div className="user_details">
      <Table columns={column1} data={dataArray} />
      <hr />
      <Table columns={column2} data={dataArray} />
      <hr />
      <Table columns={column3} data={dataArray} />
      <hr />
      <Table columns={column4} data={dataArray} />
    </div>
  );
};

export default UserDetails;
