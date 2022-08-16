import { Link, Typography } from "@mui/material";
import React from "react";
import useStyles from './MenubarStyle';
import { List } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Container } from "@mui/system";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import typography from "../../../utils/typography";
import color from "../../../utils/color";
const Menubar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <Box borderBottom='1px solid #e7e7e7'>
      <Container maxWidth="xl">
        <Box className={classes.menubar}>
          <List>
            {
              menuItem.map((menuvalue) => {
                return (
                  <>
                    <ListItem>
                      <Link href="#" display="flex" alignItems="center"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        {menuvalue.listText}
                        <KeyboardArrowDownIcon />
                      </Link>
                    </ListItem>

                  </>
                )
              })
            }

          </List>
          <Box display="flex">
            <List
              className={classes.menuItem}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <ListItem onClick={handleClose}>
                <Link underline="none" fontWeight="700" fontFamily={typography.fontFamily.MotivaRegular} color={color.palette.secondary.main} fontSize={typography.mdsm}>  Computer Accessories & Components</Link>


              </ListItem>
              <ListItem onClick={handleClose}>
                <Link underline="none" fontWeight="700" fontFamily={typography.fontFamily.MotivaRegular} color={color.palette.secondary.main} fontSize={typography.mdsm}>  Computers</Link>
              </ListItem>
              <ListItem onClick={handleClose}>
                <Link underline="none" fontWeight="700" fontFamily={typography.fontFamily.MotivaRegular} color={color.palette.secondary.main} fontSize={typography.mdsm}>  Electronics</Link>
              </ListItem>


            </List>

          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Menubar;

const menuItem = [
  { listText: 'products' },
  { listText: 'services & solutions' },
  { listText: 'brands' },
  { listText: 'deals' },
  { listText: 'piblications' },
  { listText: 'become a customer' }
]