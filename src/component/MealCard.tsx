import { Box, Stack, TextField, Typography } from "@mui/material";
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
    </Stack>
  );
};

export default MealCard;
