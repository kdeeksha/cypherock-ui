import { Image } from "ui";

import { CRYPTO_TYPES } from "types";

import BitcoinSVG from "assets/bitcoin.svg";
import BinanceSVG from "assets/binance.svg";
import EthereumSVG from "assets/ethereum.svg";

function CryptoCurrencyIcon({ type }: any) {
  const attributes = {
    width: "32px",
    height: "32px",
  };
  switch (type) {
    case CRYPTO_TYPES.BITCOIN:
      return <Image src={BitcoinSVG} {...attributes} />;
    case CRYPTO_TYPES.ETHEREUM:
      return <Image src={EthereumSVG} {...attributes} />;
    case CRYPTO_TYPES.BINANCE:
      return <Image src={BinanceSVG} {...attributes} />;
    default:
      return null;
  }
}

export default CryptoCurrencyIcon;
