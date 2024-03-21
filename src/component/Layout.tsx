import Footer from "./Footer";
import Header from "./Header";
import Box from "@mui/material/Box";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
