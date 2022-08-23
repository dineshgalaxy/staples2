import { Box, Container } from "@mui/system";
import { React, useState } from "react";
import useStyles from "./MobileMenuStyle";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List, ListItem, Link, Button } from '@mui/material';
import typography from '../../../utils/typography';
import Grid from '@mui/material/Grid';
import Hamburger from 'hamburger-react';

const MobileMenu  = () => {
  const [expanded, setExpanded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();

  return (
    <Box>
      <Container maxWidth="xl">
      <Box position="absolute" top="35px" left="0px" color="common.black" className={classes.humburger} onClick={() => setShowMenu(!showMenu)}>
                <Hamburger direction="right" size={18} />
            </Box>
            
        <Box className={`${classes.navMenu} ${showMenu && 'active'}`}>

          <Grid  container>
           
            <Grid item xs={12} sm={12} md={12} mb="10px">
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary 
                className={classes.accordionSummary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >

                  <Link  fontSize={typography.md.fontSize} underline="none" href="#"  > products</Link>

                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0 0px' }}>
                  <List className={classes.mobilemenu} sx={{  padding:'0px', display: 'flex', flexDirection: 'column', color: "common.white" }}>
                    <ListItem>
                      <Link href="#"  underline="none" lineHeight="24px" fontSize={typography.lg} >Wealth services
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="#"  underline="none" lineHeight="24px" fontSize={typography.lg} >Personal financial consulting
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
              <Link   fontSize={typography.md.fontSize} underline="none" href="#" 

              >Services & Solutions</Link>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 0px' }}>
              <List className={classes.mobilemenu} sx={{ padding:'0px', display: 'flex', flexDirection: 'column', color: "common.white" }}>
                <ListItem>
                  <Link href="#"  underline="none" lineHeight="24px" fontSize={typography.lg} >Wealth services
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#"  underline="none" lineHeight="24px" fontSize={typography.lg} >Personal financial consulting
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
              <Link  fontSize={typography.md.fontSize} underline="none" href="#" 

              >
              Brands
              </Link>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 0px' }} mb="10px">
              <List className={classes.mobilemenu} sx={{ padding:'0px', display: 'flex', flexDirection: 'column', color: "common.white" }}>
                <ListItem>
                  <Link href="#" pb="0px"  underline="none" lineHeight="24px" fontSize={typography.lg} >Wealth services
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#"  underline="none" lineHeight="24px" fontSize={typography.lg} >Personal financial consulting
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
              <Link fontSize={typography.md.fontSize} underline="none" href="#" 
              >
               Deals
              </Link>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 0px' }}>
              <List className={classes.mobilemenu} sx={{ padding:'0px',display: 'flex', flexDirection: 'column', color: "common.white" }}>
                <ListItem>
                  <Link href="#" pb="0px"  underline="none" lineHeight="24px" fontSize={typography.lg} >Wealth services
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#"  underline="none" lineHeight="24px" fontSize={typography.lg} >Personal financial consulting
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
              <Link  fontSize={typography.md.fontSize} underline="none" href="#" 
              >
             Publications
              </Link>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 0px' }}>
              <List className={classes.mobilemenu} sx={{ padding:'0px',display: 'flex', flexDirection: 'column', color: "common.white" }}>
                <ListItem>
                  <Link href="#" pb="0px"  underline="none" lineHeight="24px" fontSize={typography.lg} >Careers
                  </Link>
                </ListItem>
              
              </List>
            </AccordionDetails>
          </Accordion>
              </Grid>
              <Grid item xs={12} sm={12} md={12} mb="10px">
              <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Link   fontSize={typography.md.fontSize} underline="none" href="#" 
              >
             Publications
              </Link>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 0px' }}>
              <List className={classes.mobilemenu} sx={{ padding:'0px',display: 'flex', flexDirection: 'column', color: "common.white" }}>
                <ListItem>
                  <Link href="#" pb="0px"  underline="none" lineHeight="24px" fontSize={typography.lg} >Careers
                  </Link>
                </ListItem>
              
              </List>
            </AccordionDetails>
          </Accordion>
              </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  )
}
export default MobileMenu;