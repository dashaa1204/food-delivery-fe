import { Box, Modal, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        suffix="₮"
      />
    );
  }
);

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MealCard = ({
  img,
  title,
  price,
}: {
  img: string;
  title: string;
  price: number;
}) => {
  const [mainValues, setMainValues] = useState({
    numberformat: price,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMainValues({
      ...mainValues,
      [event.target.name]: event.target.value,
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(!open);

  return (
    <Stack
      sx={{ marginLeft: 2 }}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <Stack position={"relative"}>
        <Box
          component={"img"}
          src={img}
          width={"282px"}
          height={"186px"}
          borderRadius={"16px"}
        ></Box>
      </Stack>

      <Stack width={"282px"} spacing={"2px"}>
        <Typography fontSize={"18px"} fontWeight={600}>
          {title}
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <TextField
            value={mainValues.numberformat}
            onChange={handleChange}
            name="numberformat"
            id="formatted-numberformat-input"
            InputProps={{
              inputComponent: NumericFormatCustom as any,
              disableUnderline: true,
              style: { color: "#18BA51", fontSize: "18px", fontWeight: 600 },
            }}
            variant="standard"
          />
        </Stack>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Stack>
  );
};

export default MealCard;
