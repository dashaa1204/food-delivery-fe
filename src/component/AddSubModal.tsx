import { Button, Stack, Typography } from "@mui/material";

const AddSubModal = ({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (_number: number) => void;
}) => {
  return (
    <Stack
      direction={"row"}
      width={"384px"}
      gap={"20px"}
      justifyContent={"space-between"}
    >
      <Button
        onClick={() => setQuantity(quantity >= 1 ? quantity - 1 : quantity)}
        sx={{
          fontSize: "14px",
          width: "45px",
          backgroundColor: "#18BA51",
          color: "#FFF",
          "&:hover": {
            backgroundColor: "white",
            color: "#18BA51",
          },
        }}
      >
        -
      </Button>
      <Stack width={"254px"} justifyContent={"center"} alignItems={"center"}>
        <Typography>{quantity}</Typography>
      </Stack>

      <Button
        onClick={() => setQuantity(quantity + 1)}
        sx={{
          width: "45px",
          backgroundColor: "#18BA51",
          color: "#FFF",
          "&:hover": {
            backgroundColor: "white",
            color: "#18BA51",
          },
        }}
      >
        +
      </Button>
    </Stack>
  );
};

export default AddSubModal;
