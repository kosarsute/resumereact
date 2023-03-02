import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: kosarsute@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/kosarsute",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sergei-kosarev-89307321a/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <a href={socials[0].url} style={{ margin: "0 10px" }}>
              <FontAwesomeIcon
                icon={socials[0].icon}
                size="2x"
              />
            </a>
            <a href={socials[1].url} style={{ margin: "0 10px" }}>
              <FontAwesomeIcon
                icon={socials[1].icon}
                size="2x"
              />
            </a>
            <a href={socials[2].url} style={{ margin: "0 10px" }}>
              <FontAwesomeIcon
                icon={socials[2].icon}
                size="2x"
              />
            </a>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#project" onClick={() => handleClick("projects-section")}>
                Projects</a>
              <a href="#contact-me" onClick={() => handleClick("contactme-section")}>
                Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
