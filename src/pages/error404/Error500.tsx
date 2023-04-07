import { useNavigate } from "react-router-dom";
import "../../styles/error404.scss";

const Error500 = () => {
  const navigate = useNavigate();
  return (
    <div className="error_page">
      <h1>500</h1>
      <h1>ERROR</h1>
      <h2>Server Error</h2>
      <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
    </div>
  );
};

export default Error500;
