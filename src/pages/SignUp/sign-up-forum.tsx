import {
  FormControl,
  Input,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
const formdata = [
  { name: "Нэр", placeholed: "Нэрээ оруулна уу" },
  { name: "И-мэйл", placeholed: "И-мэйл хаягаа оруулна уу" },
  { name: "Хаяг", placeholed: "Та хаягаа оруулна уу" },
  { name: "Нууц үг", placeholed: "Нууц үгээ оруулна уу" },
  { name: "Нууц үг давтах", placeholed: "Нууц үгээ оруулна уу" },
];

const SignUpForum = () => {
  return (
    <Stack
      width={"1440px"}
      height={"1505px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack width={"448px"} p={8}>
        <Typography>Бүртгүүлэх</Typography>
        <form>
          {formdata.map((e, key) => {
            return (
              <FormControl key={key}>
                <InputLabel>{e.name}</InputLabel>
                <Input id="email" name="email" required />
              </FormControl>
            );
          })}
        </form>
      </Stack>
    </Stack>
  );
};

export default SignUpForum;
