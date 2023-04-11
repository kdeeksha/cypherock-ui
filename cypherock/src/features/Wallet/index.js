import { Box } from "ui";

import WalletDetails from "./WalletDetails";
import WalletList from "./WalletList";

import { WalletList as WalletListData } from "./fixtures";
import styled from "styled-components";

const OverflowBox = styled(Box)`
  overflow: auto;
  min-width: 50rem;
`;

function Wallet() {
  return (
    <OverflowBox padding="1.5rem 2rem 2.5rem" width="100%">
      <WalletDetails />
      <WalletList list={WalletListData} />
    </OverflowBox>
  );
}

export default Wallet;
