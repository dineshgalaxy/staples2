import React from "react";
import { Box, Container } from "@mui/system";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import useStyles from "./middleheaderStyle";
import { Button, Link } from "@mui/material";
import color from "../../../utils/color";
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../../../styles/icon-moon.scss'
import searchIcon from '../../../images/search.png';
import IconButton from '@mui/material/IconButton';
import Hamburger from 'hamburger-react'
import { List } from "@mui/material";
import ListItem from '@mui/material/ListItem';

const MiddleHeader = (props) => {
    const Styles = useStyles();
    return (
        <Box border="1px solid #e7e7e7" >
            <Container maxWidth="xl">
                <Box className={Styles.middleheader}>
                   
                    <Box className={Styles.logo} display="flex" alignItems="center" justifyContent="center">
                    <Box className={Styles.humburger} >
                        <Hamburger size={18} />
                    </Box>
                        <Link href="#"><img src="logo-en.svg" alt="logo-en.svg" width="100%"></img></Link>
                    </Box>
                    <Box className={Styles.searchTop} display="flex">
                        <Box className={Styles.searchbar}>
                            <Box className={Styles.search}>
                                <FormControl variant="outlined" className={Styles.formControl} >
                                    <OutlinedInput
                                        className={Styles.inputBox}
                                        sx={{ fontSize: '13px', width: '100%', borderRadius: '0px', height: '39px' }}
                                        id="outlined-adornment-weight"
                                        placeholder="Search for all your business needs"
                                        endAdornment={<InputAdornment position="end"></InputAdornment>}
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight',
                                        }}
                                    />

                                </FormControl>




                                <IconButton color="secondary" aria-label="add an alarm" className={`${Styles.searchBtn}`} sx={{ borderRadius: '0px 4px 4px 0px', padding: '7px 21px', border: '1px solid #444', bgcolor: color.palette.secondary.main, color: color.palette.common.white }}>
                                    <img width="20px" src={searchIcon} alt={searchIcon} sx={{ color: 'red' }} />
                                </IconButton>
                            </Box>
                            <Box className={Styles.inkAndtoner}>
                                <Button variant="outlined" startIcon={<InvertColorsIcon sx={{ color: 'red' }} />}>
                                    Ink &amp; Toner
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={Styles.supportmenu}>
                        <List>

                            {
                                supportArr.map((svalue) => {
                                    return (

                                        <ListItem>
                                            <Button>
                                                {svalue.icon}
                                                <Box className={Styles.icontext}>{svalue.text}</Box>
                                            </Button>
                                        </ListItem>

                                    )
                                })
                            }

                        </List>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default MiddleHeader;

// const 

const supportArr = [
    {
        icon: <PersonOutlineIcon />,
        text: 'Sign in'
    },
    {
        icon: <HelpOutlineIcon />,
        text: 'Help'
    },
    {
        icon: <AddShoppingCartIcon />,
        text: 'Cart'
    }
];