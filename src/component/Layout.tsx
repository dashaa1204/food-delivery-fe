import { Stack } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Box from "@mui/material/Box";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Header />
      <main>
        <Stack justifyContent={"center"} alignItems={"center"}>
          {children}
        </Stack>
      </main>
      <Footer />
    </Box>
  );
};

export default Layout;
