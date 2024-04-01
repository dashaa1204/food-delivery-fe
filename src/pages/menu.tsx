import { Box, Modal, Stack, Typography, useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import dummyFoods from "@/dummyFoods.json";
import dynamic from "next/dynamic";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SaleCard = dynamic(() => import("../component/SaleCard"), { ssr: false });

const sortedFood = dummyFoods.sort((a, b) => {
  return b.sale - a.sale;
});

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

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(!open);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const breakfast = sortedFood.filter((val) => {
    return val.category === "Breakfast";
  });

  const salads = sortedFood.filter((val) => {
    return val.category === "Salads and Appetizers";
  });

  const main = sortedFood.filter((val) => {
    return val.category === "Main Dish";
  });

  const dessert = sortedFood.filter((val) => {
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
                  <SaleCard
                    data={a}
                    key={index}
                    open={open}
                    setOpen={setOpen}
                    index={index}
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
                  <SaleCard
                    data={a}
                    key={index}
                    open={open}
                    setOpen={setOpen}
                    index={index}
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
                  <SaleCard
                    data={a}
                    key={index}
                    open={open}
                    setOpen={setOpen}
                    index={index}
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
                  <SaleCard
                    data={a}
                    key={index}
                    open={open}
                    setOpen={setOpen}
                    index={index}
                  />
                );
              })}
            </Stack>
          </Stack>
        </CustomTabPanel>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Stack>
  );
};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default Menu;
