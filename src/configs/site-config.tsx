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
    name: "Muhammad Ahmad",
    accounts: [
      {
        url: "https://github.com/satya042",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />,
        color:"#a8dcfa"
      },
      {
        url: "https://twitter.com/satya042",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />,
        color:"#a8dcfa"
      },
      {
        url: "https://dev.to/satya042",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />,
        color:"#a8dcfa"
      },
      {
        url: "https://linkedin.com/in/satya042",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />,
        color:"#a8dcfa"
      },
      {
        url: "https://www.quora.com/profile/satya042",
        label: "Quora Account",
        type: "red",
        icon: <FaQuora />,
        color:"#a8dcfa"
      },
      {
        url: "mailto:satyaprakash27319@gmail.com",
        label: "Mail satyaprakash",
        type: "gray",
        icon: <FiMail />,
        color:"#a8dcfa"
      }
    ]
  }
};