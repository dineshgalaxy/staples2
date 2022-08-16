import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import useStyles from "./ProductsStyle";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import typography from "../../utils/typography";
import Link from "@mui/material/Link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Products =()=>{
    const classes  = useStyles();
    return (
      <Container maxWidth="xl">
        <Typography
          m="20px 0"
          fontSize="19.5px"
          variant="h2"
          textAlign="center"
          fontWeight="bold"
          fontFamily={typography.fontFamily.MotivaRegular}
        >
          Explore our Products
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {productItem.map((product, index) => (
              <Grid item xs={2} sm={4} md={3} key={index}>
                <Paper
                  sx={{
                    borderRadius: "0",
                    boxShadow: "none",
                    border: "1px solid #f3f3f3",
                  }}
                >
                  <img src={product.imgsrc} alt="product img "></img>
                  <Link
                    textTransform="capitalize"
                    href="#"
                    underline="none"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mb="30px"
                  >
                    {product.links} <ChevronRightIcon />
                  </Link>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }} marginTop="35px">
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
          >
            {shoppingCart.map((product, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Paper
                  sx={{
                    borderRadius: "0",
                    boxShadow: "none",
                  }}
                >
                  <Link href="#" underline="none">
                    <img src={product.imgsrc} alt="product img " width="100%"></img>
                  </Link>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    );
}

export default Products;

const productItem = [
  {
    imgsrc: "product-1",
    links: "paper",
  },
  {
    imgsrc: "product-2",
    links: "Ink & Toner ",
  },
  {
    imgsrc: "product-3",
    links: "Technology",
  },
  {
    imgsrc: "product-4",
    links: "Furniture",
  },
  {
    imgsrc: "product-5",
    links: "Cleaning & Janitorial",
  },
  {
    imgsrc: "product-6",
    links: "Pack & Ship ",
  },
  {
    imgsrc: "product-7",
    links: "Breakroom",
  },
  {
    imgsrc: "product-8",
    links: "Business Essentials",
  },
];



const shoppingCart = [
  {
    imgsrc: "shoppinProduct1.webp",
  },
  {
    imgsrc: "shoppinProduct2.webp",
  },
  {
    imgsrc: "shoppinProduct1.webp",
  },
  {
    imgsrc: "shoppinProduct2.webp",
  },
  {
    imgsrc: "shoppinProduct1.webp",
  },
  {
    imgsrc: "shoppinProduct2.webp",
  },
  {
    imgsrc: "shoppinProduct1.webp",
  },
  {
    imgsrc: "shoppinProduct2.webp",
  },
  {
    imgsrc: "shoppinProduct1.webp",
  },
  {
    imgsrc: "shoppinProduct2.webp",
  },
  {
    imgsrc: "shoppinProduct1.webp",
  },
  {
    imgsrc: "shoppinProduct2.webp",
  },
];