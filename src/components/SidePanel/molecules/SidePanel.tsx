import SidePanelLink from "../atoms/SidePanelLink";
import { ReactComponent as Organizations } from "../../../assets/Vector.svg";
import { ReactComponent as HomeIcon } from "../../../assets/Home.svg";
import {ReactComponent as UsersIcon} from "../../../assets/Users.svg"
import {ReactComponent as LoansIcon} from "../../../assets/Loans.svg"
import {ReactComponent as DecisionModel} from "../../../assets/DecisionModels.svg"
import {ReactComponent as Savings} from "../../../assets/Savings.svg"
import {ReactComponent as LoanRequest} from "../../../assets/LoanRequest.svg"
import {ReactComponent as RequestIcon} from "../../../assets/VectorRequest.svg"
import {ReactComponent as Whitelist} from "../../../assets/Whitelist.svg"
import {ReactComponent as Karma} from "../../../assets/Karma.svg"
import {ReactComponent as SavingsProduct} from "../../../assets/SavingsProduct.svg"
import {ReactComponent as FeesAndCharges} from "../../../assets/FeesCharges.svg"
import {ReactComponent as Services} from "../../../assets/VectorServices.svg"
import {ReactComponent as Settlements} from "../../../assets/VectorSettlements.svg"
import {ReactComponent as Pricing} from "../../../assets/VectorPricing.svg"
import {ReactComponent as AuditLogs} from "../../../assets/VectorAuditLogs.svg"
import {AiOutlineTransaction, AiOutlineBarChart, AiOutlineMenu} from "react-icons/ai"
import {HiUserGroup} from "react-icons/hi"
import {VscSettings} from "react-icons/vsc"

import { IoMdArrowDropdown } from "react-icons/io";

import "../styles/sidepanel.scss";
import Category from "./Category";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../context/globalContext";
import { FaBars, FaTimes } from "react-icons/fa";

const SidePanel = () => {
  const {showNav, setShowNav} = useContext(AppContext)
 if(showNav){
  return(
    <></>
  )
 }
  return (
    <nav className="side_panel">
       
      <div className={ showNav ? "side_panel_main_links_active" : "side_panel_main_links"}>
        <Category>
          <NavLink to="">
            <Organizations />
            Switch Organizations
            <IoMdArrowDropdown />
          </NavLink>

          <Link to="/dashboard">
            <HomeIcon />
            Dashboard
          </Link>
        </Category>
      </div>

      <Category title="CUSTOMERS">
        <SidePanelLink text="Users" to="/user">
          <UsersIcon/>
        </SidePanelLink>
        <SidePanelLink text="Guarantor" to="">
          <HiUserGroup/>
        </SidePanelLink>
        <SidePanelLink text="Loans" to="">
           <LoansIcon/>
        </SidePanelLink>
        <SidePanelLink text="Decision Models" to="">
          <DecisionModel/>
        </SidePanelLink>
        <SidePanelLink text="Savings" to="">
          <Savings/>
        </SidePanelLink>
        <SidePanelLink text="Loan Requests" to="">
          <span>
          <LoanRequest/>
          <RequestIcon/>
          </span>
          
        </SidePanelLink>
        <SidePanelLink text="Whitelist" to="">
          <Whitelist/>
        </SidePanelLink>
        <SidePanelLink text="Karma" to="">
           <Karma/>
        </SidePanelLink>
      </Category>

      <Category title="BUSINESSES">
        <SidePanelLink text="Organization" to="">
        <Organizations />
        </SidePanelLink>
        <SidePanelLink text="Loan Products" to="">
        <span>
          <LoanRequest/>
          <RequestIcon/>
          </span>
        </SidePanelLink>
        <SidePanelLink text="Savings Product" to="">
          <SavingsProduct/>
        </SidePanelLink>
        <SidePanelLink text="Fees and Charges" to="">
          <FeesAndCharges/>
        </SidePanelLink>
        <SidePanelLink text="Transactions" to="">
          <AiOutlineTransaction/>
        </SidePanelLink>
        <SidePanelLink text="Services" to="">
            <Services/>
        </SidePanelLink>
        <SidePanelLink text="Service Account" to="">
          <UsersIcon/>
        </SidePanelLink>
        <SidePanelLink text="Settlements" to="">
            <Settlements />
        </SidePanelLink>
        <SidePanelLink text="Reports" to="">
          <AiOutlineBarChart/>
        </SidePanelLink>
      </Category>
      <Category title="SETTINGS">
        <SidePanelLink text="Preferences" to="">
            <VscSettings/>
        </SidePanelLink>
        <SidePanelLink text="Fees and Pricing" to="">
           <Pricing/>
        </SidePanelLink>
        <SidePanelLink text="Audit Logs" to="">
            <AuditLogs/>
        </SidePanelLink>
      </Category>
    </nav>
  );
};

export default SidePanel;
