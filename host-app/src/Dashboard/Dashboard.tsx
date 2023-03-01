import { useState } from "react";
import { Button, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Header, Wrapper } from "./Dashboard.styled";
import { Tab } from "./types";

const activeTabStyle = {
  backgroundColor: "#0d6efd",
  color: "#fff",
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(Tab.Overview);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Wrapper>
      <Header>
        <Button color="primary">Trade</Button>
      </Header>
      <Nav tabs>
        <NavItem>
          <NavLink
            style={activeTab === Tab.Overview ? activeTabStyle : undefined}
            onClick={() => {
              toggle(Tab.Overview);
            }}
          >
            Overview
          </NavLink>
        </NavItem>
        <NavItem>
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
      <TabContent activeTab={activeTab}>
        <TabPane tabId={Tab.Overview}>This is Overview</TabPane>
        <TabPane tabId={Tab.Holdings}>This is Holdings</TabPane>
      </TabContent>
    </Wrapper>
  );
};

export default Dashboard;
