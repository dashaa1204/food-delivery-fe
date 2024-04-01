import { Button, Stack, Typography, useTheme } from "@mui/material";
import SaleCard from "./SaleCard";
import React from "react";

type dataType = {
  id: number;
  foodName: string;
  imagePath: string;
  price: number;
  sale: number;
  stock: number;
  ingredients: string[];
  category: string;
}[];

const SaleCardRow = ({
  data,
  bigTitle,
}: {
  data: dataType;
  bigTitle: string;
}) => {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  return (
    <Stack
      width={theme.breakpoints.values.xl}
      px={"120px"}
      justifyContent={"center"}
    >
      <Stack
        direction={"row"}
        py={4}
        justifyContent={"space-between"}
        my={0}
        m={0}
      >
        <Stack direction={"row"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M8.18645 2.60351C9.15292 -0.00834179 12.8471 -0.00833988 13.8136 2.60351L14.8427 5.38482C15.1466 6.20598 15.794 6.85341 16.6152 7.15727L19.3965 8.18645C22.0083 9.15292 22.0083 12.8471 19.3965 13.8136L16.6152 14.8427C15.794 15.1466 15.1466 15.794 14.8427 16.6152L13.8136 19.3965C12.8471 22.0083 9.15292 22.0083 8.18644 19.3965L7.15727 16.6152C6.85341 15.794 6.20598 15.1466 5.38482 14.8427L2.60351 13.8136C-0.00834179 12.8471 -0.00833988 9.15292 2.60351 8.18645L5.38482 7.15727C6.20598 6.85341 6.85341 6.20598 7.15727 5.38482L8.18645 2.60351Z"
              fill="#18BA51"
            />
          </svg>
          <Typography>{bigTitle}</Typography>
        </Stack>
        <Stack direction={"row"} gap={"5px"} alignItems={"center"}>
          <Button>
            <Typography textTransform={"none"}>Бүгдийг харах</Typography>
            <svg
              width="7"
              height="13"
              viewBox="0 0 7 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.683594 0.289062L0.136719 0.808594C0.0273438 0.945312 0.0273438 1.16406 0.136719 1.27344L5.08594 6.25L0.136719 11.1992C0.0273438 11.3086 0.0273438 11.5273 0.136719 11.6641L0.683594 12.1836C0.820313 12.3203 1.01172 12.3203 1.14844 12.1836L6.89063 6.46875C7 6.33203 7 6.14062 6.89063 6.00391L1.14844 0.289062C1.01172 0.152344 0.820313 0.152344 0.683594 0.289062Z"
                fill="#18BA51"
              />
            </svg>
          </Button>
        </Stack>
      </Stack>
      <Stack gap={"12px"} direction={"row"}>
        {data.slice(0, 4).map((a, index) => {
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
  );
};

export default SaleCardRow;
