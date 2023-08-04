import * as React from "react";
import { useTheme,Box, Avatar, styled, Paper,Grid, Link, Stack,Card ,CardContent,CardMedia,Typography} from "@mui/material";
import { getTagColor ,BackgroundTagColor} from "../theme";
import { projectsList } from '../data/project-list';
import UserIcon from '../assets/user_icon.png';
import UnderlinedText from "./underlinedText";
import {AnimatedAvtar,AnimatedHome,AnimatedBox} from "./page-transitions";
import './style/home.css' 

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
  borderRadius: '7px',
}));


const ProjectCard: React.FC<ProjectCardProps> = ({title, description, logo, link, technologies }) => {
  const [showFullDescription, setShowFullDescription] = React.useState(false);
  const handleCardClick = () => {
    setShowFullDescription(!showFullDescription);
  };
  const theme = useTheme();
  return (
    <Box id="paul" sx={{ width: '100%', height: 'auto', my: .5}} onClick={handleCardClick}>
      <Card sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'card.main', border: '1px solid', borderRadius: '12px', borderColor: "card.border" }}>
        <CardMedia component="img" src={logo} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '5%', m: 1.5, height: '5%' }} ></CardMedia>
        <Box sx={{ display: 'inline-flex', flexDirection: 'column', p: 1, py: 1.5 }}>
          <Box sx={{ display: 'inline-flex', flexDirection: 'row' }} >
            <CardContentNoPadding >
              <Link href={link} color="inherit" sx={{ textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }} noWrap={true} >{title}</Link>
            </CardContentNoPadding>
            <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
              {technologies.map(tech => (<Item sx={{ color: getTagColor(tech, theme.palette.mode), backgroundColor: BackgroundTagColor(tech, theme.palette.mode) }}> {tech} </Item>))}
            </Stack>
          </Box>
          <Typography variant="body1" color="text.secondary" fontSize='14px' component="div" sx={{ display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: showFullDescription ? 'unset' : 2 }}>
            {description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

const Home: React.FC = () => {
  return (
    <Box sx={{ maxWidth: '100%', backgroundColor: "primary.main", display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <Box flexDirection={{ xs: "column", md: "row" }} sx={{ backgroundColor: "primary.main", display: 'flex', justifyContent: 'center',alignItems:'center', width: { xs: '100%', md: '45%' }, height: '100%', marginLeft: { xs: 0, md: '26%' }, flexGrow: 1 }}  >
        <AnimatedAvtar>
          <Avatar variant="circular" sx={{ width: 175, height: 175, marginTop: { xs: 10, md:-1 }, justifyContent: "center",}} src={UserIcon}></Avatar>
        </AnimatedAvtar>
        <AnimatedHome>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: { xs: 3, md: 6 } }}>
            <UnderlinedText><Box className="face" sx={{ whiteSpace: 'nowrap', fontSize: 30, fontWeight: 'bold', mt: 5, mb: 2 }}>Hey! 👋</Box> </UnderlinedText>
            <Box sx={{ fontSize: 24, fontWeight: 500, textAlign: 'left', }}>
              <AnimatedBox delay={4}>My name is{" "}</AnimatedBox>
              <AnimatedBox delay={5}><Box component="span" sx={{ fontWeight: 600, }}>Satyaprakash</Box>{" "} and I&apos;m a{" "}</AnimatedBox>
              <AnimatedBox delay={4}><Box component="span" whiteSpace={"nowrap"} >Full Stack Developer and</Box>{" "}</AnimatedBox>
              <AnimatedBox delay={5}><Box component="span" whiteSpace={"nowrap"} > an open source lover&nbsp;</Box>from{" "}</AnimatedBox>
              <AnimatedBox delay={4}><Box component="span" whiteSpace={"nowrap"}>India in</Box></AnimatedBox>
              <AnimatedBox delay={4.5}><Box fontSize={24} fontWeight="500" mt={5} textAlign="left">
                This is my digital garden, where I write about the things I'm working
                on and share what I've learned. 😊
              </Box></AnimatedBox>
            </Box>{" "}
          </Box>
        </AnimatedHome>
      </Box>
      
    {/* <Projects/> */}
    <Box sx={{ display: 'flex', backgroundColor: 'primary.main',justifyContent: 'center', width: { xs: '100%', md: '45%' }, height: '100%',marginLeft:{xs:0,md:'26%'},flexDirection:"column",padding: { xs: 3, md: 6 }}}>
    <AnimatedAvtar>
    <UnderlinedText><Box sx={{ whiteSpace: 'nowrap', fontSize: 30, fontWeight: 'bold', mt: 0, mb: 2 }}>Projects</Box> </UnderlinedText>
      </AnimatedAvtar>
        <AnimatedHome>
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
        </AnimatedHome>
      </Box>
    </Box>
  );
};

export default Home;




