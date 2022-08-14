import { Box, Container } from "@mui/system"
import { Typography } from "@mui/material";
import typography from "../../utils/typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const Brands = () =>{
    return (
      <Box>
        <Container maxWidth="xl">
          <Box
            m="20px 0"
            display="flex"
            alignitems="center"
            justifyContent="center"
          >
            <Typography
              fontSize="19.5px"
              color="primary.light"
              variant="h2"
              textAlign="center"
              fontWeight="bold"
              fontFamily={typography.fontFamily.MotivaRegular}
            >
              Staples Exclusive.
            </Typography>
            <Typography
              fontSize="19.5px"
              variant="h2"
              textAlign="center"
              fontWeight="bold"
              fontFamily={typography.fontFamily.MotivaRegular}
            >
              &nbsp;Meet the Brands.
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 1 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {brandItem.map((product, index) => (
                <Grid item xs={6} sm={4} md={2} key={index}>
                  <Paper
                    sx={{
                      borderRadius: "0",
                      boxShadow: "none",
                    }}
                  >
                    <Link
                      href="#"
                      underline="none"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <img src={product.imgsrc} alt="product img "></img>
                    </Link>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    );
}


const brandItem = [
  {
    imgsrc: "brand1",
  },
  {
    imgsrc: "brand2",
  },
  {
    imgsrc: "brand3",
  },
  {
    imgsrc: "brand4",
  },
  {
    imgsrc: "brand5",
  },

  {
    imgsrc: "brand6",
  },
];
export default Brands;