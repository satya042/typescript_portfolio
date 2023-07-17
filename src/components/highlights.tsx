import { Box , List,ListSubheader,ListItemButton ,ListItemText,ListItemIcon} from '@mui/material';
import React from 'react';


function Highlights(){
    return(
        <Box>
  {/* <Box sx={{marginTop:{xs:'4%',md:'10%'}, borderLeft:'130px',borderLeftColor:'aquamarine',backgroundColor:"green",height:{sx:'30%',md:'50%'},width:{sx:'70%',md:'100%'},padding:{xs:'1%',md:'3%'}}}> 
      <List
            sx={{ bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader sx={{fontSize:'20px',fontWeight:'bold'}} component="h2" id="nested-list-subheader">
                Highlights
              </ListSubheader>
            }>
              <ListItemButton>
        
        <ListItemText primary=". Live/Local Github Repos " />
      </ListItemButton>
      <ListItemButton>
        
        <ListItemText primary=". Story page" />
      </ListItemButton>
      <ListItemButton>
       
        <ListItemText primary=". Tech Stack" />
      </ListItemButton>
      <ListItemButton>
        {/* <ListItemIcon>
          <SendIcon />
        </ListItemIcon> */}
   {/*     <ListItemText primary=". Achievements" />
      </ListItemButton>
      </List>
      </Box>
       */}
        </Box>
    );
}

export default Highlights;