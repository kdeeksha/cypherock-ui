import { Box, Header, Sidebar } from "ui";

import Wallet from "features/Wallet";

function Home() {
  return (
    <Box
      backgroundColor="#0A1018"
      width="100%"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Header />
      <Box height="100%" style={{ display: "flex" }}>
        <Sidebar />
        <Wallet />
      </Box>
    </Box>
  );
}

export default Home;
