import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import React, { useState } from "react";
import AddSubModal from "./AddSubModal";
import Close from "./icons/Close";

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
  const closeType = {
    position: "absolute",
    top: "32px",
    left: "925px",
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Stack sx={modalStyle}>
        <Stack
          p={"32px"}
          gap={"32px"}
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
            sx={{ objectFit: "cover" }}
          ></Box>
          <Stack gap={8} width={"384px"}>
            <Stack gap={"32px"} justifyContent={"center"}>
              <Stack gap={"2px"} width={"282px"}>
                <Typography fontSize={"28px"} fontWeight={700}>
                  {title}
                </Typography>
                <Stack direction={"row"} gap={2} alignItems={"baseline"}>
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
              </Stack>
              <Stack gap={3}>
                <Typography>Орц</Typography>
                <Stack
                  p={"8px"}
                  direction="row"
                  gap={1}
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
              <Button
                sx={{
                  width: "384px",
                  backgroundColor: "#18BA51",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#18BA51",
                  },
                }}
              >
                Сагслах
              </Button>
              <Stack
                position={"absolute"}
                top={"30px"}
                left={"927px"}
                onClick={() => {
                  handleClose();
                }}
              >
                <Close />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default HomeModal;
