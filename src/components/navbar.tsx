import * as React from 'react';
import { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import UserIcon from '../assets/user_icon.png';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { makeStyles, createStyles } from '@mui/styles';
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { Theme } from '@mui/material';
import { Link } from 'react-router-dom'
import '../styles/nav.css'
import { NavbarLink } from "../styles/nav-button-style";



interface NavItem {
  icon: React.ReactNode;
  name: string;
  link: string;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    drawer: {
      width: 240,
    },
    drawerPaper: {
      width: 240,
    },
  })
);

const Navbar: React.FC = () => {

  const navItems: NavItem[] = [
    { name: "About", icon: <RxAvatar />, link: "/About" },
    { name: 'Tech Stack', icon: <AiTwotoneThunderbolt />, link: '/TechStack' },
    { name: 'Open Source', icon: <BsBook />, link: '/OpenSource' },
  ];
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const classes = useStyles();
  // const [open, isOpen] = React.useState(false);
  //const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  //const [state, setState] = React.useState({top: false,});
  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const toggleDrawer = () =>
  // (event: React.KeyboardEvent | React.MouseEvent) => {
  //   if (
  //     event.type === 'keydown' &&
  //     ((event as React.KeyboardEvent).key === 'Tab' ||
  //       (event as React.KeyboardEvent).key === 'Shift')
  //   ) {
  //     return;
  //   }
  //   setIsDrawerOpen(!isDrawerOpen);
  //   // setState({ ...state, [anchor]: open });
  // };



  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="sticky" component="nav" className={classes.appBar}
      sx={{
        backgroundColor: 'navbar.default',
        boxShadow: 5,
        zIndex: 1250,
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              onClick={toggleDrawer}
              color="inherit"
            >
              {isDrawerOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </IconButton>
            <Drawer
              anchor="top"
              variant="temporary"
              open={isDrawerOpen}
              onClose={toggleDrawer}
              sx={{ width: 10, zIndex: 1190 }}
              BackdropProps={{ invisible: true }}
            >
              <List sx={{ backgroundColor: 'primary.main' }}>
                {navItems.map((text, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton>
                      <Link style={{ textDecoration: "none", color: 'white' }} to={text.link}>
                        <ListItemIcon>{text.icon}</ListItemIcon>
                        <ListItemText primary={text.name} onClick={toggleDrawer} />
                      </Link>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>
          <Link to={'/'}>
            <Avatar variant="circular" src={UserIcon}></Avatar>
          </Link>
          <Typography sx={{mr: 2,display: { xs: 'flex', md: 'none' },flexGrow: 1,}}> </Typography>
          <Box pl={2} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((page, index) => (
              <Button
                key={index}
                size='medium'
                sx={{
                  my: 1, px: 2, mx: 0.3, textTransform: "none", fontSize: "17px", borderRadius: "10px", variant: "outlined", color: "navbar.main",
                  ":hover": { bgcolor: "navbar.hover", color: "#7c98fc" }
                }}
                startIcon={page.icon}
              >
                <Link  style={{textDecoration:"none",color:theme.palette.mode==="dark" ?"#ffffff":"#000000" }} to={page.link}>{" "}{page.name}</Link>
                {/* <NavbarLink style={{ color: theme.palette.mode === "dark" ? "#ffffff" : "#000000" }} to={page.link}>{page.name}</NavbarLink> */}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton>
              <GitHubIcon />
            </IconButton>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

