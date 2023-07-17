import React from 'react';
import { Box, Grid, Typography,styled, Paper, Stack ,Card,CardContent,CardMedia} from '@mui/material';
import { companies, institutes } from "../data/data";
import { getTagColor, getTagBackgroundColor } from "../theme";



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


interface CardProps{
  title: string;
  role: string;
  skills: string[];
  period: string;
  logo: string;
  colorMode: string;
  alt: string; 
}

const AboutCard: React.FC<CardProps> = ({ title, role, skills, period, logo, colorMode, alt }) => {
    return (
        <Box sx={{ width: '45%', height: 'auto' }}>
            <Card sx={{ display: 'flex', flexDirection: 'row', backgroundColor: 'card.main', border: '1px solid', borderRadius: '12px', borderColor: "card.border" }}>
                <CardMedia component="img" src={logo} sx={{ borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '9%', m: 1, height: '9%' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
                    <CardContentNoPadding sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }} >
                        <Typography color="inherit" sx={{ fontSize: '18px', fontWeight: 'bold' }} noWrap={true} >{title}</Typography>
                        <Typography color="inherit" sx={{ fontSize: '15px' }} noWrap={true} >{period}</Typography>
                    </CardContentNoPadding>
                    <CardContentNoPadding >
                        <Typography color="inherit" sx={{ fontSize: '15px', fontWeight: 'bold' }} noWrap={true} >{role}</Typography>
                    </CardContentNoPadding>
                    <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
                        {skills.map(tech => (<Item sx={{ color: getTagColor(tech), backgroundColor: getTagBackgroundColor(tech) }}> {tech} </Item>))}
                    </Stack>
                </Box>
            </Card>
        </Box>
    );
};

// const Card=(props:CardProps) =>{
//     const { title, role, skills, period, logo, colorMode, alt } = props;
//     return(
//     <Box>

//     </Box>
//     );
// };

const About: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', backgroundColor: 'primary.main', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            <Typography sx={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'flex-start', m: 10 }} >Education</Typography>
            <Grid>
                {companies.map((company, index) => (
                    <Box key={index} sx={{ m: 1, display: "flex", justifyContent: "space-between" }}>
                        <AboutCard
                            title={company.title}
                            role={company.role}
                            skills={company.skills}
                            period={company.period}
                            logo={company.logo} colorMode={''} alt={''} />
                    </Box>
                ))}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti architecto quibusdam in veniam, obcaecati doloremque tenetur adipisci quam maiores dolor ipsam sit officiis eveniet, minus mollitia necessitatibus odit saepe ipsum.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus deleniti illo ea iste corporis nemo ut, necessitatibus rerum quis quibusdam officiis officia ad labore nobis harum nulla est error?
            </Grid>

        </Box>)
}
export default About;





