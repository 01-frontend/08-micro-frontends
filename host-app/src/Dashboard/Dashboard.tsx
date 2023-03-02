import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import {
  StyledButton,
  StyledHeader,
  StyledTab,
  StyledTabs,
  StyledWrapper,
  WrapperOutlet,
} from "./Dashboard.styled";
import { Tab } from "./types";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(Tab.Overview);

  const changeTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      navigate(tab);
    }
  };

  return (
    <>
      <StyledHeader>
        <StyledButton color="primary">Trade</StyledButton>
      </StyledHeader>
      <StyledTabs>
        <StyledTab
          isActive={activeTab === Tab.Overview}
          onClick={() => {
            changeTab(Tab.Overview);
          }}
        >
          Overview
        </StyledTab>
        <StyledTab
          isActive={activeTab === Tab.Holdings}
          onClick={() => {
            changeTab(Tab.Holdings);
          }}
        >
          Holdings
        </StyledTab>
      </StyledTabs>
      <WrapperOutlet>
        <Outlet />
      </WrapperOutlet>
    </>
  );
};

export default Dashboard;
