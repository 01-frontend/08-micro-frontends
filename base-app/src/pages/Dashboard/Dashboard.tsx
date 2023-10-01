import { useMemo, useState } from "react";

import { useLocation, useHistory } from "react-router-dom";
import { Tab } from "src/common/constants";

import { StyledHeader, StyledTab, StyledTabs } from "./Dashboard.styled";

const Dashboard = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState(`/${pathname.split("/")[1]}`);

  console.log(pathname);

  const changeTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      history.push(tab);
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
    </>
  );
};

export default Dashboard;
