import React from "react";
import useStyles from "./FlyersStyle";
import flyerImg1 from '../../images/EWAY_FLYERICON_LEFT.webp'
import flyerImg2 from '../../images/EWAY_PUBLICATIONICON_RIGHT.webp'
import { Box, Container } from "@mui/system";
import { Link, Typography } from "@mui/material";
import typography from "../../utils/typography";
import color from "../../utils/color";

const Flyers = () => {
    const classes = useStyles();
    return (
        <Box>
            <Container maxWidth="xl">
                <Box display="flex" justifyContent="space-between" gap="6px">
                    <Box padding="0 10px" display="flex" bgcolor="#f3f3f3" alignItems="center" flex="1 1 50%">
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
                            <Link href="#" underline="none"   fontSize={typography.mdxl}>
                            VIEW NOW &gt;
                            </Link>
                        </Box>
                    </Box>
                    <Box padding="0 10px" display="flex" bgcolor="#f3f3f3" alignItems="center" flex="1 1 50%">
                        <Box>
                            <img src={flyerImg2} alt={flyerImg2}></img>
                        </Box>
                        <Box px="30px">
                            <Typography variant="h4"
                                fontSize={typography.mdxl}
                                fontWeight="bolder"
                                mb="25px"
                                color={color.palette.secondary.main}
                            >Catalogues & Product Guides</Typography>

                            <Typography variant="body1"
                                fontSize={typography.mdxl}
                                mb="25px"
                            >Browse our wide range of products and solutions for your business.</Typography>
                            <Link href="#" underline="none"   fontSize={typography.mdxl}>
                            VIEW NOW &gt;
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Flyers;
