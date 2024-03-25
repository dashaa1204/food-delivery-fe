import { Stack } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack>
      <Header />
      <main>
        <Stack justifyContent={"center"} alignItems={"center"}>
          {children}
        </Stack>
      </main>
      <Footer />
    </Stack>
  );
};

export default Layout;
