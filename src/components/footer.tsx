import React from "react";
import { useTheme,Box, ListItemIcon, ListItemButton, Link, styled } from "@mui/material";
import { siteConfig } from "../configs/site-config";
import { getBackgroundColour, getTagColour } from "../theme";
import "./style/footer.css";

function Footer() {
  const theme = useTheme();
  return (
    <Box className="footer" sx={{backgroundColor: "primary.main", flexDirection: { xs: "column", md: "row" }}}>
      <Box className="author">
        © {new Date().getFullYear()} Satyaprakash Jena{" "}
      </Box>
      {/* sx={{ marginLeft:{xs:'10%',md:'20%'}}} #3f3842*/} 
      <Box className="footer-icons">
        {siteConfig.author.accounts.map((sc, index) => (
          <Link href={sc.url}>
            <ListItemButton className="footer-button custom-border-radius" key={index} sx={{ ":hover": { backgroundColor: getBackgroundColour(sc.color, theme.palette.mode) }}}>             
              <ListItemIcon className="listItemIcon" sx={{ color: getTagColour(sc.color, theme.palette.mode), ":hover": { color: "none" }}}>
                {sc.icon}    
              </ListItemIcon>
            </ListItemButton>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
export default Footer;

//rgb(59, 65, 76) #3f3842

// paddingTop:{xs:'5%'} marginLeft:{xs:'13%',md:'20%'}
