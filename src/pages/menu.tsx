import { Box, Stack, Typography, useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { meals } from "../utils/dummy-data";
import MealCard from "@/component/MealCard";

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Menu = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack mt={20}>
      <Stack width={theme.breakpoints.values.xl}>
        <Stack
          width={theme.breakpoints.values.lg}
          height={"43px"}
          spacing={"26px"}
          mb={200}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Breakfast" {...a11yProps(0)} />
            <Tab label="Soup" {...a11yProps(1)} />
            <Tab label="Main Course" {...a11yProps(2)} />
            <Tab label="Dessert" {...a11yProps(2)} />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <Stack
              width={theme.breakpoints.values.xl}
              spacing={"60px"}
              gridRow={4}
              gridColumn={3}
            >
              {meals.map((a) => {
                return (
                  <Stack spacing={3} direction={"row"}>
                    {meals.map((a, index) => {
                      return <MealCard menu={a.menu[0]} key={index} />;
                    })}
                  </Stack>
                );
              })}
            </Stack>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Stack
              width={theme.breakpoints.values.xl}
              spacing={"60px"}
              gridRow={4}
              gridColumn={3}
            >
              {meals.map((a) => {
                return (
                  <Stack spacing={3} direction={"row"}>
                    {meals.map((a, index) => {
                      return <MealCard menu={a.menu[0]} key={index} />;
                    })}
                  </Stack>
                );
              })}
            </Stack>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Stack
              width={theme.breakpoints.values.xl}
              spacing={"60px"}
              gridRow={4}
              gridColumn={3}
            >
              {meals.map((a) => {
                return (
                  <Stack spacing={3} direction={"row"}>
                    {meals.map((a, index) => {
                      return <MealCard menu={a.menu[0]} key={index} />;
                    })}
                  </Stack>
                );
              })}
            </Stack>
          </CustomTabPanel>
        </Stack>
      </Stack>
    </Stack>
  );
};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default Menu;
