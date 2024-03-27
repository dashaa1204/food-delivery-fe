import { Box, Stack, Typography } from "@mui/material";

const SaleCard = ({
  img,
  title,
  price,
  finalPrice,
  sale,
}: {
  img: string;
  title: string;
  price: number;
  finalPrice: number;
  sale: number;
}) => {
  return (
    <Stack spacing={6} margin={0}>
      <Stack position={"relative"}>
        <Box
          component={"img"}
          src={img}
          width={"282px"}
          height={"186px"}
          borderRadius={"16px"}
        ></Box>
        <Stack
          px={4}
          py={1}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
          border={1}
          borderColor={"white"}
          bgcolor={"#18BA51"}
          borderRadius={"16px"}
          position={"absolute"}
          top={10}
          right={10}
        >
          <Typography fontSize={"18px"} fontWeight={"600"} color={"white"}>
            {sale}%
          </Typography>
        </Stack>
      </Stack>

      <Stack width={"282px"} spacing={"2px"}>
        <Typography>{title}</Typography>
        <Stack direction={"row"}>
          <Typography>{price - (sale * price) / 100}₮</Typography>
          <Typography>{price}₮</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SaleCard;
