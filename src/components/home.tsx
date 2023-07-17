import * as React from "react";
import { Box, Avatar, styled, Paper,Grid, Link, Stack,Card ,CardContent,CardMedia,Typography} from "@mui/material";
import { getTagColor, getTagBackgroundColor } from "../theme";
import { projectsList } from '../data/project-list';
import UserIcon from '../assets/user_icon.png';


// const ANIMATION_DURATION = 0.5;
// const ORANGE = "#ff9400";



interface ProjectCardProps {
  key: number
  title: string;
  description: string;
  logo: string;
  link: string;
  technologies: string[];
}

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(.5),
  textAlign: 'center',
  borderRadius: '7px'
}));


const ProjectCard: React.FC<ProjectCardProps> = ({ key, title, description, logo, link, technologies }) => {
  return (
    <Box sx={{ width: '100%', height: 'auto',my:.5 }}>
      <Card sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'card.main', border: '1px solid', borderRadius: '12px', borderColor: "card.border" }}>
        <CardMedia component="img" src={logo} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%', m: 1.5, height: '10%' }} ></CardMedia>
        <Box sx={{ display: 'inline-flex', flexDirection: 'column', p: 1 }}>
          <Box sx={{ display: 'inline-flex', flexDirection: 'row' }} >
            <CardContentNoPadding >
              <Link href={link} color="inherit" sx={{ textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }} noWrap={true} >{title}</Link>
            </CardContentNoPadding>
            <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
              {technologies.map(tech => (<Item sx={{ color: getTagColor(tech), backgroundColor: getTagBackgroundColor(tech) }}> {tech} </Item>))}
            </Stack>
          </Box>
          <Typography variant="body1" color="text.secondary" fontSize='14px' component="div" sx={{ flexWrap: "wrap" }}>
            {description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

const Home = () => {
  return (
    <Box sx={{maxWidth:'100%',backgroundColor:"primary.main",display:"flex",justifyContent:"center",flexDirection:"column"}}>
    <Box flexDirection={{ xs: "column", md: "row" }} sx={{ backgroundColor:"primary.main", display: 'flex', justifyContent: 'center',  width: { xs: '100%', md: '45%' }, height: '100%',marginLeft:{xs:0,md:'26%'},  flexGrow: 1 }}  >
      <Avatar variant="circular" sx={{ width: 175, height: 175, marginTop: { xs: 6, md: 15 },justifyContent:"center",marginLeft:{xs:'28%',md:0}}} src={UserIcon}></Avatar>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: { xs: 3, md: 6 } }}>
        <Box sx={{ whiteSpace: 'nowrap', alignSelf: 'flex-start', fontSize: 40, fontWeight: 'bold', mt: 5, mb: 2 }}>Hey! 👋</Box>
        <Box sx={{ fontSize: 25, fontWeight: 500, textAlign: 'left', }}>
          My name is{" "}
          <Box component="span" sx={{ fontWeight: 600, }}>Satyaprakash</Box>{" "}
          and I&apos;m a{" "}
          <Box component="span" whiteSpace={"nowrap"} >Full Stack Developer and</Box>{" "}
          <Box component="span" whiteSpace={"nowrap"} > an open source lover&nbsp;</Box>from{" "}
          <Box component="span" whiteSpace={"nowrap"}>India in</Box>
          <Box fontSize={25} fontWeight="500" mt={5} textAlign="left">
            This is my digital garden, where I write about the things I'm working
            on and share what I've learned. 😊
          </Box>
        </Box>{" "}
      </Box>
    </Box>
   
    {/* <Projects/> */}
    <Box sx={{ display: 'flex', backgroundColor: 'primary.main',justifyContent: 'center', width: { xs: '100%', md: '45%' }, height: '100%',marginLeft:{xs:0,md:'26%'},flexDirection:"column",padding: { xs: 3, md: 6 }}}>
      <Box sx={{ whiteSpace: 'nowrap', fontSize: 30, fontWeight: 'bold', mt: 0, mb: 2 }}>Projects</Box>
      <Grid>
        {projectsList.map((project, index) => (
          <Box key={index} sx={{ m: 1, display: "flex", justifyContent: "space-between" }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.desc}
              logo={project.logo}
              link={project.link}
              technologies={project.technologies}
            />
          </Box>
        ))}
      </Grid>

    </Box>
    </Box>
  );
};

export default Home;




