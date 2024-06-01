import * as React from 'react';
import { useContext } from "react";
import { useTheme, Theme, Box, AppBar, Toolbar, IconButton, Avatar, Typography, Container, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
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
  const classes = {
    menuIcon:{
      flexGrow: 1, 
      display: { xs: 'flex', md: 'none'}
    },
    hiddenBox:{
      pt:7,
      pb:1,
      backgroundColor:'navbar.list',
      display:'flex',
      flexDirection:{xs:'column'},
      justifyContent:'flex-start',
      alignItems:'flex-start'
      },
    usrIcon:{
      display:{xs:'none',md:'inline-block'}
    },
    navTypo:{
      mr: 2,
      display: { xs: 'flex', md: 'none' },
      flexGrow: 1,
    },
    navBtnBox:{
      flexGrow: 1, 
      display: { xs: 'none', md: 'flex' } 
    },
    navButtons:{
      my: {xs:0, md:1}, 
      px: 2, 
      py:{xs:1},
      mx: 0.3, 
      textTransform: "none", 
      fontSize: '17px',  
      variant: "outlined", 
      color: "navbar.main",
      ":hover": { color: "navbar.icon" ,border:'none',background:'none'}, //bgcolor: "navbar.hover"
      border:'none',
      display:'flex',     
    },
    navIcons:{
      iconProperty:{
        borderRadius:4, 
        height:40,
        width:40, 
        border: '1px solid',
        borderColor:'card.border',
        color:'navbar.icon',
        ':hover':'none'
      },
      flexGrow: 0, 
      display:'flex',
      justifyContent:'space-evenly',
      width:'100px' 
    },
  };
  return (     
    <AppBar position="fixed" sx={{backgroundColor: 'navbar.default',  zIndex: 1201, boxShadow:isDrawerOpen? 0 : 2,
    background: theme.palette.mode==="dark" ? "rgba(38, 57, 89, 0.2)" : "rgba(200, 207, 219, 0.2)" , // Glass effect background 10, 47, 83, 0.2 70, 81, 99
    backdropFilter: 'blur(8px)' // Apply the blur effect
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box  sx={classes.menuIcon}>
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
            > 
            <Box sx={classes.hiddenBox}>{navItems.map((text, index) => (  
              <Button size='medium' variant='outlined'
                key={index}
                sx={classes.navButtons}
                startIcon={text.icon}
                href={text.link}
                onClick={toggleDrawer}
              >
                {text.name}
              </Button>
              ))} 
              </Box>  
            </Drawer>
          </Box>
          <Link to={'/'}> 
            <Avatar variant="circular" src={UserIcon} sx={classes.usrIcon}></Avatar>
          </Link>
          <Typography sx={classes.navTypo}> </Typography>
          <Box pl={2} sx={classes.navBtnBox}>
            {navItems.map((page, index) => (
              <Button variant='outlined' size='medium'
                key={index}
                sx={classes.navButtons}
                startIcon={page.icon}
                href={page.link}
              >
                {page.name}
                {/* <Link style={{textDecoration:"none",color:theme.palette.mode==="dark" ?"#ffffff":"#000000" }} to={page.link}>{" "}{page.name}</Link> */}
              </Button>
            ))}
          </Box>
          <Box sx={classes.navIcons}>
            <Link style={{ textDecoration: "none" }} to="https://github.com/satya042" >
              <IconButton sx={classes.navIcons.iconProperty}><GitHubIcon /></IconButton>
            </Link>
            <IconButton sx={classes.navIcons.iconProperty} onClick={colorMode.toggleColorMode}  >
              {theme.palette.mode === "dark" ? (<DarkModeOutlinedIcon/>) : (<LightModeOutlinedIcon/>)}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
