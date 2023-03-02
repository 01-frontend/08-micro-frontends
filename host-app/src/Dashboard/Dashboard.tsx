import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Button, Nav, NavItem, NavLink } from "reactstrap";

import { StyledHeader, StyledWrapper } from "./Dashboard.styled";
import { Tab } from "./types";

const activeTabStyle = {
  backgroundColor: "#0d6efd",
  color: "#fff",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(Tab.Overview);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      navigate(tab);
    }
  };

  return (
    <StyledWrapper>
      <StyledHeader>
        <Button color="primary">Trade</Button>
      </StyledHeader>
      <Nav tabs>
        <NavItem style={{ cursor: "pointer" }}>
          <NavLink
            style={activeTab === Tab.Overview ? activeTabStyle : undefined}
            onClick={() => {
              toggle(Tab.Overview);
            }}
          >
            Overview
          </NavLink>
        </NavItem>
        <NavItem style={{ cursor: "pointer" }}>
          <NavLink
            style={activeTab === Tab.Holdings ? activeTabStyle : undefined}
            onClick={() => {
              toggle(Tab.Holdings);
            }}
          >
            Holdings
          </NavLink>
        </NavItem>
      </Nav>
      <Outlet />
    </StyledWrapper>
  );
};

export default Dashboard;
