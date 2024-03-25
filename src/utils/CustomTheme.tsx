import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 660,
      lg: 1200,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#18BA51",
    },
  },
});

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
