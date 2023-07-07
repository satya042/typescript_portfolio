import * as React from 'react';
import { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
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
//import { makeStyles, Theme, createStyles } from '@mui/styles';

const pages = ['About', 'Blog', 'Links'];
type Anchor = 'top';

interface NavItem {
  label: string;
  link: string;
}

const navItems: NavItem[] = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Services', link: '/services' },
  { label: 'Contact', link: '/contact' },
];

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     appBar: {
//       zIndex: theme.zIndex.drawer + 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     drawer: {
//       width: 240,
//     },
//     drawerPaper: {
//       width: 240,
//     },
//   })
// );

function Navbar() {
  
  const [open,isOpen] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  
  //const [state, setState] = React.useState({top: false,});
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
      <AppBar position="static" sx={{
          backgroundColor:'background.default',
          boxShadow: 5,
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

            {/* 
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
    


            <Drawer
              anchor="top"
              variant="temporary"
              open={isDrawerOpen}
              onClose={handleCloseNavMenu}
              sx={{width:10,marginTop:6}}
            >
              <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
     

            
          </Box>
          <Avatar variant="circular" src={UserIcon}></Avatar>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >   
          </Typography>
          <Box pl={2} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{my: 1, px:2, color: "white", display: "block", textTransform: "none",fontSize:"22px"  }}
              >
                {page}
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




// import React, { useState } from 'react';
// //import { makeStyles, Theme, createStyles } from '@mui/styles';
// import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

// // const useStyles = makeStyles((theme: Theme) =>
// //   createStyles({
// //     appBar: {
// //       zIndex: theme.zIndex.drawer + 1,
// //     },
// //     menuButton: {
// //       marginRight: theme.spacing(2),
// //     },
// //     drawer: {
// //       width: 240,
// //     },
// //     drawerPaper: {
// //       width: 240,
// //     },
// //   })
// // );

// interface NavItem {
//   label: string;
//   link: string;
// }

// const Navbar: React.FC = () => {
//   //const classes = useStyles();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const toggleDrawer = () => {
  //   setIsDrawerOpen(!isDrawerOpen);
  // };

//   const navItems: NavItem[] = [
//     { label: 'Home', link: '/' },
//     { label: 'About', link: '/about' },
//     { label: 'Services', link: '/services' },
//     { label: 'Contact', link: '/contact' },
//   ];

//   return (
//     <div>
//       <AppBar position="fixed" >
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
            
//             onClick={toggleDrawer}
//           >
//             {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>
//           {/* Add your logo here */}
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{width:240}}
//         variant="persistent"
//         anchor="top"
//         open={isDrawerOpen}
      
//       >
//         <List>
//           {navItems.map((item, index) => (
//             <ListItem button key={index}>
//               <ListItemText primary={item.label} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Toolbar /> {/* Add space for the fixed AppBar */}
//       {/* Your page content goes here */}
//     </div>
//   );
// };

// export default Navbar;
