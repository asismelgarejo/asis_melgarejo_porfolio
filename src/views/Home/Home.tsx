import React, { useRef } from "react";
import { Layout } from "../../components/Layout";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { CustomCard } from "../../components/CustomCard";
import {
  $SKILLS_FRONTEND,
  $SKILLS_BACKEND,
  $SKILLS_DEVOPS,
  $SKILLS_BD,
  $SKILLS_MOBILE,
  $SKILLS_TOOLS,
  $SKILLS_DESIGN,
} from "./Skills";
import MainImage from "../../assets/profile.jpg";
import CMSFormData from "../../assets/cms_formdata.png";
import { CustomPaper } from "./../../components/CustomPaper";
import { CustomTabs } from "./../../components/CustomTabs";
import { DialogImage, SnackRef } from "./../../components/DialogImage";
import { useWindowsSize } from "../../toolbox/hooks/useWindowsSize";

import styles from "./Home.module.sass";

export const CardHome = () => {
  const { width } = useWindowsSize();

  const isMobile = 600 > width;

  return (
    <Paper className={styles.CardHome} id="home">
      <CardMedia
        component="img"
        height="500"
        image={MainImage}
        alt="green iguana"
        sx={{ width: isMobile ? "100%" : "500px" }}
        className={styles.CardMedia}
      />
      <CardContent className={styles.CardContent}>
        <Typography
          gutterBottom
          variant={isMobile ? "h5" : "h2"}
          component="div"
          // className={styles.CardTitle}
        >
          Hi, I'm Asis and I'm a Fullstack Junior Developer
        </Typography>
        <Typography component={"p"} variant={isMobile ? "h6" : "h5"}>
          Tengo más de 1 año de experiencia laboral en el entorno empresarial
          desarrollando aplicaciones webs y móviles .
        </Typography>
      </CardContent>
    </Paper>
  );
};

const $TAGS = [
  {
    id: 1,
    name: "Typescript",
  },
  {
    id: 2,
    name: "ReactJS",
  },
  {
    id: 3,
    name: "Laravel",
  },
  {
    id: 4,
    name: "MySQL",
  },
];

const $PROJECTS = [
  {
    id: 1,
    ImgUrl: CMSFormData,
    title: "CMS para blog de empresa minera",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed euismod ex. ",
    tags: $TAGS,
  },
];

export const Home = () => {
  const dialogImageRef = useRef<SnackRef>(null);
  const handleClickImage = (imgUrl: string) => {
    dialogImageRef.current && dialogImageRef.current.showDialog(imgUrl);
  };
  return (
    <Layout>
      <CardHome />
      <section className={styles.HomeSection}>
        <Typography
          variant="h4"
          component={"div"}
          color="text.secondary"
          align="center"
          id="work"
        >
          Mis trabajos
        </Typography>
        <br />
        <br />
        <div className={styles.ContainerCards} key={1}>
          {$PROJECTS.map((project, index) => (
            <CustomCard
              {...project}
              key={index}
              handleClick={handleClickImage}
            />
          ))}
        </div>
        <DialogImage ref={dialogImageRef} />
      </section>
      <section className={styles.HomeSection} id="skills">
        <Typography
          variant="h4"
          component={"div"}
          color="text.secondary"
          align="center"
        >
          Mis habilidades
        </Typography>
        <br />
        <br />
        <CustomTabs
          tabs={[
            "Backend",
            "Frontend",
            "DevOps",
            "Desarrollo móvil",
            "Bases de datos",
            "Herramientas",
            "Diseño"
          ]}
          tabsPanels={[
            <div className={styles.ContainerSkills} key={1}>
              {$SKILLS_BACKEND.map((skill, index) => (
                <CustomPaper
                  key={index + skill.name}
                  name={skill.name}
                  Icon={skill.Icon}
                  content={skill.description}
                />
              ))}
            </div>,
            <div className={styles.ContainerSkills} key={2}>
              {$SKILLS_FRONTEND.map((skill, index) => (
                <CustomPaper
                  key={index + skill.name}
                  name={skill.name}
                  Icon={skill.Icon}
                  content={skill.description}
                />
              ))}
            </div>,
            <div className={styles.ContainerSkills} key={3}>
              {$SKILLS_DEVOPS.map((skill, index) => (
                <CustomPaper
                  key={index + skill.name}
                  name={skill.name}
                  Icon={skill.Icon}
                  content={skill.description}
                />
              ))}
            </div>,
            <div className={styles.ContainerSkills} key={4}>
              {$SKILLS_MOBILE.map((skill, index) => (
                <CustomPaper
                  key={index + skill.name}
                  name={skill.name}
                  Icon={skill.Icon}
                  content={skill.description}
                />
              ))}
            </div>,
            <div className={styles.ContainerSkills} key={5}>
              {$SKILLS_BD.map((skill, index) => (
                <CustomPaper
                  key={index + skill.name}
                  name={skill.name}
                  Icon={skill.Icon}
                  content={skill.description}
                />
              ))}
            </div>,
            <div className={styles.ContainerSkills} key={5}>
              {$SKILLS_TOOLS.map((skill, index) => (
                <CustomPaper
                  key={index + skill.name}
                  name={skill.name}
                  Icon={skill.Icon}
                  content={skill.description}
                />
              ))}
            </div>,
            <div className={styles.ContainerSkills} key={5}>
              {$SKILLS_DESIGN.map((skill, index) => (
                <CustomPaper
                  key={index + skill.name}
                  name={skill.name}
                  Icon={skill.Icon}
                  content={skill.description}
                />
              ))}
            </div>,
          ]}
        />
      </section>
    </Layout>
  );
};
