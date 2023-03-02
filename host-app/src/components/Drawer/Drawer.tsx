import { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";

import CloseIcon from "src/assets/icons/close.svg";

import { DrawerHeader, StyledDrawer, StyledOverlay } from "./Drawer.styled";

export const Drawer = forwardRef((props, ref) => {
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
            <CloseIcon onClick={closeDrawer} />
          </DrawerHeader>
        </StyledDrawer>
      </>
    );
  };

  return isDisplay && createPortal(renderDrawer(), document.body);
});
