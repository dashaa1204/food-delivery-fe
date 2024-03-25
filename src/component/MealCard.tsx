import { Stack, Typography } from "@mui/material";

type Menu = { img: string; title: string; price: number };
type Meals = { title: string; menu: Menu[] };

const MealCard = (
  { img }: { img: string },
  { title }: { title: string },
  { price }: { price: number }
) => {
  return (
    <Stack spacing={"14px"}>
      <Typography>{img}</Typography>
      <Stack width={"282px"} spacing={"2px"}>
        <Typography>{title}</Typography>
        <Typography>{price}</Typography>
      </Stack>
    </Stack>
  );
};

export default MealCard;
