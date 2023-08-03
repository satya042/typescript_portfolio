import React from 'react';
import {Box,ListItemIcon,ListItemButton, Link, styled} from '@mui/material';
import {siteConfig} from "../configs/site-config";
import './style/footer.css'

function Footer(){
return(
  <Box sx={{ backgroundColor: 'primary.main', display:'flex' ,flexDirection:{xs:'column',md:'row'},height:'100%',paddingY:'1%'}}>
    <Box fontSize="lg" sx={{display:'inline-flex',marginLeft:{xs:'25%',fontSize:'14px'}}}>
      © {new Date().getFullYear()} Satyaprakash Jena{" "}
    </Box>
    <Box sx={{ display: 'flex',flexDirection: 'row',marginLeft:{xs:'10%',md:'20%'}}}>
      {siteConfig.author.accounts.map((sc, index) => (
        <ListItemButton className="footerButton" key={index} sx={{borderRadius:'10px',":hover":{backgroundColor:'#3f3842'} }} >
          <Link href={sc.url}>
            <ListItemIcon className='listItemIcon' sx={{color:`${sc.color}`, ":hover": {color: 'none'}}}>{sc.icon}</ListItemIcon>
          </Link>
        </ListItemButton>
      ))}
    </Box>
  </Box>
);

}
export default Footer;


//rgb(59, 65, 76) #3f3842

// paddingTop:{xs:'5%'} marginLeft:{xs:'13%',md:'20%'}