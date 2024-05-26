import { Drawer, DrawerContent, DrawerHeader } from "@anhthi-projects/usy-ui";
import { useHistory, useParams } from "react-router-dom";

export const Order = () => {
  const history = useHistory();
  const { code } = useParams<{ code: string }>();
  return (
    <Drawer
      header={
        <DrawerHeader
          title="Placed Trade"
          onClose={() => {
            history.goBack();
          }}
        />
      }
      isOpen
    >
      <DrawerContent>
        <div>Order page - {code}</div>
      </DrawerContent>
    </Drawer>
  );
};
