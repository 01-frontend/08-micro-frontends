import { MfeName, MfePort, mfeLoader } from "src/hooks/mfeLoader";


export const OrderMgt = () => {
  const BuiltOrderMgt = mfeLoader({
    remoteUrl: `http://localhost:${MfePort.ORDER_MGT}/remoteEntry.js`,
    mfeName: MfeName.ORDER_MGT,
    moduleName: "./App",
  });

  return <BuiltOrderMgt />;
};
