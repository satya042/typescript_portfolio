// import PhaedraLogo from "../assets/logos/phaedra.jpeg";
// import UniLogo from "../assets/logos/fast.png";
// import BrainxLogo from "../assets/logos/brainxtech.png";
import HighRadiusLogo from "../assets/logos/highradius.png";
import CavissonLogo from "../assets/logos/cavisson.jpeg";
import GIETLogo from "../assets/logos/giet.jpeg";
import NISTLogo from "../assets/logos/nist.jpeg";
import figma from "../assets/skills/figma.png";
import vscode from "../assets/skills/vscode.png";
import react from "../assets/skills/react.png";
import ruby from "../assets/skills/ruby.png";
import rails from "../assets/skills/rails.png";
import javascript from "../assets/skills/javascript.png";
import typescript from "../assets/skills/typescript.png";
import html5 from "../assets/skills/html-5.png";
import css3 from "../assets/skills/css3.png";
import python from "../assets/skills/python.png";
import bootstrap from "../assets/skills/bootstrap.png";
import postgres from "../assets/skills/postgresql.png";
import redis from "../assets/skills/redis.png";
import mysql from "../assets/skills/mysql.png";
import heroku from "../assets/skills/heroku.png";
import docean from "../assets/skills/digital-ocean.png";
import aws from "../assets/skills/aws.png";
//import nginx from "../assets/skills/nginx.png";
import nginx from "../assets/skills/nginx.png"
//import { item } from "../components/page-transitions";
 
export const companies = [
  // {
  //   title: "Phaedra Solutions",
  //   alt: "PS image",
  //   role: "Senior Software Engineer",
  //   skills: ["ruby", "rails", "typescript", "javascript", "react", "aws"],
  //   period: "2019 - Present",
  //   logo: PhaedraLogo
  //   },
  // {
  //   title: "Brainx Technologies",
  //   alt: "BT image",
  //   role: "Software Engineer",
  //   skills: ["ruby", "rails", "javascript", "python"],
  //   period: "2018 - 2019",
  //   logo: BrainxLogo
  // },
  {
    title: "Cavisson Systems",
    alt: "Cavisson image",
    role: "Associate Software Engineer",
    skills: ["Angular", "Java","Perfermace Testing"],
    period: "2023 - Present",
    logo: CavissonLogo
  },
  {
    title: "HighRadius",
    alt: "HighRadius image",
    role: "RPA Intern",
    skills: ["Hiberanate", "MySql", "Automation Testing"],
    period: "2022 - 2023",
    logo: HighRadiusLogo
  }
];

export const institutes = [
  {
    short_title: "FAST - NUCES",
    title: "Gandhi Institute of Engineering & Technology",
    alt: "Nuces image",
    role: "Bachelor's Degree in Computer Science",
    skills: ["project management", "software development", "data structures"],
    period: "2019 - 2023",
    startingYear: "2019",
    logo: GIETLogo,
    awards: [
      {
        title: "Speed Programming Battle",
        description:
          "Won speed programming battle which held at FAST - NUCES.",
        date: "May 1, 2015"
      },
      {
        title: "Silver Medal",
        description:
          "This medal was awarded to me by FAST - NUCES for getting a CGPA of 3.9 in 2nd semester.",
        date: "May 1, 2014"
      },
      {
        title: "Speed Programming Battle",
        description:
          "Won speed programming battle which held at FAST - NUCES.",
        date: "Nov 1, 2013"
      }
    ]
  },
  {
    short_title: "Newtonian Higher Secondary School",
    title: "Newtonian Higher Secondary School",
    alt: "college image",
    role: "FSC",
    skills: ["mathematic", "chemistry", "physics"],
    period: "2017 - 2019",
    startingYear: "2017",
    logo: NISTLogo
  }
];

export const skills = [
  {
    name: "Ruby on Rails",
    description: "Web development",
    link: "https://rubyonrails.org/",
    type: "development",
    image: rails,
    item : 1
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react,
    item : 2
  },
  {
    name: "Ruby",
    description: "Web development, scrapping",
    link: "https://www.ruby-lang.org/en/",
    type: "development",
    image: ruby,
    item : 3
  },
  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.python.org/",
    type: "development",
    image: python,
    item : 4
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript,
    item : 5
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript,
    item : 6
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5,
    item : 7
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3,
    item : 8
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap,
    item : 9
  },
  {
    name: "Postgres",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres,
    item : 10
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql,
    item : 11
  },
  {
    name: "Redis",
    description: "Database",
    link: "https://redis.io/",
    type: "database",
    image: redis,
    item : 12
  },
  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku
  },
  {
    name: "AWS",
    description: "Devops",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: aws
  },
  {
    name: "Digital Ocean",
    description: "Devops",
    link: "https://www.digitalocean.com/",
    type: "devops",
    image: docean
  },
  {
    name: "Nginx",
    description: "Web server",
    link: "https://www.nginx.com/",
    type: "devops",
    image: nginx
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma
  }
];
