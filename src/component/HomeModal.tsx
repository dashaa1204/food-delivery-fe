import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddSubModal from "./addSubModal";

export const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const HomeModal = ({
  handleClose,
  open,
  img,
  title,
  sale,
  values,
  mainValues,
  handleChange,
  NumericFormatCustom,
  numberformat,
  ingredients,
}: {
  handleClose: () => void;
  open: boolean;
  img: string;
  title: string;
  sale: number;
  values: number;
  mainValues: number;
  handleChange: () => void;
  NumericFormatCustom: () => void;
  numberformat: number;
  ingredients: string[];
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <Modal open={open} onClose={handleClose}>
      <Stack sx={modalStyle}>
        <Stack
          p={8}
          spacing={"33px"}
          alignItems={"center"}
          direction={"row"}
          borderRadius={4}
          bgcolor={"white"}
        >
          <Box
            component={"img"}
            src={img}
            width={"500px"}
            height={"500px"}
            borderRadius={"16px"}
          ></Box>
          <Stack spacing={8}>
            <Stack spacing={"2px"} width={"282px"}>
              <Typography fontSize={"28px"} fontWeight={700}>
                {title}
              </Typography>
              <Stack direction={"row"} spacing={2} alignItems={"baseline"}>
                <TextField
                  value={values.numberformat}
                  onChange={handleChange}
                  name="numberformat"
                  id="formatted-numberformat-input"
                  InputProps={{
                    inputComponent: NumericFormatCustom as any,
                    disableUnderline: true,
                    style: {
                      color: "#18BA51",
                      fontSize: "18px",
                      fontWeight: 600,
                    },
                  }}
                  variant="standard"
                />
                {sale > 0 && (
                  <TextField
                    value={mainValues.numberformat}
                    onChange={handleChange}
                    name="numberformat"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumericFormatCustom as any,
                      disableUnderline: true,
                      style: {
                        fontSize: "18px",
                        fontWeight: 400,
                        textDecoration: "line-through",
                      },
                    }}
                    variant="standard"
                  />
                )}
              </Stack>
              <Stack spacing={3}>
                <Typography>Орц</Typography>
                <Stack
                  p={"8px"}
                  direction="row"
                  spacing={1}
                  alignItems={"center"}
                  display={"flow"}
                >
                  {ingredients.map((a, index) => {
                    return (
                      <Typography
                        key={index}
                        color={"#767676"}
                        fontSize={"16px"}
                        fontWeight={400}
                        flexWrap={"wrap"}
                        display={"inline"}
                      >
                        {a},
                      </Typography>
                    );
                  })}
                </Stack>
              </Stack>
              <Typography>Тоо</Typography>
              <AddSubModal quantity={quantity} setQuantity={setQuantity} />
              <Button sx={{ width: "384px" }}>Сагслах</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default HomeModal;
