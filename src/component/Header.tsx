import { AppBar, Box, Stack, TextField, Toolbar } from "@mui/material";
import Container from "@mui/material/Container";
import MainLogo from "./icons/MainLogo";
import SearchIcon from "./icons/SearchIcon";

const pages = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Stack
          p={2}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          direction={"row"}
        >
          <Toolbar>
            <Stack direction={"row"} spacing={4}>
              <MainLogo />
              <Stack direction={"row"} spacing={4}>
                {pages.map((a, key) => {
                  return <Box key={key}>{a}</Box>;
                })}
              </Stack>
            </Stack>
          </Toolbar>
          <Stack direction={"row"} alignItems={"center"}>
            <SearchIcon />
            <TextField
              variant="outlined"
              label={"Хайх"}
              inputMode="search"
            ></TextField>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;
