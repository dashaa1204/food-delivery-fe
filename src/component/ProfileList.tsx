import { Box, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import EditIcon from "./icons/EditIcon";

const ProfileList = ({
  icon,
  title,
}: {
  icon: ReactElement;
  title: string;
}) => {
  return (
    <Stack
      py={2}
      px={5}
      alignItems={"center"}
      gap={2}
      borderRadius={1}
      bgcolor={"#F6F6F6"}
      direction={"row"}
      width={"100%"}
      justifyContent={"space-between"}
    >
      {icon}
      <Stack gap={1}>
        <Typography fontSize={"12px"} fontWeight={400} color={"#888A99"}>
          {title}
        </Typography>
        <Box component={"input"} border={"none"}></Box>
      </Stack>
      <EditIcon />
    </Stack>
  );
};

export default ProfileList;
