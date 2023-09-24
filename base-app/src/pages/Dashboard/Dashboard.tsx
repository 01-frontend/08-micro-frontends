import { useMemo, useRef, useState } from "react";

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
  const initPathname = pathname === "/" ? Tab.CryptoInfo : pathname;
  const [activeTab, setActiveTab] = useState(initPathname);
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

  const tabs = useMemo(() => {
    return [
      {
        isActive: activeTab === Tab.CryptoInfo,
        title: "Crypto Info",
        onClick: () => {
          changeTab(Tab.CryptoInfo);
        },
      },
      {
        isActive: activeTab === Tab.Holdings,
        title: "Holdings",
        onClick: () => {
          changeTab(Tab.Holdings);
        },
      },
      {
        isActive: activeTab === Tab.OrderMgt,
        title: "Order Mgt",
        onClick: () => {
          changeTab(Tab.OrderMgt);
        },
      },
    ];
  }, [activeTab]);

  return (
    <>
      <Drawer ref={drawerRef} />
      <StyledHeader>
        <StyledButton color="primary" onClick={openDrawer}>
          Trade
        </StyledButton>
      </StyledHeader>
      <StyledTabs>
        {tabs.map(({ title, isActive, onClick }) => (
          <StyledTab key={title} isActive={isActive} onClick={onClick}>
            {title}
          </StyledTab>
        ))}
      </StyledTabs>
      <WrapperOutlet>
        <Outlet />
      </WrapperOutlet>
    </>
  );
};

export default Dashboard;
