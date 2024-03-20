import Header from "./Header";
import Box from "@mui/material/Box";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
