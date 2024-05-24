import { useLocation } from "react-router-dom";
import {
  CommonMfeProps,
  MfeName,
  MfePort,
  mfeLoader,
} from "src/hooks/mfeLoader";
import { getMfePath } from "src/utils/helpers";

export const OrderMgt = () => {
  const { pathname } = useLocation();

  const OrderMgtMfe = mfeLoader<CommonMfeProps>({
    remoteUrl: `http://localhost:${MfePort.ORDER_MGT}/remoteEntry.js`,
    mfeName: MfeName.ORDER_MGT,
    moduleName: "./App",
  });

  return <OrderMgtMfe basePath={getMfePath(pathname)} />;
};
