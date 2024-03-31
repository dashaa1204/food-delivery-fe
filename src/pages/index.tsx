import { Stack, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Pattern from "../component/icons/Pattern";
import Image from "next/image";
import { controlCardsData } from "../utils/dummy-data";
import SaleCardRow from "@/component/SaleCardRow";
import React from "react";
import dummyFoods from "@/dummyFoods.json";

const breakfast = dummyFoods.filter((val) => {
  return val.category === "Breakfast" && val.sale == 0;
});

const salads = dummyFoods.filter((val) => {
  return val.category === "Salads and Appetizers" && val.sale == 0;
});

const main = dummyFoods.filter((val) => {
  return val.category === "Main Dish" && val.sale == 0;
});

const dessert = dummyFoods.filter((val) => {
  return val.category === "Dessert" && val.sale == 0;
});

const saleFoods = dummyFoods.filter((val) => {
  return val.sale > 0;
});

const Home = () => {
  const theme = useTheme();

  return (
    <Stack width={theme.breakpoints.values.xl} alignItems={"center"}>
      <Stack
        direction={`row`}
        width={theme.breakpoints.values.xl}
        bgcolor={theme.palette.primary.main}
        height={"788px"}
        position={"relative"}
        alignItems={"center"}
        justifyContent={"space-around"}
        overflow={"hidden"}
        gap={10}
      >
        <Box position={"absolute"}>
          <Pattern />
        </Box>
        <Stack width={"384px"} height={"224px"} spacing={"23px"}>
          <Typography
            fontSize={"55px"}
            fontWeight={"600"}
            letterSpacing={"0.55px"}
            lineHeight={"90%"}
            color={"white"}
          >
            Pinecone Food delivery
          </Typography>
          <Box border={1} width={"383px"} borderColor={"white"}></Box>
          <Typography
            fontSize={"22px"}
            fontWeight={"700"}
            lineHeight={"120%"}
            letterSpacing={"0.22px"}
            color={"white"}
          >
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
        <Stack width={"588px"} height={"438px"} position={"relative"}>
          <Image
            src={"/mainFood1.png"}
            width={443}
            height={438}
            alt="mainImg1"
          />
          <Box position={"absolute"} top={"110px"} left={"280px"}>
            <Image
              src={"/mainFood2.png"}
              width={313}
              height={313}
              alt="mainImg1"
            />
          </Box>
        </Stack>
      </Stack>
      <Stack
        width={theme.breakpoints.values.lg}
        gap={"47px"}
        direction={"row"}
        justifyContent={"center"}
        my={15}
      >
        {controlCardsData.map((a, index) => {
          return (
            <Stack
              gap={"15px"}
              justifyContent={"center"}
              p={4}
              border={1}
              borderRadius={4}
              borderColor={"#D6D8DB"}
              boxShadow={3}
              key={index}
            >
              <Box>{a.svg}</Box>
              <Stack gap={1}>
                <Box fontSize={"18px"} fontWeight={"700"}>
                  {a.title}
                </Box>

                <Typography fontSize={"14px"}>{a.detail}</Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
      <SaleCardRow bigTitle="Хямдралтай" data={saleFoods} />
      <SaleCardRow bigTitle="Үндсэн хоол" data={main} />
      <SaleCardRow bigTitle="Салад ба зууш" data={salads} />
      <SaleCardRow bigTitle="Амттан" data={dessert} />
    </Stack>
  );
};

export default Home;
