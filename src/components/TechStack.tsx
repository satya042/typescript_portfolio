import * as React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Link } from "@mui/material";
import { skills } from "../data/data";
import { styled } from "@mui/material/styles";


interface TechCard {
  name:string;
  image: string;
  link:string;
  description: string;
}

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

//const TechStackCard = ({ name, image, link, description }) => {
const TechStackCard:React.FC<TechCard> = ({ name, image, link, description }) => {
  return (
        <Box sx={{width:350,height:'auto'}}>
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
      <Box sx={{ whiteSpace: 'nowrap', alignSelf: 'flex-start', fontSize: 30, fontWeight: 'bold', mt: 0, mb: 2 }}>Tech Stack</Box>
      <Typography>A list of my favorite and technologies that I use on a regular basis.</Typography>
      <Box sx={{ m: 1,display:"flex",justifyContent:"space-between"}}>
        {skills.map((tool, index) =>
          <TechStackCard 
            key={index}
            link={tool.link}
            image={tool.image}
            description={tool.description}
            name={tool.name} />
        )}
      </Box>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minima necessitatibus iste! Officia nobis aliquid, cupiditate aperiam eveniet, nesciunt sunt minima in culpa, fuga eos asperiores assumenda corrupti dolore aliquam!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas error eos commodi libero! Adipisci, repellendus suscipit amet, blanditiis recusandae labore doloremque minus, hic consequuntur quam laboriosam illo similique autem.
    </Box>
  )
}
export default TechStack;



//git pull
// git status
// git add File1
// git commit -m "uodate file"
// git push -u origin master



// import * as React from "react";
// import { Box, Typography, Card, CardContent, CardMedia, Link } from "@mui/material";
// import { skills } from "../data/data";
// import { styled } from "@mui/material/styles";


// const CardContentNoPadding = styled(CardContent)(`
//   padding: 0;
//   &:last-child {
//     padding-bottom: 0;
//   }
// `);

// const TechStackCard = ({ name, image, link, description }) => {
//   return (
//         <Box sx={{width:350,height:'auto'}}>
//             <Card sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'card.main', border: '1px solid', borderRadius: '12px', borderColor: "card.border"}}> 
//                 <CardMedia component="img" src={image} sx={{ m:1,display:'flex', justifyContent:'center',alignItems:'center',width:'50px',height:'50px'}} ></CardMedia> 
//                 <Box sx={{ display: 'flex', flexDirection: 'column' ,p:1 }}>
//                     <CardContentNoPadding sx={{ flex: 'auto'}}>
//                         <Link href={link} color="inherit" sx={{ textDecoration: 'none',fontSize:'18px',fontWeight:'bold' }} noWrap={true} >{name}</Link>
//                         <Typography variant="subtitle1" color="text.secondary" fontSize='14px' component="div" noWrap={false}>{description}</Typography>
//                     </CardContentNoPadding>
//                 </Box>
//             </Card>
//         </Box>
//     );
// };


// const TechStack = () => {
//   return (
//     <Box sx={{ backgroundColor: 'primary.main', width: '100%', height: '100%' }}>
//       <Box sx={{ whiteSpace: 'nowrap', alignSelf: 'flex-start', fontSize: 30, fontWeight: 'bold', mt: 0, mb: 2 }}>Tech Stack</Box>
//       <Typography>A list of my favorite and technologies that I use on a regular basis.</Typography>
//       <Box sx={{ m: 1,display:"flex",justifyContent:"space-between"}}>
//         {skills.map((tool, index) =>
//           <TechStackCard 
//             key={index}
//             link={tool.link}
//             image={tool.image}
//             description={tool.description}
//             name={tool.name} />
//         )}
//       </Box>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minima necessitatibus iste! Officia nobis aliquid, cupiditate aperiam eveniet, nesciunt sunt minima in culpa, fuga eos asperiores assumenda corrupti dolore aliquam!
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas error eos commodi libero! Adipisci, repellendus suscipit amet, blanditiis recusandae labore doloremque minus, hic consequuntur quam laboriosam illo similique autem.
//     </Box>
//   )
// }
// export default TechStack;


