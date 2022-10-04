import { Button, Link, Typography } from "@mui/material";
import React from "react";
import useStyles from './MenubarStyle';
import { List } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import { Box, Container } from "@mui/system";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import color from "../../../utils/color";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';
import typography from "../../../utils/typography";
import Popover from "@mui/material/Popover";
import MobileMenu from "./MobileMenu";

const Menubar = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const classes = useStyles();
    return (
        <Box borderBottom='1px solid #e7e7e7' className={classes.topMenu}>
            <Container maxWidth="xl">
                <Box className={classes.menubar}>
                    <List>
                        {
                            menuItem.map((menuvalue) => {
                                return (
                                    <>
                                        <ListItem onClick={handleClick} className={classes.list}>
                                            <Link href="#" display="flex" alignItems="center"
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

                </Box>
                <Popover

                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                >
                    <Box display="flex" className={classes.menuItem}>
                        <List className={classes.sideBarMenu}>
                            {
                                megaMenuSideBar.map((item) => {
                                    return (
                                        <ListItem>
                                            <Link href="#" underline="none" fontWeight="700" fontFamily={typography.fontFamily.MotivaRegular} color={color.palette.secondary.main} fontSize={typography.mdsm}>{item.list}</Link>
                                        </ListItem>
                                    )
                                })
                            }



                        </List>
                        <Box display="flex" gap="30px" className={classes.megaMenu}>
                            <List>
                                <Link underline="none" fontSize={typography.mdsm} color="secondary.main" fontWeight="700">Computer Accessories
                                </Link>
                                {
                                    megaMenu1.map((item) => {
                                        return (
                                            <ListItem onClick={handleClick}>
                                                <Link href="#" underline="none" lineHeight='1.5' fontFamily={typography.fontFamily.MotivaRegular} color={color.palette.secondary.main} fontSize={typography.sm}>{item.list}</Link>
                                            </ListItem>
                                        )
                                    })
                                }



                            </List>
                            <List>
                                <Link underline="none" fontSize={typography.mdsm} color="secondary.main" fontWeight="700"> Computer Components
                                </Link>
                                {
                                    megaMenu2.map((item) => {
                                        return (
                                            <ListItem>
                                                <Link href="#" underline="none" lineHeight='1.5' fontFamily={typography.fontFamily.MotivaRegular} color={color.palette.secondary.main} fontSize={typography.sm}>{item.list}</Link>
                                            </ListItem>
                                        )
                                    })
                                }



                            </List>
                        </Box>
                    </Box>
                </Popover>


            </Container>
            <MobileMenu />
        </Box>
    )
}

export default Menubar;

const menuItem = [
    { listText: 'products' },
    { listText: 'services' },
    { listText: 'brands' },
    { listText: 'deals' },
    { listText: 'piblications' },
    { listText: 'become a customer' }
]

const megaMenuSideBar = [
    { list: 'Computer Accessories & Components' },
    { list: 'Computers' },
    { list: 'Electronics' },
    { list: 'Computers' },
    { list: 'Electronics' },
    { list: 'Computers' },
    { list: 'Electronics' },
    { list: 'Computers' },
    { list: 'Electronics' },
    { list: 'Computers' },
    { list: 'Electronics' },
    { list: 'Computers' },
    { list: 'Electronics' },
]

const megaMenu1 = [
    { list: 'Batteries & Power Supply' },
    { list: ' Batteries' },
    { list: 'Computer Cables' },
    { list: 'Computer Headsets & Microphones' },
    { list: 'Data Storage' },
    { list: 'Electronic Cleaning' },
    { list: 'Laptop Bags & Sleeves' },
    { list: 'Mice & Keyboards' },
    { list: 'Monitor Stands & Screen Filters' },
    { list: ' Monitors & Accessories' },
    { list: 'Networking' },
    { list: 'PC Headsets' },
    { list: 'PC Headsets' },
    { list: ' PC Speakers' },
    { list: ' Webcams' },
]
const megaMenu2 = [
    { list: 'Batteries & Power Supply' },
    { list: ' Batteries' },
    { list: 'Computer Cables' },
    { list: 'Computer Headsets & Microphones' },
    { list: 'Data Storage' },
    { list: 'Electronic Cleaning' },
    { list: 'Laptop Bags & Sleeves' },
    { list: 'Mice & Keyboards' },
    { list: 'Monitor Stands & Screen Filters' },
    { list: ' Monitors & Accessories' },
    { list: 'Networking' },
    { list: 'PC Headsets' },
    { list: 'PC Headsets' },
    { list: ' PC Speakers' },
    { list: ' Webcams' },
]




