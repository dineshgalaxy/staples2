import { Box, Container } from "@mui/system";
import { React, useState } from "react";
import useStyles from "./MobileFooterStyle";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List, ListItem, Link, Button } from '@mui/material';
import typography from '../../utils/typography';
import Grid from '@mui/material/Grid';

const MobileFooter  = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();

  return (

        <Box className={classes.footerMenu} >

          <Grid
         
          
          
            container>
           
            <Grid item xs={12} sm={12} md={12} mb="10px">
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary 
                className={classes.accordionSummary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >

                  <Link fontWeight="700" fontSize={typography.md.fontSize} underline="none" href="#"  color="common.white"> Customer Service</Link>

                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0 0px' }}>
                  <List className={classes.mobilemenu} sx={{  padding:'0px', display: 'flex', flexDirection: 'column', color: "common.white" }}>
                    <ListItem>
                      <Link href="#" color="common.white" underline="none" lineHeight="24px" fontSize={typography.lg} >Wealth services
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="#" color="common.white" underline="none" lineHeight="24px" fontSize={typography.lg} >Personal financial consulting
                      </Link>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={12} md={12} mb="10px">
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary  className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Link fontWeight="700"  fontSize={typography.md.fontSize} underline="none" href="#" color="common.white"

              >Corporate Info</Link>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 0px' }}>
              <List className={classes.mobilemenu} sx={{ padding:'0px', display: 'flex', flexDirection: 'column', color: "common.white" }}>
                <ListItem>
                  <Link href="#" color="common.white" underline="none" lineHeight="24px" fontSize={typography.lg} >Wealth services
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" color="common.white" underline="none" lineHeight="24px" fontSize={typography.lg} >Personal financial consulting
                  </Link>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
            </Grid>
            <Grid item xs={12} sm={12} md={12} mb="10px">
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Link fontWeight="700"  fontSize={typography.md.fontSize} underline="none" href="#" color="common.white"

              >
                Staples Corporate Solutions
              </Link>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 0px' }} mb="10px">
              <List className={classes.mobilemenu} sx={{ padding:'0px', display: 'flex', flexDirection: 'column', color: "common.white" }}>
                <ListItem>
                  <Link href="#" pb="0px" color="common.white" underline="none" lineHeight="24px" fontSize={typography.lg} >Wealth services
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" color="common.white" underline="none" lineHeight="24px" fontSize={typography.lg} >Personal financial consulting
                  </Link>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
              </Grid>
              <Grid item xs={12} sm={12} md={12} mb="10px">
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Link fontWeight="700"  fontSize={typography.md.fontSize} underline="none" href="#" color="common.white"
              >
               New Customer
              </Link>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 0px' }}>
              <List className={classes.mobilemenu} sx={{ padding:'0px',display: 'flex', flexDirection: 'column', color: "common.white" }}>
                <ListItem>
                  <Link href="#" pb="0px" color="common.white" underline="none" lineHeight="24px" fontSize={typography.lg} >Wealth services
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" color="common.white" underline="none" lineHeight="24px" fontSize={typography.lg} >Personal financial consulting
                  </Link>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
              </Grid>
              <Grid item xs={12} sm={12} md={12} mb="10px">
              <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Link fontWeight="700"  fontSize={typography.md.fontSize} underline="none" href="#" color="common.white"
              >
              Join the Staples Team
              </Link>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 0px' }}>
              <List className={classes.mobilemenu} sx={{ padding:'0px',display: 'flex', flexDirection: 'column', color: "common.white" }}>
                <ListItem>
                  <Link href="#" pb="0px" color="common.white" underline="none" lineHeight="24px" fontSize={typography.lg} >Careers
                  </Link>
                </ListItem>
              
              </List>
            </AccordionDetails>
          </Accordion>
              </Grid>
          </Grid>
        </Box>
  )
}
export default MobileFooter;