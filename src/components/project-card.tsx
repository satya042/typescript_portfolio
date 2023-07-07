import * as React from "react";
//import { motion, AnimatePresence } from "framer-motion";
//import { getTagColor } from "style/theme";
//import LazyImage from "./lazy-image";
import { Box,Stack,styled,Paper,Avatar } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


// var Project = ({
//   key: key,
//   title: title,
//   description: description,
//   logo: logo,
//   blurHash: blurHash,
//   link: link,
//   technologies: technologies
// }), _a = void 0, number = _a.key, string = _a.title;
// description: string;
// logo: string;
// blurHash: string;
// link: string;
// technologies: string[];

 const ProjectCard = (
  {
  key,
  title,
  description,
  logo,
  blurHash,
  link,
  technologies
}:{
    key:number
    title: string;
    description: string;
    logo: string;
    blurHash: string;
    link: string;
    technologies: string[];
}
) => {
//   const textColor = useColorModeValue("gray.500", "gray.200");
//   const [isOpen, setIsOpen] = React.useState(false);
//   const toggleOpen = () => setIsOpen(!isOpen);
  return (
  <Box>
    p={4}
    {/* bg={useColorModeValue("white", "gray.800")} */}
    bg = "white"
    rounded="xl"
    borderWidth="1px"
    {/* borderColor={useColorModeValue("gray.100", "gray.700")} */}
    w="100%"
    h="100%"
    textAlign="left"
    align="start"
    spacing={4}
    cursor="pointer"
    {/* _hover={{ shadow: "lg" }} */}
      <Avatar
        variant="circular"
        sx={{ width: 33, height: 33 }}
      />
      <Stack> {title}
      <Stack spacing="1" direction={"row"}>
        {technologies.map(tech => (
          // <Item size="sm" colorScheme={getTagColor(tech)}>
          <Item>
            {tech}
          </Item>
        ))}
      </Stack>
      </Stack>
      <Box>{description}</Box>
    </Box>);
};



  // return (
  //   <motion.div layout onClick={toggleOpen}>
  //     <Box
  //       p={4}
  //       bg={useColorModeValue("white", "gray.800")}
  //       rounded="xl"
  //       borderWidth="1px"
  //       borderColor={useColorModeValue("gray.100", "gray.700")}
  //       w="100%"
  //       h="100%"
  //       textAlign="left"
  //       align="start"
  //       spacing={4}
  //       cursor="pointer"
  //       _hover={{ shadow: "lg" }}
  //     >
  //       <LazyImage
  //         src={logo}
  //         blurHash={blurHash}
  //         size="sm"
  //         width={33}
  //         height={33}
  //         layout="fixed"
  //         rounded="md"
  //       />
  //       <VStack align="start" justify="flex-start">
  //         <VStack spacing={0} align="start">
  //           <motion.div layout>
  //             <HStack>
  //               <Text
  //                 as={Link}
  //                 href={link}
  //                 fontWeight="bold"
  //                 fontSize="md"
  //                 noOfLines={1}
  //                 onClick={e => e.stopPropagation()}
  //                 isExternal
  //               >
  //                 {title}
  //               </Text>
  //               <HStack spacing="1">
  //                 {technologies.map(tech => (
  //                   <Tag size="sm" colorScheme={getTagColor(tech)}>
  //                     {tech}
  //                   </Tag>
  //                 ))}
  //               </HStack>
  //             </HStack>
  //           </motion.div>
  //           <AnimatePresence>
  //             <motion.div
  //               layout
  //               initial={{ opacity: 1 }}
  //               animate={{ opacity: 1 }}
  //               exit={{ opacity: 1 }}
  //             >
  //               {!isOpen && (
  //                 <Text fontSize="sm" color={textColor} noOfLines={{ base: 2 }}>
  //                   {description}
  //                 </Text>
  //               )}
  //             </motion.div>
  //           </AnimatePresence>

  //           <AnimatePresence>
  //             <motion.div
  //               layout
  //               initial={{ opacity: 0 }}
  //               animate={{ opacity: 1 }}
  //               exit={{ opacity: 0 }}
  //               variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
  //             >
  //               {isOpen && (
  //                 <Text
  //                   fontSize="sm"
  //                   color={textColor}
  //                   // noOfLines={{ base: isOpen ? 5 : 2 }}
  //                 >
  //                   {description}
  //                 </Text>
  //               )}
  //             </motion.div>
  //           </AnimatePresence>
  //         </VStack>
  //       </VStack>
  //     </Box>
  //   </motion.div>
  // );


export default ProjectCard;
