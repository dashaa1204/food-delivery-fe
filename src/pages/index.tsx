import { Stack, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Pattern from "../component/icons/Pattern";
import Image from "next/image";
import ControlCards from "@/component/ControlCards";

const controlCardsData = [
  {
    svg: "book.svg",
    title: "Хүргэлтийн төлөв хянах",
    detail: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    svg: "time.svg",
    title: "Шуурхай хүргэлт",
    detail: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    svg: "eco.svg",
    title: "Эрүүл, баталгаат орц",
    detail: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    svg: "book.svg",
    title: "Хоолны өргөн сонголт",
    detail: "Захиалга бэлтгэлийн явцыг хянах",
  },
];

const Home = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={`row`}
      width={theme.breakpoints.values.xl}
      bgcolor={theme.palette.primary.main}
      height={"788px"}
      position={"relative"}
      alignItems={"center"}
      justifyContent={"space-around"}
      overflow={"hidden"}
      spacing={10}
    >
      <Box position={"absolute"}>
        <Pattern />
      </Box>
      <Stack width={"384px"} height={"224px"} spacing={"23px"}>
        <Typography
          fontSize={"55px"}
          fontWeight={"600"}
          letterSpacing={"0.55px"}
          lineHeight={"90%"}
          color={"white"}
        >
          Pinecone Food delivery
        </Typography>
        <Box border={1} width={"383px"} borderColor={"white"}></Box>
        <Typography
          fontSize={"22px"}
          fontWeight={"700"}
          lineHeight={"120%"}
          letterSpacing={"0.22px"}
          color={"white"}
        >
          Horem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Stack>
      <Stack width={"588px"} height={"438px"} position={"relative"}>
        <Image src={"/mainFood1.png"} width={443} height={438} alt="mainImg1" />
        <Box position={"absolute"} top={"110px"} left={"280px"}>
          <Image
            src={"/mainFood2.png"}
            width={313}
            height={313}
            alt="mainImg1"
          />
        </Box>
      </Stack>
      <ControlCards controlCardsData={controlCardsData} />
    </Stack>
  );
};

export default Home;
