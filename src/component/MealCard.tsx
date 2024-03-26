import { Box, Stack, Typography } from "@mui/material";

type Menu = { img: string; stitle: string; price: number };

const MealCard = ({ menu }: { menu: Menu }) => {
  return (
    <Stack spacing={6} margin={0}>
      <Box
        component={"img"}
        src={menu.img}
        width={"282px"}
        height={"186px"}
        borderRadius={"16px"}
      ></Box>
      <Stack width={"282px"} spacing={"2px"}>
        <Typography>{menu.stitle}</Typography>
        <Typography>{menu.price}</Typography>
      </Stack>
    </Stack>
  );
};

export default MealCard;
