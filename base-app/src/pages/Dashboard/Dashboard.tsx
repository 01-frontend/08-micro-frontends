import { useRef, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Drawer } from "src/components/Drawer";

import {
  StyledButton,
  StyledHeader,
  StyledTab,
  StyledTabs,
  WrapperOutlet,
} from "./Dashboard.styled";
import { Tab } from "./types";

const Dashboard = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState(pathname || Tab.Overview);
  const drawerRef = useRef(null);

  const changeTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      navigate(tab);
    }
  };

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  return (
    <>
      <Drawer ref={drawerRef} />
      <StyledHeader>
        <StyledButton color="primary" onClick={openDrawer}>
          Trade
        </StyledButton>
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
