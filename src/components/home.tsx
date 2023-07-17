import * as React from "react";
import { Box, Avatar, useTheme, styled, Paper} from "@mui/material";


//import Projects from "./projects";
// import { projectsList } from "data/projects-list";
import { ColorModeContext, tokens } from "../theme";
//import "../style/home.css";
import UserIcon from '../assets/user_icon.png';
//import { Margin, Start } from "@mui/icons-material";

// const ANIMATION_DURATION = 0.5;
// const ORANGE = "#ff9400";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const colorMode = useContext(ColorModeContext);
  return (
    <Box sx={{maxWidth:'100%',backgroundColor:"primary.main"}}>
    <Box flexDirection={{ xs: "column", md: "row" }} sx={{ backgroundColor:"primary.main", display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: "center", width: { xs: '100%', md: '55%' }, height: { xs: 20, md: 400 }, marginLeft: { xs: 0, md: '22%' }, flexGrow: 1 }}  >
      <Avatar variant="circular" sx={{ width: 175, height: 175, marginTop: { xs: 100, md: 5 } }} src={UserIcon}></Avatar>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: { xs: 3, md: 6 } }}>
        <Box sx={{ whiteSpace: 'nowrap', alignSelf: 'flex-start', fontSize: 40, fontWeight: 'bold', mt: 5, mb: 2 }}>Hey! 👋</Box>
        <Box sx={{ fontSize: 25, fontWeight: 500, textAlign: 'left', }}>
          My name is{" "}
          <Box component="span" sx={{ fontWeight: 600, }}>Satyaprakash</Box>{" "}
          and I&apos;m a{" "}
          <Box component="span" whiteSpace={"nowrap"} >Full Stack Developer and</Box>{" "}
          <Box component="span" whiteSpace={"nowrap"} > an open source lover&nbsp;</Box>from{" "}
          <Box component="span" whiteSpace={"nowrap"}>India in</Box>
          <Box fontSize={25} fontWeight="500" mt={5} textAlign="left">
            This is my digital garden, where I write about the things I'm working
            on and share what I've learned. 😊
          </Box>
        </Box>{" "}
      </Box>
    </Box>
    </Box>
  );
};

export default Home;


