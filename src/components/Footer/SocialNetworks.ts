import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
} from "../../toolbox/constants/icons";

interface ISkill {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
}

export const $SOCIAL_NETWORKS: ISkill[] = [
  {
    name: "JavaScript",
    Icon: FacebookIcon,
    link: "",
  },
  {
    name: "JavaScript",
    Icon: TwitterIcon,
    link: "https://twitter.com/asismelgarejo",
  },
  {
    name: "Instagram",
    Icon: InstagramIcon,
    link: "https://instagram.com/asismelgarejo",
  },
  {
    name: "Linkedin",
    Icon: LinkedinIcon,
    link: "https://linkedin.com/asismelgarejo",
  },
  {
    name: "Github",
    Icon: GithubIcon,
    link: "https://github.com/asismelgarejo",
  },
];
