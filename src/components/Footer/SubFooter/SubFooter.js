import React from "react";
import { Box, Container } from "@mui/system";
import useStyles from "./SubFooterStyle";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, List, ListItem, Typography } from "@mui/material";
import typography from "../../../utils/typography";
const SubFooter = () => {
    const classes = useStyles();
    return (
        <Box bgcolor="#666">
            <Container maxWidth="xl">
                    <Box className={classes.footmid}>
                        <Box className={classes.miditem}>
                            <Typography fontSize={typography.mdsm} color="common.white" fontWeight="700">Join us on</Typography>
                            <Box className={classes.socialMedia}>
                                < LinkedInIcon />
                                <TwitterIcon />
                                < FacebookIcon />
                                <YouTubeIcon />
                                <InstagramIcon />
                            </Box>
                        </Box>
                        <Box className={classes.midImg} display="flex" justifyContent="center" alignItems="center">
                            <img src="bullfrogpower.svg" alt="img"></img>
                            <img src="accessibility-logo.svg" alt="img"></img>

                        </Box>
                    </Box>
                <Box className={classes.copyright}>
                    <Box>
                        <p>© Copyright 2021 Staples Professional Inc. All rights reserved.</p>
                        <List>
                            <ListItem className={classes.listA}>
                                <Link href="#" >Terms & Conditions</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#">Privacy Notice</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#">Staples Professional</Link>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default SubFooter;