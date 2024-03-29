import { Button, Stack, Typography } from "@mui/material";

const AddSubModal = ({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (_number: number) => void;
}) => {
  return (
    <Stack direction={"row"} width={"254px"} spacing={"20px"}>
      <Button
        onClick={() => setQuantity(quantity >= 1 ? quantity - 1 : quantity)}
        sx={{ width: "45px", backgroundColor: "#18BA51", color: "#FFF" }}
      >
        -
      </Button>
      <Typography width={"254px"}>{quantity}</Typography>
      <Button
        onClick={() => setQuantity(quantity + 1)}
        sx={{ width: "45px", backgroundColor: "#18BA51", color: "#FFF" }}
      >
        +
      </Button>
    </Stack>
  );
};

export default AddSubModal;
