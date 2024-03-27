import ProfileList from "@/component/ProfileList";
import EditIcon from "@/component/icons/EditIcon";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import ProfileIcon from "@/component/svgs/ProfileIcon";
import Phone from "@/component/svgs/Phone";
import EmailIcon from "@/component/svgs/EmailIcon";
import History from "@/component/svgs/History";
import Exit from "@/component/svgs/Exit";

const profilelist = [
  { icon: <ProfileIcon />, title: "Таны нэр", edit: <EditIcon /> },
  { icon: <Phone />, title: "Утасны дугаар", edit: <EditIcon /> },
  { icon: <EmailIcon />, title: "Имэйл хаяг", edit: <EditIcon /> },
];

const Profile = () => {
  const theme = useTheme();
  return (
    <Stack
      width={theme.breakpoints.values.xl}
      my={30}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack width={"432px"} alignItems={"center"} spacing={6}>
        <Stack spacing={"40px"} alignItems={"center"} position={"relative"}>
          <Box
            component={"img"}
            src="https://s3-alpha-sig.figma.com/img/631c/b511/384755363304d9f32de12bfe2335873c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lyF4Kcu8eN~31ye7w1nSUxzo3v7R94uzUhLOMQ55ANQ7eH1z3cxVorNJshIggSnQo56hLOr2vLV2H~e6a03oDKaz2Y6ZbhKVnDA93nZf9hudZa6q1KHmpN~JOObKUT~yvWv1jJfUWE7E0Beoxe84956lF4YaiGRp4sRB4GyPzCHZH9vHWWgfJu06vnrLiymsomiUJ7UWHtg2abXoR~Jj7mJzJSuotFfVWO1-0QA6QRvIqu1Ud-WYAYMbn~qqOfYaW3SlUtQySRYQTAlk0V5OwBJ2RUjguwfVsQRjbitX1f9c7dbiUy-m~PaDpuvzTzbjIC6-h9z-qNpEgAKC77MA2g__"
            width={"120px"}
            height={"120px"}
            borderRadius={"120px"}
          ></Box>
          <Stack
            position={"absolute"}
            right={-4}
            bottom={-5}
            bgcolor={"white"}
            border={1}
            borderColor={"#D6D8DB"}
            borderRadius={"100px"}
            width={"34px"}
            height={"34px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <EditIcon />
          </Stack>
        </Stack>
        <Typography>УгтахБаяр</Typography>
        <Stack
          spacing={"16px"}
          justifyContent={"center"}
          alignItems={"center"}
          p={5}
          mt={0}
        >
          {profilelist.map((a, key) => {
            return <ProfileList icon={a.icon} title={a.title} key={key} />;
          })}
          <Stack
            py={2}
            px={5}
            alignItems={"center"}
            spacing={2}
            borderRadius={1}
            direction={"row"}
            width={"100%"}
          >
            <History />
            <Stack spacing={1}>
              <Typography
                fontSize={"12px"}
                fontWeight={400}
                color={"#888A99"}
              ></Typography>
              <Box>Захиалгын түүх</Box>
            </Stack>
          </Stack>
          <Stack
            py={2}
            px={5}
            alignItems={"center"}
            spacing={2}
            borderRadius={1}
            direction={"row"}
            width={"100%"}
          >
            <Exit />
            <Stack spacing={1}>
              <Typography
                fontSize={"12px"}
                fontWeight={400}
                color={"#888A99"}
              ></Typography>
              <Box>Гарах</Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;
