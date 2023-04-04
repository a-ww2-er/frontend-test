import { Children } from "react";
import { ReactComponent as Filter } from "../../../assets/VectorFilter.svg";


type TableProps = {
    children: any
}
const UserTable = ({children}: TableProps) => {
  return (
    <div>
      {/* Create a html table with 6 columns and 9 rows */}
      <table>
        <thead>
          <tr>
            <th scope="col">
              Organization <Filter />{" "}
            </th>
            <th scope="col">
              Username <Filter />
            </th>
            <th scope="col">
              Email <Filter />{" "}
            </th>
            <th scope="col">
              Phone Number <Filter />
            </th>
            <th scope="col">
              Date Joined <Filter />
            </th>
            <th scope="col">
              Status <Filter />
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
};

export default UserTable;
