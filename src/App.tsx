import React from "react";
import { Box } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

const App: React.FC = () => {
  return (
    <Box>
      <Header />
      <Body />
      <Footer />
    </Box>
  );
};

export default App;
