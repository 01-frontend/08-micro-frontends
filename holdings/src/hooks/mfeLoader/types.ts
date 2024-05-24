export interface CommonMfeProps {
  basePath?: string;
}

export enum MfeName {
  BASE_APP = "baseApp",
  CRYPTO_INFO = "cryptoInfo",
  HOLDINGS = "holdings",
  ORDER_MGT = "orderMgt",
}

export enum MfePort {
  BASE_APP = 3000,
  CRYPTO_INFO = 3001,
  HOLDINGS = 3002,
  ORDER_MGT = 3003,
}
