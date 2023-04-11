import { Box, Image } from "ui";

import CypherockSVG from "assets/cypherock.svg";

function Header() {
  return (
    <Box
      style={{ borderBottom: "1px solid #1A1F26" }}
      backgroundColor='#0A1018'
      padding='24px'
    >
      <Image src={CypherockSVG} width='140px' height='auto' />
    </Box>
  );
}

export default Header;
