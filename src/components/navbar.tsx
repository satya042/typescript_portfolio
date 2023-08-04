import * as React from 'react';
import { useContext } from "react";
import { useTheme, Theme, Box, AppBar, Toolbar, IconButton, Avatar, Typography, Container, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import UserIcon from '../assets/user_icon.png';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GitHubIcon from '@mui/icons-material/GitHub';
import { ColorModeContext } from "../theme";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom'


interface NavItem {
  icon: React.ReactNode;
  name: string;
  link: string;
}

const Navbar: React.FC = () => {

  const navItems: NavItem[] = [
    { name: "About", icon: <RxAvatar />, link: "/About" },
    { name: 'Tech Stack', icon: <AiTwotoneThunderbolt />, link: '/TechStack' },
    { name: 'Open Source', icon: <BsBook />, link: '' },
  ];
  
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <AppBar position="fixed" 
      sx={{
        backgroundColor: 'navbar.default',
        boxShadow:isDrawerOpen? 0 : 5,
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
              BackdropProps={{ invisible: true }}
            > 
            <Box sx={{pt:7}}></Box>
              <List sx={{backgroundColor: 'navbar.default' }}>
                {navItems.map((text, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton>
                      <Link style={{ textDecoration: "none", color: 'white' ,display:'flex',flexDirection:'row'}} to={text.link}>
                        <ListItemText sx={{mr:1,pt:.2}}>{text.icon}</ListItemText>
                        <ListItemText primary={text.name} onClick={toggleDrawer} />
                      </Link>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>
          <Link to={'/'}>
            <Avatar variant="circular" src={UserIcon} sx={{display:{xs:'none',md:'inline-block'}}}></Avatar>
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
                <Link style={{textDecoration:"none",color:theme.palette.mode==="dark" ?"#ffffff":"#000000" }} to={page.link}>{" "}{page.name}</Link>
                {/* <NavbarLink style={{ color: theme.palette.mode === "dark" ? "#ffffff" : "#000000" }} to={page.link}>{page.name}</NavbarLink> */}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Link to="https://github.com/satya042" style={{textDecoration:"none",color:"#ffffff"}}>
          <IconButton><GitHubIcon /></IconButton>
          </Link>
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
