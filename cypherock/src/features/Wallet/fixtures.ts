import { CRYPTO_TYPES, SORT_ORDER } from "types";

export const WalletList = [
  {
    name: "BITCOIN",
    type: CRYPTO_TYPES.BITCOIN,
    units: 0.00256,
    value: 0.5628,
    currency: "USD",
    id: 1,
  },
  {
    name: "ETHEREUM",
    type: CRYPTO_TYPES.ETHEREUM,
    units: 0.00356,
    value: 0.3628,
    currency: "USD",
    id: 2,
  },
  {
    name: "BINANCE COIN",
    type: CRYPTO_TYPES.BINANCE,
    units: 0.00456,
    value: 0.4628,
    currency: "USD",
    id: 3,
  },
  {
    name: "BITCOIN",
    type: CRYPTO_TYPES.BITCOIN,
    units: 0.00256,
    value: 0.5628,
    currency: "USD",
    id: 4,
  },
  {
    name: "ETHEREUM",
    type: CRYPTO_TYPES.ETHEREUM,
    units: 0.00256,
    value: 0.5628,
    currency: "USD",
    id: 5,
  },
];

export const sortArray = [
  {
    name: "Amount  High - Low",
    value: SORT_ORDER.HIGH,
  },
  {
    name: "Amount  Low - High",
    value: SORT_ORDER.LOW,
  },
  {
    name: "Arrange  A-Z",
    value: SORT_ORDER.ASC,
  },
  {
    name: "Arrange  Z-A",
    value: SORT_ORDER.DESC,
  },
];
