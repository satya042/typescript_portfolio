import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";


export const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Satyaprakash Jena. All Rights Reserved.`,
  author: {
    name: "Satyaprakash Jena",
    accounts: [
      {
        url: "https://github.com/satya042",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />,
        color:"github"
      },
      {
        url: "https://twitter.com/satya042",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />,
        color: "twitter"
      },
      {
        url: "https://dev.to/satya042",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />,
        color:"dev"
      },
      {
        url: "https://linkedin.com/in/satya042",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />,
        color:"linkedin"
      },
      {
        url: "https://www.quora.com/profile/satya042",
        label: "Quora Account",
        type: "red",
        icon: <FaQuora />,
        color:"quora"
      },
      {
        url: "mailto:satyaprakash27319@gmail.com",
        label: "Mail satyaprakash",
        type: "gray",
        icon: <FiMail />,
        color:"mail"
      }
    ]
  }
};