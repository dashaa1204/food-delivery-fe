import { Stack, Typography } from "@mui/material";

const Page = () => {
  return (
    <Stack mt={100} mb={100}>
      <Typography>Hello</Typography>
      <input type="file" />
      <button>Upload</button>
    </Stack>
  );
};

export default Page;
