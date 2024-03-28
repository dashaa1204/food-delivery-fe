import { Box, Stack, useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import dummyFoods from "@/dummyFoods.json";
import dynamic from "next/dynamic";

const MealCard = dynamic(() => import("../component/MealCard"), { ssr: false });

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
          <div>{children}</div>
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
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const breakfast = dummyFoods.filter((val) => {
    return val.category === "Breakfast";
  });

  const salads = dummyFoods.filter((val) => {
    return val.category === "Salads and Appetizers";
  });

  const main = dummyFoods.filter((val) => {
    return val.category === "Main Dish";
  });

  const dessert = dummyFoods.filter((val) => {
    return val.category === "Dessert";
  });

  return (
    <Stack width={theme.breakpoints.values.xl} mt={20} mb={120}>
      <Stack
        width={theme.breakpoints.values.lg}
        height={"43px"}
        spacing={"26px"}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Breakfast" {...a11yProps(0)} />
          <Tab label="Salads and Appetizers" {...a11yProps(1)} />
          <Tab label="Main Course" {...a11yProps(2)} />
          <Tab label="Dessert" {...a11yProps(3)} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <Stack width={theme.breakpoints.values.xl} spacing={"60px"}>
            <Stack direction={"row"} flexWrap={"wrap"} width={"1200px"}>
              {breakfast.map((a, index) => {
                return (
                  <MealCard
                    img={a.imagePath}
                    title={a.foodName}
                    price={a.price}
                    key={index}
                  />
                );
              })}
            </Stack>
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Stack width={theme.breakpoints.values.xl} spacing={"60px"}>
            <Stack direction={"row"} flexWrap={"wrap"} width={"1200px"}>
              {salads.map((a, index) => {
                return (
                  <MealCard
                    img={a.imagePath}
                    title={a.foodName}
                    price={a.price}
                    key={index}
                  />
                );
              })}
            </Stack>
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Stack width={theme.breakpoints.values.xl} spacing={"60px"}>
            <Stack direction={"row"} flexWrap={"wrap"} width={"1200px"}>
              {main.map((a, index) => {
                return (
                  <MealCard
                    img={a.imagePath}
                    title={a.foodName}
                    price={a.price}
                    key={index}
                  />
                );
              })}
            </Stack>
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Stack width={theme.breakpoints.values.xl} spacing={"60px"}>
            <Stack direction={"row"} flexWrap={"wrap"} width={"1200px"}>
              {dessert.map((a, index) => {
                return (
                  <MealCard
                    img={a.imagePath}
                    title={a.foodName}
                    price={a.price}
                    key={index}
                  />
                );
              })}
            </Stack>
          </Stack>
        </CustomTabPanel>
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
