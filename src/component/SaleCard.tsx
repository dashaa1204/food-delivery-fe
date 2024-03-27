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

const SaleCard = ({
  img,
  title,
  price,
  sale,
}: {
  img: string;
  title: string;
  price: number;
  sale: number;
}) => {
  const [values, setValues] = useState({
    numberformat: price - (sale * price) / 100,
  });
  const [mainValues, setmainValues] = useState({
    numberformat: price,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

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
        <Typography fontSize={"18px"} fontWeight={600}>
          {title}
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <TextField
            value={values.numberformat}
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
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SaleCard;
