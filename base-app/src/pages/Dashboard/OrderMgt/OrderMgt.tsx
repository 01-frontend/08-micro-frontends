import { MfeName, MfePort, mfeLoader } from "@anhthi-deep-dive/fe_rollup";

export const OrderMgt = () => {
  const BuiltOrderMgt = mfeLoader({
    remoteUrl: `http://localhost:${MfePort.ORDER_MGT}/remoteEntry.js`,
    mfeName: MfeName.ORDER_MGT,
    moduleName: "./App",
  });

  return <BuiltOrderMgt />;
};
