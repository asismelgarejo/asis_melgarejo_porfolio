import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

import { Dispatch, SetStateAction } from "react";

interface MyThemeComponentProps {
  component: any;
  href: any;
  variant: any;
  sx: any;
}
const StyledTypography = styled((props) => (
  <Typography {...props} />
))<MyThemeComponentProps>(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#fff" : "black",
}));

interface CustomDrawerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {
  const list = () => (
    <Box role="presentation">
      <List sx={{ minWidth: 250 }}>
        {[
          { name: "Inicio", href: "#home" },
          { name: "Trabajos", href: "#work" },
          { name: "Habilidades", href: "#work" },
        ].map(({ name, href }, index) => (
          <ListItem key={index}>
            <StyledTypography
              component="a"
              href={href}
              variant={"h1"}
              sx={{ fontSize: "2em", listStyle: "none" }}
            >
              <ListItemText primary={name} />
            </StyledTypography>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const handleClose = () => {
    props.setOpen(false);
  };
  return (
    <Drawer open={props.open} onClose={handleClose}>
      {list()}
    </Drawer>
  );
};
