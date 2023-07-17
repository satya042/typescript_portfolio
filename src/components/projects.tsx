import * as React from 'react';
import { projectsList } from '../data/project-list';
import { Box,Grid, styled, Link, Paper, Stack,Card ,CardContent,CardMedia,Typography} from "@mui/material";
import { getTagColor, getTagBackgroundColor } from "../theme";

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
    <Box sx={{ width: '45%', height: 'auto' }}>
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


// const Projects: React.FC<ProjectsProps> = ({ projects }) => {
const Projects = () => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: 'primary.main', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignContent: "center" }}>
      <Box sx={{ whiteSpace: 'nowrap', alignSelf: 'flex-start', fontSize: 30, fontWeight: 'bold', mt: 0, mb: 2 }}>Projects</Box>
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti architecto quibusdam in veniam, obcaecati doloremque tenetur adipisci quam maiores dolor ipsam sit officiis eveniet, minus mollitia necessitatibus odit saepe ipsum.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus deleniti illo ea iste corporis nemo ut, necessitatibus rerum quis quibusdam officiis officia ad labore nobis harum nulla est error?
      </Grid>

    </Box>
  );
};
export default Projects;

