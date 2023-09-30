import { forwardRef, useImperativeHandle, useState } from "react";

import { createPortal } from "react-dom";

import { DrawerHeader, StyledDrawer, StyledOverlay } from "./Drawer.styled";

const Drawer = (props, ref) => {
  const [isDisplay, setIsDisplay] = useState(false);

  const openDrawer = () => setIsDisplay(true);
  const closeDrawer = () => setIsDisplay(false);

  useImperativeHandle(ref, () => {
    return {
      openDrawer,
      closeDrawer,
    };
  });

  const renderDrawer = () => {
    return (
      <>
        <StyledOverlay />
        <StyledDrawer>
          <DrawerHeader>
            <p>Order Placement</p>
          </DrawerHeader>
        </StyledDrawer>
      </>
    );
  };

  return isDisplay && createPortal(renderDrawer(), document.body);
};

export const ForwardRefDrawer = forwardRef(Drawer);
