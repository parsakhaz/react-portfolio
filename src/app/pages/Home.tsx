// import Material UI components to use
import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
// import logo from "../../static/favicon.png";
import { useLocation } from "react-router-dom";
import { links } from "./links";

// set selected index type to number
interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}


export default function Home({ setSelectedIndex }: Props) {
  // function for if x button is pressed, delete largest index from pages
  const { pathname } = useLocation();
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  // override document title with env variable for react app name
  useEffect(() => {
    document.title = process.env.REACT_APP_NAME!;
  }, [pathname]);

  // utilize MUI components to create home UI
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: `calc(100vh - 20px - 33px)` }}
    >
      <Grid item xs={3}>
        <Stack direction={{ xs: "column", sm: "row-reverse" }} spacing={2}>
          <Box display="flex" sx={{ justifyContent: "center" }}>
            {/* got rid of logo until I make a newer one for myself */}
            {/* <img src={logo} width="130px" alt="logo" /> */} 
          </Box>
          <Box sx={{px: '1.5rem'}} >
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start"}}
            >
              <Typography variant="h3">{process.env.REACT_APP_NAME}</Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ sm: "flex-start" }}
            >
              <Typography variant="subtitle1" gutterBottom>
                Informatics @ UW
              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ sm: "flex-start" }}
            >
              <Stack direction="row" spacing={0.4}>
                {links.map((link) => (
                  <Tooltip key={link.index} title={link.title} arrow>
                    <Link
                      target="_blank"
                      href={link.href}
                      underline="none"
                      color="inherit"
                    >
                      <IconButton color="inherit">{link.icon}</IconButton>
                    </Link>
                  </Tooltip>
                ))}
              </Stack>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
