import { useState } from "react";
import styled from "styled-components";

import { SORT_ORDER } from "types";
import { Box, Dropdown } from "ui";

import WalletListRow from "./WalletListRow";

import { sortArray } from "./fixtures";

const StyledTotalCoinText = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #adabaa;
  margin: 0;
`;

const ActionHeader = ({ length, sortOrder, onClick }) => {
  return (
    <Box
      padding="1rem 1.875rem"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #161C23",
        borderRadius: "2px",
        marginBottom: "1.25rem",
      }}
    >
      <StyledTotalCoinText>{`Total Coin - ${length}`}</StyledTotalCoinText>
      <Dropdown data={sortArray} onClick={onClick} selectedValue={sortOrder} />
    </Box>
  );
};

function WalletList({ list }: any) {
  const [sortOrder, setSortOrder] = useState(SORT_ORDER.HIGH);
  return (
    <Box height="100%">
      <ActionHeader
        length={list.length}
        sortOrder={sortOrder}
        onClick={setSortOrder}
      />
      {list.map(WalletListRow)}
    </Box>
  );
}

export default WalletList;
