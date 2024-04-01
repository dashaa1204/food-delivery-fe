import dynamic from "next/dynamic";
import {
  AppBar,
  Backdrop,
  Box,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import MainLogo from "./icons/MainLogo";
import SearchIcon from "./icons/SearchIcon";
import CartIcon from "./icons/CartIcon";
import SigninIcon from "./icons/SigninIcon";
import React from "react";
const CartBackDrop = dynamic(() => import("../component/CartBackDrop"), {
  ssr: false,
});

const pages = [
  { title: "НҮҮР", page: "./" },
  { title: "ХООЛНЫ ЦЭС", page: "./menu" },
  { title: "ХҮРГЭЛТИЙН БҮС", page: "./menu" },
];

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <AppBar sx={{ bgcolor: "white", boxShadow: "none" }}>
      <Container maxWidth={"xl"}>
        <Stack
          p={2}
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"row"}
          width={"100%"}
        >
          <Toolbar>
            <Stack direction={"row"} gap={4}>
              <Box
                component={"button"}
                border={"none"}
                bgcolor={"white"}
                onClick={() => {
                  window.location.href = "./";
                }}
              >
                <MainLogo />
              </Box>
              <Stack direction={"row"} gap={4}>
                {pages.map((a, key) => {
                  return (
                    <Box
                      component={"button"}
                      border={"none"}
                      bgcolor={"white"}
                      key={key}
                      onClick={() => {
                        window.location.href = a.page;
                      }}
                    >
                      {a.title}
                    </Box>
                  );
                })}
              </Stack>
            </Stack>
          </Toolbar>
          <Stack
            direction={"row"}
            alignItems={"center"}
            bgcolor={"white"}
            borderRadius={"8px"}
            px={"16px"}
            py={"4px"}
            gap={2}
          >
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              border={1}
              borderRadius={"10px"}
              px={3}
              py={1}
            >
              <SearchIcon />
              <Box border={"none"} component={"input"} placeholder="Хайх"></Box>
            </Stack>
            <Stack
              component={"button"}
              direction={"row"}
              alignItems={"center"}
              px={2}
              gap={1}
              border={"none"}
              bgcolor={"#fff"}
              onClick={handleOpen}
            >
              <CartIcon />
              <Typography>Сагс</Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} px={2} gap={1}>
              <SigninIcon />
              <Typography>Нэвтрэх</Typography>
            </Stack>
          </Stack>
          <Backdrop
            sx={{
              justifyContent: "flex-end",
            }}
            open={open}
          >
            <CartBackDrop handleClose={handleClose} />
          </Backdrop>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;
