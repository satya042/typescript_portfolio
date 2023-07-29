import * as React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Link, Grid } from "@mui/material";
import { skills } from "../data/data";
import { styled } from "@mui/material/styles";


interface TechCard {
  name:string;
  image: string;
  link:string;
  description: string;
  key:number;
}

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

function getScreenLength() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  return { width: screenWidth, height: screenHeight };
}
// const screenDimensions = getScreenLength();
// console.log(screenDimensions.width); // Output: Screen width in pixels
// console.log(screenDimensions.height); // Output: Screen height in pixels 

// React.useEffect(()=>{

// });

//const TechStackCard = ({ name, image, link, description }) => {
const TechStackCard:React.FC<TechCard> = ({key, name, image, link, description }) => {
  return (
        <Box key={key} sx={{width:350,height:'auto',my:.5}}>
            <Card sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'card.main', border: '1px solid', borderRadius: '12px', borderColor: "card.border"}}> 
                <CardMedia component="img" src={image} sx={{ m:1,display:'flex', justifyContent:'center',alignItems:'center',width:'50px',height:'50px'}} ></CardMedia> 
                <Box sx={{ display: 'flex', flexDirection: 'column' ,p:1 }}>
                    <CardContentNoPadding sx={{ flex: 'auto'}}>
                        <Link href={link} color="inherit" sx={{ textDecoration: 'none',fontSize:'18px',fontWeight:'bold' }} noWrap={true} >{name}</Link>
                        <Typography variant="subtitle1" color="text.secondary" fontSize='14px' component="div" noWrap={false}>{description}</Typography>
                    </CardContentNoPadding>
                </Box>
            </Card>
        </Box>
    );
};

const TechStack = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', width: '100%', height: '100%' }}>
       <Box sx={{marginLeft:{xs:0,md:'30%',mt:{xs:2,md:10}}}}>
      <Box sx={{ whiteSpace: 'nowrap', alignSelf: 'flex-start', fontSize: 30, fontWeight: 'bold' }}>Tech Stack</Box>
      <Typography>A list of my favorite and technologies that I use on a regular basis.</Typography>
      <Box sx={{ m: 1,display:"flex",justifyContent:"space-between"}}>
      <Grid item xs={12} sm={6} md={6}>
        {skills.map((tool) =>
          <TechStackCard 
            key={tool.item}
            link={tool.link}
            image={tool.image}
            description={tool.description}
            name={tool.name} />
        )}
      </Grid>
      </Box>
      </Box>
    </Box>
  )
}
export default TechStack;



//git pull
// git status
// git add File1
// git commit -m "uodate file"
// git push -u origin master


