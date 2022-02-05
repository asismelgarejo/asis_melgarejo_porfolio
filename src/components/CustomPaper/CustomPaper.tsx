import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./CustomPaper.module.sass";

interface CustomPaperProps {
  name: string;
  content: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const CustomPaper: React.FC<CustomPaperProps> = (props) => {
  return (
    <Paper elevation={8} className={styles.Paper}>
      <Box className={styles.ContainerIcon}>
        <props.Icon style={{ width: "100%", height: "100%" }} />
      </Box>
      <Box>
        <Typography variant="h6" align="center">
          {props.name}
        </Typography>
        <Typography variant="body2">{props.content}</Typography>
      </Box>
    </Paper>
  );
};
