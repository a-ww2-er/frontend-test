import { ReactComponent as Menu } from "../../../assets/VectorMenu.svg";

const TableElement = () => {
  return (
    <tbody>
      <tr>
        <td scope="row">Lendsqr</td>
        <td>Adedeji</td>
        <td>adedeji@lendsqr.com</td>
        <td>08078903721</td>
        <td>May 15, 2020 10:00 AM</td>
        <td>
          <button>Active</button>
        </td>
        <td>
          <Menu />
        </td>
      </tr>
    </tbody>
  );
};

export default TableElement;
