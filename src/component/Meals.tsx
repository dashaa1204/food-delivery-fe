import { Stack, Typography, useTheme } from "@mui/material";
import { meals } from "../utils/dummyData";
import MealCard from "./MealCard";

type Menu = { img: string; stitle: string; price: number };
type Meals = { title: string; menu: Menu[] };

const Meals = ({ title }: { title: string }, { meals }: { meals: Meals }) => {
  const theme = useTheme();
  return (
    <Stack width={theme.breakpoints.values.xl} spacing={6}>
      <Typography>{title}</Typography>
      <Stack spacing={6} direction={"row"}>
        {meals.map((a) => {
          return <MealCard img={a.menu.img} />;
        })}
      </Stack>
    </Stack>
  );
};

export default Meals;
