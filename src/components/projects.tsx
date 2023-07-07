import * as React from 'react';
import { Box, Grid } from "@mui/material";
//import ProjectCard from './project-card';
//import { projectsList } from '../data/projects-list';


// const Projects: React.FC<ProjectsProps> = ({ projects }) => {
 const Projects = (
  //  { projects }: { projects: projectsList[] }
) => {
  return (
    <Box>
      <Box>Projects</Box>
      {/* <Grid>
      {projectsList.map((project, index) => (
        <Box key={index}>
      <Box
        key={project.id}
        title={project.title}
        description={project.desc}
        blurHash={project.blurHash}
        logo={project.logo}
        link={project.link}
        technologies={project.technologies}
      />
      </Box>
      ))};
      </Grid> */}
    </Box>
  );
};
export default Projects;



//  import * as React from "react";
// import { VStack, SimpleGrid } from "@chakra-ui/react";
// import ProjectCard from "./project-card";
// import Header from "./header";
// import { AnimateSharedLayout } from "framer-motion";
// import { MotionBox } from "./motion";
// import { Box } from "@mui/material";

// interface ProjectsProps {
//   projects: project[];
// }

// const ORANGE = "#ff9400";

// const Projects: React.FC<ProjectsProps> = ({ projects }) => {
//   return (
//     <VStack align="start" spacing={8}>
//       {/* <Header underlineColor={ORANGE} mt={0} mb={0}>
//         Projects
//       </Header> */}
//       <Box as="strong" fontSize={40} mt={7} mb={2} whiteSpace="nowrap" className="face" alignSelf={"flex-start"}>Projects</Box>
//       <AnimateSharedLayout>
//         <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
//           {projects.map((project, index) => (
//             <MotionBox whileHover={{ y: -5 }} key={index}>
//               <ProjectCard
//                 key={project.id}
//                 title={project.title}
//                 description={project.desc}
//                 blurHash={project.blurHash}
//                 logo={project.logo}
//                 link={project.link}
//                 technologies={project.technologies}
//               />
//             </MotionBox>
//           ))}
//         </SimpleGrid>
//       </AnimateSharedLayout>
//     </VStack>
//   );
// };

// export default Projects;
