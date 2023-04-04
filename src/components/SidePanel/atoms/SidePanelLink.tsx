import { Link } from "react-router-dom";

type LinkProps = {
  text: string;
  to: string;
  children: any;
};

const SidePanelLink = ({ text, to, children }: LinkProps) => {
  return (
    <Link to={to}>
      {children}
      {text}
    </Link>
  );
};

export default SidePanelLink;
