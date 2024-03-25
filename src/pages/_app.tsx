import Layout from "@/component/Layout";
import "@/styles/globals.css";
import { CustomThemeProvider } from "@/utils/CustomTheme";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomThemeProvider>
  );
};

export default App;
