import React from 'react';
import {Box,ListItemIcon,ListItemButton, Link, styled} from '@mui/material';
import {siteConfig} from "../configs/site-config";


const IconNoPadding = styled(ListItemButton)(`
  width:50px;
  height:40px;

  padding-left: 0;
  padding-right: 0;
  &:last-child {
 
  }
`);

function Footer(){
return(
  <Box sx={{ backgroundColor: 'primary.main', flexDirection:{xs:'row',md:'column'},height:'100%',paddingY:'1%'}}>
    <Box textAlign="center" fontSize="lg" sx={{display:'inline-flex',marginLeft:{xs:'25%',fontSize:'14px'}}}>
      © {new Date().getFullYear()} Satyaprakash Jena{" "}
    </Box>
    <Box sx={{ display: 'inline-flex', flexDirection: 'row' ,marginLeft:{xs:'13%',md:'20%'},paddingTop:{xs:'5%'}}}>
      {siteConfig.author.accounts.map((sc, index) => (
        <IconNoPadding key={index} sx={{borderRadius:'7px'}} >
          <Link href={sc.url}>
            <ListItemIcon sx={{display:'flex', fontSize:'20px', justifyContent:'center',alignItems:'center'}}>{sc.icon}</ListItemIcon>
          </Link>
        </IconNoPadding>
      ))}
    </Box>
  </Box>
);

}
export default Footer;


//rgb(59, 65, 76)

