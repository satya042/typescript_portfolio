import React from 'react';
import {Box,ListItemIcon,ListItemButton, Link, styled} from '@mui/material';
import {siteConfig} from "../configs/site-config";


const IconNoPadding = styled(ListItemButton)(`
  padding: 0;
  &:last-child {
    padding-left: 0;
    padding-right: 0;
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
        <IconNoPadding key={index} >
          <Link href={sc.url}>
            <ListItemIcon sx={{fontSize:'18px'}}>{sc.icon}</ListItemIcon>
          </Link>
        </IconNoPadding>
      ))}
    </Box>
  </Box>
);

}
export default Footer;


//rgb(59, 65, 76)

// <Box textAlign="center">
// {siteConfig.author.accounts.map((sc, index) => (
//   <IconButton
//     key={index}
//     as={Link}
//     isExternal
//     href={sc.url}
//     aria-label={sc.label}
//     size="lg"
//     colorScheme={sc.type}
//     icon={sc.icon}
//     {...iconProps}
//   />
// ))}
// </Box>