import { useMemo, useState } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { StyledHeader, StyledTab, StyledTabs } from "./Dashboard.styled";
import { Tab } from "./types";

const Dashboard = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const initPathname = pathname === "/" ? Tab.CryptoInfo : pathname;
  const [activeTab, setActiveTab] = useState(initPathname);

  const changeTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      navigate(tab);
    }
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

  const renderHeader = () => {
    return (
      <StyledHeader>
        <h3>Online Crypto Trading</h3>
      </StyledHeader>
    );
  };

  const renderTabs = () => {
    return (
      <StyledTabs>
        {tabs.map(({ title, isActive, onClick }) => (
          <StyledTab key={title} isActive={isActive} onClick={onClick}>
            {title}
          </StyledTab>
        ))}
      </StyledTabs>
    );
  };

  return (
    <>
      {renderHeader()}
      {renderTabs()}
      <Outlet />
    </>
  );
};

export default Dashboard;
