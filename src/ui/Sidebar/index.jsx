import { Fragment } from "react";
import styled from "styled-components";

import { Box, Image } from "ui";

import PortfolioSVG from "assets/portfolio.svg";
import WalletSVG from "assets/wallet.svg";
import TransactionSVG from "assets/transaction.svg";
import TutorialsSVG from "assets/tutorials.svg";
import SettingSVG from "assets/setting.svg";

export const sidebarList = [
  {
    name: "Portfolio",
    icon: PortfolioSVG,
    pageLink: "",
    id: 1,
  },
  {
    name: "Wallets",
    icon: WalletSVG,
    pageLink: "",
    id: 2,
    isActive: true,
    children: [
      {
        name: "Wallet 1",
        id: 1,
      },
    ],
  },
  {
    name: "Last Transactions",
    icon: TransactionSVG,
    pageLink: "",
    id: 3,
  },
  {
    name: "Tutorials",
    icon: TutorialsSVG,
    pageLink: "",
    id: 4,
  },
  {
    name: "Setting",
    icon: SettingSVG,
    pageLink: "",
    id: 5,
  },
];

const StyledText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1rem;
  margin: 0 0 0 1rem;
  color: ${(props) => (props.isActive ? "#E2C19D" : "#E7E7E7")};
`;

const ChildMenu = styled(Box)`
  > div {
    padding: 0rem !important;
  }
  p {
    font-weight: 750;
    font-size: 0.75rem;
    line-height: 1rem;
    color: ${(props) => (props.isActive ? "#C78D4E" : "#E7E7E7")};
  }
`;

const SidebarItem = (item: any) => {
  const { icon, name, id, isActive, children = [] } = item;
  const isChildren = children.length;
  return (
    <Fragment key={id}>
      <Box
        padding={isChildren ? "1rem 0 0.5rem" : "1rem 0"}
        key={id}
        style={{ display: "flex", alignItems: "center" }}
      >
        {icon && <Image src={icon} alt={name} />}
        <StyledText isActive={isActive}>{name}</StyledText>
      </Box>
      {children.length ? (
        <ChildMenu isActive={isActive} margin="0 0.5rem 2rem 1.5rem">
          {children.map(SidebarItem)}
        </ChildMenu>
      ) : null}
    </Fragment>
  );
};

function Sidebar() {
  return (
    <Box
      backgroundColor="#161C23"
      maxWidth="10.75rem"
      width="100%"
      padding="2.5rem 1.5rem"
    >
      <Box>{sidebarList.map(SidebarItem)}</Box>
    </Box>
  );
}

export default Sidebar;
