import { ReactComponent as ArrowLeft } from "../../../assets/VectorArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../assets/VectorArrowRight.svg";
const Pagination = () => {
  return (
    <div className="pagination_panel">
      <div>
        <p>Showing</p>{" "}
        <select>
          <option>100 </option>
        </select>{" "}
        out of 100
      </div>
      <div>
        <span>
          <ArrowLeft />
        </span>
        1 2 3 ... 15 16
        <span>
          <ArrowRight />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
