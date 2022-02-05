import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDarkTheme } from "../../toolbox/hooks/useDarkTheme";
import { useWindowsSize } from "../../toolbox/hooks/useWindowsSize";
import { CustomDrawer } from "../../components/CustomDrawer";

import styles from "./AppBarCustom.module.sass";

const Navigation = () => {
  return (
    <Box className={styles.Links}>
      <a href="#home" className={styles.Link}>
        <Typography variant="h6" component="span">
          Inicio
        </Typography>
      </a>
      <a href="#work" className={styles.Link}>
        <Typography variant="h6" component="span">
          Mis trabajos
        </Typography>
      </a>
      <a href="#skills" className={styles.Link}>
        <Typography variant="h6" component="span">
          Habilidades
        </Typography>
      </a>
    </Box>
  );
};

export const AppBarCustom = () => {
  const [darkTheme, setDarkTheme] = useDarkTheme();
  const [open, setOpen] = React.useState(false);
  const { width } = useWindowsSize();

  const isMobile = 600 > width;

  const handleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleOpen}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Asis Melgarejo
          </Typography>
          {isMobile ? (
            <CustomDrawer open={open} setOpen={setOpen} />
          ) : (
            <Navigation />
          )}
          <IconButton onClick={handleDarkTheme}>
            {darkTheme ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={styles.Placeholder} />
    </Box>
  );
};
