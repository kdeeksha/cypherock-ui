import styled from "styled-components";

import { Box, Image, Button } from "ui";

import TickSVG from "assets/tick.svg";
import SyncSVG from "assets/sync.svg";
import LockSVG from "assets/lock.svg";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledSynchronizedText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #f5cea3;
  margin-left: 0.5rem;
`;

const StyledBox = styled(Box)`
  margin-bottom: 2.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeader = styled.h1`
  font-style: normal;
  font-weight: 750;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #c78d4e;
`;

const IconBg = styled(Box)`
  background: #1a212b;
  border-radius: 0.25rem;
  padding: 0.5rem;
`;

function WalletDetails() {
  return (
    <>
      <FlexBox margin='0 0 2rem'>
        <Box style={{ display: "flex" }}>
          <Image src={TickSVG} />
          <StyledSynchronizedText>Synchronized</StyledSynchronizedText>
        </Box>
        <IconBg margin='0 1rem 0 2.5rem'>
          <Image src={SyncSVG} />
        </IconBg>
        <IconBg>
          <Image src={LockSVG} />
        </IconBg>
      </FlexBox>
      <StyledBox>
        <StyledHeader>Wallet 1</StyledHeader>
        <Button variant='secondary'>+ Add coin</Button>
      </StyledBox>
    </>
  );
}

export default WalletDetails;
