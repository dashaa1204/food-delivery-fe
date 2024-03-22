import { Box, Button, Stack, Typography } from "@mui/material";
import PasswordIcon from "../icons/PasswordIcon";

const SignIn = () => {
  return (
    <Stack gap={"48px"} p={8}>
      <Typography>Нэвтрэх</Typography>
      <Stack width={"384px"} gap={"8px"}>
        <form action="">
          <Stack gap={"8px"}>
            <Stack>
              <Typography>Имэйл</Typography>
              <Box
                component={"input"}
                placeholder="Имэйл хаягаа оруулна уу"
                bgcolor={"#8B8E95"}
              ></Box>
            </Stack>
            <Stack>
              <Typography>Нууц үг</Typography>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                bgcolor={"#8B8E95"}
              >
                <Box
                  component={"input"}
                  placeholder="Нууц үг"
                  bgcolor={"#8B8E95"}
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
        <Button>Нэвтрэх</Button>
        <Typography>Эсвэл</Typography>
        <Button>Бүртгүүлэх</Button>
      </Stack>
    </Stack>
  );
};

export default SignIn;
