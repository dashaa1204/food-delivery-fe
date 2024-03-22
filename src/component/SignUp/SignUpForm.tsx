import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import PasswordIcon from "../icons/PasswordIcon";
// import { useState } from "react";
const formdata = [
  { name: "Нэр", placeholder: "Нэрээ оруулна уу", id: "name" },
  { name: "И-мэйл", placeholder: "И-мэйл хаягаа оруулна уу", id: "email" },
  {
    name: "Хаяг",
    placeholder: "Та хаягаа оруулна уу",
    id: "adress",
  },
  {
    name: "Нууц үг",
    placeholder: "Нууц үгээ оруулна уу",
    id: "password",
    icon: <PasswordIcon />,
  },
  {
    name: "Нууц үг давтах",
    placeholder: "Нууц үгээ оруулна уу",
    id: "password",
    icon: <PasswordIcon />,
  },
];

const SignUpForum = () => {
  // [check, setCheck] = useState("");
  // [button, setButton] = useState("");
  // function buttonHandler() {
  //   setButton("enable");
  // }
  return (
    <Stack
      width={"1440px"}
      height={"1505px"}
      justifyContent={"center"}
      alignItems={"center"}
      maxWidth={"1440px"}
    >
      <Stack width={"448px"} p={8} gap={"48px"}>
        <Typography>Бүртгүүлэх</Typography>
        <form>
          {formdata.map((e, key) => {
            return (
              <FormControl key={key} fullWidth>
                <Stack gap={"4px"} alignItems={"stretch"}>
                  <Typography fontSize={"8px"}>{e.name}</Typography>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <InputLabel>{e.placeholder}</InputLabel>
                    <Input id={e.id} name={e.id} required type={e.id} />
                    <Stack>{e.icon}</Stack>
                  </Stack>
                </Stack>
              </FormControl>
            );
          })}
        </form>
        <FormControlLabel
          control={<Checkbox />}
          label="Үйлчилгээний нөхцөл зөвшөөрөх"
        />
        <Button variant="contained" disabled>
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};

export default SignUpForum;
