import { Box, Container } from "@mui/system";
import { React, useState } from "react";
import useStyles from "./FooterStyle";
import { accordionActionsClasses, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List, ListItem, Link, Button } from '@mui/material';
import typography from '../../utils/typography';
import Grid from '@mui/material/Grid';
import SubFooter from "./SubFooter/SubFooter";
import Copyright from "./Copyright/Copyright";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();

  return (
    <>
    <Box bgcolor="secondary.main" className={classes.footerSection} >
      <Container maxWidth="xl">
        <Box className={classes.footerMenu}>
          <Grid
            container>
            {
              footerItem.map((value) => {
                return (
                  <Grid item xs={12} sm={4} md={3} mb="15px">
                    <Typography fontWeight="700" variant="h4" fontFamily={typography.fontFamily.MotivaRegular} fontSize={typography.lg.fontSize} underline="none" href="#" color="common.white"> {value.heading}</Typography>
                    <List> 
                      <ListItem>
                        <Link fontSize={typography.mdsm.fontSize} underline="none" href="#" color="common.white"> {value.links_1}</Link>
                      </ListItem>
                      <ListItem>
                        <Link fontSize={typography.mdsm.fontSize} underline="none" href="#" color="common.white"> {value.links_2}</Link>
                      </ListItem>
                      <ListItem>
                        <Link fontSize={typography.mdsm.fontSize} underline="none" href="#" color="common.white"> {value.links_3}</Link>
                      </ListItem>
                      <ListItem>
                        <Link fontSize={typography.mdsm.fontSize} underline="none" href="#" color="common.white"> {value.links_4}</Link>
                      </ListItem>
                      <ListItem>
                        <Link fontSize={typography.mdsm.fontSize} underline="none" href="#" color="common.white"> {value.links_5}</Link>
                      </ListItem>
                    </List>
                  </Grid>

                )
              })
            }
             <Grid item xs={12} sm={4} md={3} mb="15px">
                    <Typography fontWeight="700" variant="h4" fontFamily={typography.fontFamily.MotivaRegular} fontSize={typography.lg.fontSize} underline="none" href="#" color="common.white"> New Customer</Typography>
                    <List> 
                      <ListItem>
                        <Link fontSize={typography.mdsm.fontSize} underline="none" href="#" color="common.white"> Become a Customer</Link>
                      </ListItem>
                      <ListItem>
                        <Link fontSize={typography.mdsm.fontSize} underline="none" href="#" color="common.white"> Govt. Customers</Link>
                      </ListItem>
                      <ListItem>
                        <Link fontSize={typography.mdsm.fontSize} underline="none" href="#" color="common.white"> Membership</Link>
                      </ListItem>
                     
                    </List>
                    <Typography mt="15px" fontWeight="700" variant="h4" fontFamily={typography.fontFamily.MotivaRegular} fontSize={typography.lg.fontSize} underline="none" href="#" color="common.white">Join the Staples Team</Typography>
                    <List >
                      <ListItem>
                        <Link fontSize={typography.mdsm.fontSize} underline="none" href="#" color="common.white"> Careers</Link>
                      </ListItem>
                    </List>
                  </Grid>

           
          
          </Grid>




        </Box>
            <MobileFooter/>
      </Container>
    
    </Box>
      <SubFooter/>
      <Copyright/>
    </>
  )
}



const footerItem = [
  {
    heading: 'Customer Servic',
    links_1: 'Help Center',
    links_2: 'Contact Us',
    links_3: 'Recall Information',
    links_4: 'Safety Data Sheets',


  },
  {
    heading: 'Corporate Info',
    links_1: 'Staples Professional Overview',
    links_2: 'Industries Served',
    links_3: 'Blog',
    links_4: 'Our Brands'
  },
  {
    heading: 'Staples Corporate Solutions',
    links_1: 'Office Products',
    links_2: 'Technology Products',
    links_3: 'Furniture',
    links_4: 'Facilities',
    links_5: 'Promotional Products'
  },
]
export default Footer;