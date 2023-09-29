import styled from "styled-components";

export const StyledOverlay = styled.div`
  background-color: #000;
  opacity: 0.5;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const StyledDrawer = styled.div`
  width: 400px;
  height: 100vh;
  position: fixed;
  background-color: #fff;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;

  svg {
    cursor: pointer;
  }
`;
