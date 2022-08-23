import React from "react";
import { Box, Container } from "@mui/system";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import useStyles from "./middleheaderStyle";
import { Button, Link, Typography } from "@mui/material";
import color from "../../../utils/color";
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
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';
import typography from "../../../utils/typography";
import Popover from "@mui/material/Popover";

const MiddleHeader = (props) => {
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [anchorEl3, setAnchorEl3] = React.useState(null);


    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);

    };

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);

    };
    const handleClick3 = (event) => {
        setAnchorEl3(event.currentTarget);

    };

    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    const handleClose3 = () => {
        setAnchorEl3(null);
    };


    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);
    const open3 = Boolean(anchorEl3);




    const Styles = useStyles();
    return (
        <Box border="1px solid #e7e7e7" >
            <Container maxWidth="xl">
                <Box className={Styles.middleheader}>

                    <Box className={Styles.logo} display="flex" alignItems="center" justifyContent="center">
                        
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
                            <ListItem>
                                <Button  onClick={handleClick1} value="1" variant="text" startIcon={<HelpOutlineIcon />}>
                                    <Typography fontFamily={typography.fontFamily.MotivaRegular} color={color.palette.secondary.extraLight} fontSize={typography.xs} className={Styles.icontext}> Sign In</Typography>
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Button  value="2" onClick={handleClick2} variant="text" startIcon={<PersonOutlineIcon />}>
                                    <Typography fontSize={typography.xs} className={Styles.icontext}> Help</Typography>
                                </Button>
                            </ListItem>
                            <ListItem className={Styles.cartBtn}>
                                <Button value="3" onClick={handleClick3} variant="text" startIcon={<AddShoppingCartIcon />}>
                                    <Typography fontSize={typography.xs} className={Styles.icontext}> Cart</Typography>
                                </Button>
                            </ListItem>
                        </List>

                    </Box>
                </Box>



                <Popover
                   
                    open={open1}
                    anchorEl={anchorEl1}
                    onClose={handleClose1}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    sx={{ boxShadow: 'none', borderRadius: '0px' }}
                >
                    <Box minWidth='320px' bgcolor="#f3f3f3">


                        <Box component="form" noValidate autoComplete="off" padding="12px 15px">
                            <Box padding="6px 0">
                                <InputLabel htmlFor="component-simple" sx={{ fontSize: '11px', color: color.palette.secondary.main, mb: '3px', paddingLeft: '5px' }}>
                                    User ID
                                </InputLabel>
                                <TextField fullWidth id="fullWidth" />
                            </Box>
                            <Box padding="6px 0">
                                <InputLabel htmlFor="component-simple" sx={{ fontSize: '11px', color: color.palette.secondary.main, mb: '3px', paddingLeft: '5px' }}>
                                    Password
                                </InputLabel>
                                <TextField fullWidth id="fullWidth" />
                            </Box>
                            <Box className={Styles.checkBox}>
                                <FormControlLabel
                                    control={
                                        <Checkbox

                                            sx={{
                                                "&.Mui-checked": {
                                                    color: color.palette.primary.main,
                                                }
                                            }}
                                        />
                                    } label="Save User ID"

                                />
                            </Box>
                            <Button variant="contained" size="large">Sign in </Button>
                            <Box pt="15px">
                                <Typography color={color.palette.secondary.dark} fontSize={typography.sm}>Forgot
                                    <Link fontFamily={typography.fontFamily.MotivaMedium}> User ID &nbsp;</Link>
                                    or
                                    <Link fontFamily={typography.fontFamily.MotivaMedium}> Password?</Link>

                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Popover>
                <Popover   
                    open={open2}
                    anchorEl={anchorEl2}
                    onClose={handleClose2}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    sx={{ boxShadow: 'none', borderRadius: '0px' }}
                >

                    <List className={Styles.sideBarMenu}>
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
                </Popover>
                <Popover   
                    open={open3}
                    anchorEl={anchorEl3}
                    onClose={handleClose3}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    sx={{ boxShadow: 'none', borderRadius: '0px' }}
                >
                   <Box p="30px 50px" maxWidth="320px"  bgcolor="#f3f3f3" borderTop="4px solid #c00">
                        <Typography color={color.palette.secondary.main} fontSize={typography.mdsm}>To use this feature, please sign in or become a customer</Typography>
                   </Box>
                </Popover>
            </Container>
        </Box>
    )
}
export default MiddleHeader;

const megaMenuSideBar = [
    { list: 'Contact us' },
    { list: 'Help center' },
    { list: 'recall information' },

]

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