import React from 'react';
import { useTheme,Box, Grid, Typography,styled, Paper, Stack ,Card,CardContent,CardMedia} from '@mui/material';
import { companies, institutes } from "../data/data";
import { getTagColour, getBackgroundColour } from "../theme";
import UnderlinedText from "./underlinedText";
import "./style/about.css"

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5, 1, 0.5, 1),
  textAlign: 'center',
  borderRadius: '7px',
  alignSelf:'center',
  boxShadow: 'none',
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

const AboutCard: React.FC<CardProps> = ({ title, role, skills, period, logo }) => {
    const theme = useTheme();
    return (
        <Box className="aboutCard">
            <Card id="index" className="aboutCardContent" sx={{ backgroundColor: 'card.main', borderColor: "card.border" ,flexGrow:8}}>
                <CardMedia component="img" src={logo} sx={{ borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '9%', m: 1, height: '9%' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column',flexGrow:1, p: 1 }}>
                    <CardContentNoPadding sx={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between' }} >
                        <Typography color="inherit" sx={{ fontSize: '18px', fontWeight: 'bold' }} noWrap={true} >{title}</Typography>
                        <Typography color="inherit" sx={{ fontSize: '15px' }} noWrap={true} >{period}</Typography>
                    </CardContentNoPadding>
                    <CardContentNoPadding >
                        <Typography color="inherit" sx={{ fontSize: '15px', fontWeight: 'bold' }} noWrap={true} >{role}</Typography>
                    </CardContentNoPadding>
                    <Stack direction="row" spacing={1}>
                        {skills.map(tech => (<Item sx={{ color: getTagColour(tech,theme.palette.mode), backgroundColor: getBackgroundColour(tech,theme.palette.mode) }}> {tech} </Item>))}
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
      <Box className="about-main" sx={{ backgroundColor: "primary.main" }}>
        <Box className="about">
          <UnderlinedText>
            <Typography sx={{ fontSize: 30, fontWeight: "bold", m: 1, mt: "2%" }}>
              Career
            </Typography>
          </UnderlinedText>
          <Grid>
            {companies.map((company, index) => (
              <Box className="cards" key={index}>
                <AboutCard
                  title={company.title}
                  role={company.role}
                  skills={company.skills}
                  period={company.period}
                  logo={company.logo}
                  colorMode={""}
                  alt={""}
                />
              </Box>
            ))}
          </Grid>
          <UnderlinedText>
            <Typography sx={{ fontSize: 30, fontWeight: "bold", m: 1, mt: "4%" }}>
              Education
            </Typography>
          </UnderlinedText>
          <Grid>
            {institutes.map((institute, index) => (
              <Box className="cards" key={index}>
                <AboutCard
                  title={institute.title}
                  role={institute.role}
                  skills={institute.skills}
                  period={institute.period}
                  logo={institute.logo}
                  colorMode={""}
                  alt={""}
                />
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    );
}
export default About;





