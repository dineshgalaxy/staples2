import React from "react";
import useStyles from "./FlyersStyle";
import flyerImg1 from '../../images/EWAY_FLYERICON_LEFT.webp'
import flyerImg2 from '../../images/EWAY_PUBLICATIONICON_RIGHT.webp'
import { Box, Container } from "@mui/system";
import { Link, Typography } from "@mui/material";
import typography from "../../utils/typography";
import color from "../../utils/color";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Flyers = () => {
    const classes = useStyles();
    return (


        <Box>
            <Container maxWidth="xl">

                <Grid
                    container
                    spacing={{ xs: 1, md: 1 }}
                
                >

                    <Grid item xs={12} sm={6} md={6} >
                        <Box className={classes.flyer}  display="flex" bgcolor="#f3f3f3" alignItems="center" flex="1 1 50%">
                            <Box>
                                <img src={flyerImg1} alt={flyerImg1}></img>
                            </Box>
                            <Box px="30px">
                                <Typography variant="h4"
                                    fontSize={typography.mdxl}
                                    fontWeight="bolder"
                                    mb="20px"
                                    color={color.palette.secondary.main}
                                >Flyers</Typography>

                                <Typography variant="body1"
                                    fontSize={typography.mdxl}
                                    mb="20px"
                                >Get the latest deals on the products your business needs.</Typography>
                                <Link display="flex" alignItems="center" href="#" underline="none" fontSize={typography.mdxl}>
                                    VIEW NOW <ChevronRightIcon />
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} >
                        <Box className={classes.flyer}  display="flex" bgcolor="#f3f3f3" alignItems="center" flex="1 1 50%">
                            <Box>
                                <img src={flyerImg2} alt={flyerImg2}></img>
                            </Box>
                            <Box px="30px">
                                <Typography variant="h4"
                                    fontSize={typography.mdxl}
                                    fontWeight="bolder"
                                    mb="24px"
                                    color={color.palette.secondary.main}
                                >Catalogues & Product Guides</Typography>

                                <Typography variant="body1"
                                    fontSize={typography.mdxl}
                                    mb="25px"
                                >Browse our wide range of products and solutions for your business.</Typography>
                                <Link display="flex" alignItems="center" href="#" underline="none" fontSize={typography.mdxl}>
                                    VIEW NOW <ChevronRightIcon />
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default Flyers;
