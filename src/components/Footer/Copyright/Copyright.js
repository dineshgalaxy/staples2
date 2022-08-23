import React from "react";
import { Box, Container } from "@mui/system";
import { Link, List, ListItem, Typography } from "@mui/material";
import useStyles from "./CopyrightStyle";
import typography from "../../../utils/typography";
const Copyright = () => {
   const classes = useStyles();
    return (
        <Box  bgcolor="secondary.main">
            <Container maxWidth="xl">
                <Box className={classes.copyright} display="flex" justifyContent="center">
                    <Box>
                        <Typography  textAlign="center" mb="6px" fontSize={typography.mdsm} color="common.white">© Copyright 2021 Staples Professional Inc. All rights reserved.</Typography>
                        <List>
                            <ListItem className={classes.listA}>
                                <Link textAlign="center" fontSize={typography.mdsm} color="common.white" underline="none" href="#" >Terms & Conditions</Link>
                            </ListItem>
                            <ListItem>
                                <Link   textAlign="center" fontSize={typography.mdsm} color="common.white" underline="none" href="#">Privacy Notice</Link>
                            </ListItem>
                            <ListItem>
                                <Link  textAlign="center" fontSize={typography.mdsm} color="common.white" underline="none" href="#">Staples Professional</Link>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Copyright;