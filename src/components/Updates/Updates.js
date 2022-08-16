import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import useStyles from "./UpdatesStyle";
import Grid from "@mui/material/Grid";
import typography from "../../utils/typography";
import Link from "@mui/material/Link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Paper from '@mui/material/Paper';

const Updates = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
         
        >

          <Grid item xs={12} sm={6} md={6}>
          
             
                <Link href="#" underline="none">
                  <img src="Business_Update_EN.webp" alt="product img" style={{ objectFit: 'initial' }}></img>
                </Link>
           
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
           
              <Box padding="10px 10px 10px 20px" bgcolor="#f3f3f3" height="100%" width="100%">
                <Typography
                  padding="20px 0 20px 0"
                  fontFamily={typography.fontFamily.MotivaRegular}
                >
                  Staples Professional is here to serve you. Read our latest
                  updates.
                </Typography>
                <Link
                  href="#"
                  textTransform="uppercase"
                  underline="none"
                  display="flex"
                  alignItems="center"
                >
                  learn more <ChevronRightIcon />
                </Link>
              </Box>
           
          </Grid>
        </Grid>
      </Box>

 
    </Container>
  );
};

export default Updates;



