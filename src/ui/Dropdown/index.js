import { useState } from "react";
import styled from "styled-components";

import { Box, Image } from "ui";

import ArrowUpSVG from "assets/arrow-up.svg";
import ArrowDownSVG from "assets/arrow-down.svg";
import ChevronDownSVG from "assets/chevron-down.svg";

const StyledMenu = styled.ul`
  position: absolute;
  top: 0.875rem;
  right: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #272a2f;
  border: 1px solid #404854;
  border-radius: 2px;
  list-style: none;
  padding: 0.5rem 0;
  min-width: 160px;
  > li {
    font-weight: 750;
    font-size: 0.625rem;
    color: #beb4a8;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
  }
`;

const StyledText = styled.p`
  font-weight: 600;
  font-size: 0.625rem;
  line-height: 0.75rem;
  color: #beb4a8;
`;

const MenuItem = ({ name, value, onClick }) => {
  const handleClick = () => onClick(value);
  return (
    <li key={value} onClick={handleClick}>
      {name}
    </li>
  );
};

const Menu = ({ data, onClick, active }: any) => {
  return (
    <StyledMenu>
      {data.map((item) => (
        <MenuItem {...item} onClick={onClick} />
      ))}
    </StyledMenu>
  );
};

function Dropdown({ data, onClick, selectedValue }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const selectedSortOrderName = data.find(
    (item) => item.value === selectedValue
  ).name;

  const handleMenuItemClick = (value) => {
    onClick(value);
    toggleMenu();
  };

  return (
    <Box
      onClick={toggleMenu}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        maxWidth: "160px",
        cursor: "pointer",
      }}
    >
      <Box width="auto" style={{ display: "flex", alignItems: "center" }}>
        <Image src={ArrowUpSVG} />
        <Image src={ArrowDownSVG} />
      </Box>
      <StyledText style={{ margin: "0 0.5rem" }}>
        {selectedSortOrderName}
      </StyledText>
      <Image src={ChevronDownSVG} />

      {isMenuOpen && <Menu data={data} onClick={handleMenuItemClick} />}
    </Box>
  );
}

export default Dropdown;
