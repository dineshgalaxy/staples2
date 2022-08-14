import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import useStyles from "./UpdatesStyle";
import Grid from "@mui/material/Grid";
import typography from "../../utils/typography";
import Link from "@mui/material/Link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Updates = () => {
  return (
    <Container maxWidth="xl">
      <Box display="flex" justifyContent="space-between">
        <Box maxWidth="720px">
          <Link href="#" underline="none">
            <img src="Business_Update_EN.webp" alt="product img" style={{objectFit:'initial'}}></img>
          </Link>
        </Box>
        <Box bgcolor="#f3f3f3" maxWidth="541px" width="100%">
          <Box padding="0 10px 10px 17px" >
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
        </Box>
      </Box>
    </Container>
  );
};

export default Updates;



