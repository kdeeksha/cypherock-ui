import styled from "styled-components";
import { CRYPTO_PREFIX } from "types";

import { Box, Button } from "ui";
import { CryptoCurrencyIcon } from "components";

import ReceiveSVG from 'assets/receive.svg';
import SendSVG from 'assets/send.svg';

const Text = styled.p`
  font-weight: 750;
  font-size: 0.75rem;
  line-height: 0.875rem;
  color: #adabaa;
  margin-top: 0;
  margin-bottom: 0;
`;

const WalletListRow = (data: any) => {
  const { id, type, name, units, currency, value } = data;
  return (
    <Box
      key={id}
      margin="0 0 0.625rem"
      padding="1rem 1.5rem"
      backgroundColor="#161C23"
      width="auto"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "1rem",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <CryptoCurrencyIcon type={type} />
        <Text style={{ marginLeft: "0.25rem" }}>{name}</Text>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text>{CRYPTO_PREFIX[type]}</Text>
        <Text style={{ marginLeft: "0.25rem" }}>{units}</Text>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text>{currency}</Text>
        <Text style={{ marginLeft: "0.25rem" }}>{value}</Text>
      </Box>
      <Box style={{display: 'flex', alignItems: 'center'}}>
        <Button color="#8484F1" icon={ReceiveSVG} variant="link">RECEIVE</Button>
        <Button icon={SendSVG} variant="link">SEND</Button>
      </Box>
    </Box>
  );
};

export default WalletListRow;
