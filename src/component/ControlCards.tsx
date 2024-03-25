import { Box, Stack, Typography } from "@mui/material";

const ControlCards = ({ data }: { data: string[] }) => {
  return (
    <Stack spacing={"15px"} justifyContent={"center"} padding={"16px"}>
      <Box>{data}</Box>
      <Typography></Typography>
      <Typography></Typography>
    </Stack>
  );
};

export default ControlCards;
