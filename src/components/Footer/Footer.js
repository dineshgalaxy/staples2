import React from "react";
import { Box, Container } from "@mui/system";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import typography from "../../utils/typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, List, ListItem } from "@mui/material";

const Footer = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 1 }}
            // columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={3}>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{flexShrink: 0 }}>
                      General settings
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      <ListItem>
                        <Link underline="none" textTransform="capitalize" fontFamily={typography.fontFamily.MotivaRegular} fontSize={typography.mdsm} color="secondary.main">hello</Link>
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{flexShrink: 0 }}>
                      Users
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Donec placerat, lectus sed mattis semper, neque lectus
                      feugiat lectus, varius pulvinar diam eros in elit.
                      Pellentesque convallis laoreet laoreet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={{flexShrink: 0 }}>
                      Advanced settings
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                      Integer sit amet egestas eros, vitae egestas augue. Duis
                      vel est augue.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={{flexShrink: 0 }}>
                      Personal data
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                      Integer sit amet egestas eros, vitae egestas augue. Duis
                      vel est augue.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

const footerItem = [
  {
    heading: "Customer Service",
    links_1: "Help Center",
    links_2: "Contact Us",
    links_3: "Recall Information",
    links_4: "Safety Data Sheets",
  },
  {
    heading: "Corporate Info",
    links_1: "Staples Professional Overview",
    links_2: "Industries Served",
    links_3: "Blog",
    links_4: "Our Brands",
  },
  {
    heading: "Staples Corporate Solutions",
    links_1: "Office Products",
    links_2: "Technology Products",
    links_3: "Furniture",
    links_4: "Facilities",
    links_5: "Promotional Products",
  },
];

// {
//     heading: "New Customers",
//     links_1: "Become a Customer",
//     links_2: "Govt. Customers",
//     links_3: "Membership",
//   },
