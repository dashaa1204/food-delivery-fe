import { Box, Button, Stack, Typography } from "@mui/material";
import PasswordIcon from "../icons/PasswordIcon";

const SignIn = ({ prop }: { prop: string }) => {
  console.log({ prop });
  return (
    <Stack gap={"48px"} p={8} mt={20}>
      <Typography>Нэвтрэх</Typography>
      <Stack width={"384px"} gap={"8px"}>
        <form action="">
          <Stack gap={"8px"}>
            <Stack>
              <Typography>Имэйл</Typography>
              <Box
                component={"input"}
                placeholder="Имэйл хаягаа оруулна уу"
                bgcolor={"#ECF4F3"}
                px={"16px"}
                py={"8px"}
                borderRadius={"4px"}
                type="email"
              ></Box>
            </Stack>
            <Stack>
              <Typography>Нууц үг</Typography>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                bgcolor={"#ECF4F3"}
                color={"#3F4145"}
                px={"16px"}
                py={"8px"}
                borderRadius={"4px"}
              >
                <Box
                  component={"input"}
                  placeholder="Нууц үг"
                  bgcolor={"#ECF4F3"}
                  width={"90%"}
                  type={prop}
                ></Box>
                <PasswordIcon />
              </Stack>
            </Stack>
          </Stack>
        </form>
        <Box>
          <Typography>Нууц үг сэргээх</Typography>
        </Box>
      </Stack>
      <Stack alignItems={"center"} gap={"32px"}>
        <Button fullWidth>Нэвтрэх</Button>
        <Typography>Эсвэл</Typography>
        <Button fullWidth>Бүртгүүлэх</Button>
      </Stack>
    </Stack>
  );
};

export default SignIn;
