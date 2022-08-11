import { makeStyles } from '@mui/styles';
import color from '../../../utils/color';
const useStyles = makeStyles((theme) => ({
    middleheader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        flexWrap:'wrap',
        [theme.breakpoints.up('md')]: {
            minWidth: '160px',
            flexWrap:'nowrap',
        }
    },
    logo: {
        minWidth: '140px',
        [theme.breakpoints.up('lg')]: {
            minWidth: '160px',
        }
    },
    
    searchTop:{
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        flex: '1 1 100%',
        order: 3,
        borderTop:' 1px solid #e7e7e7',
        paddingTop: '10px',
        paddingBottom:' 10px',
        justifyContent:'center'
    }
    },
    searchbar: {
        display: 'flex',
        width: '620px',
        alignItems: ' center',
        justifyContent: 'center',
        [theme.breakpoints.up('lg')]: {
            minWidth: '685px',
        }
    },
    inputBox: {
        minWidth: '385px',
        [theme.breakpoints.up('lg')]: {
            minWidth: '460px',
        }
    },
    input: {
        '&:focus': {
            border: '1px solid',
            borderRadius: '0px',
            outline: 0,
        },
    },
    searchBtn: {
        display: 'inline-flex',
        padding: '6px 15px',
        marginLeft: ' -8px',
        cursor: 'pointer',
        background: '#444',
        alignItems: 'center',
        fontSize: '18px',
        color: '#fff',
        border: '1px solid #444',
        borderRadius: '0px 4px 4px 0px',
        '&:hover': {
            backgroundColor: color.palette.secondary.main,
        }
    },
    search: {
        display: ' flex',
    },
    inkAndtoner: {
        marginLeft: ' 20px',
    },

    supportmenu: {
        '&  ul': {
            listStyle: 'none',
            display: ' flex',
            padding: 0,
            '& li': {
                borderLeft: '1px solid #e7e7e7',
                minWidth: '70px',
                minHeight: '60px',
                width: '100%',
                '& button': {
                    background: 'white',
                    border: 0,
                    textAlign: 'center',
                    minHeight: '60px',
                    width: '100%',
                    fontSize: '13px',
                    '& i': {
                        fontSize: '18px',
                        lineHeight: 1.5,
                    },
                    '& icontext': {
                        fontSize: '11px',

                    }
                }
            },
            '& li:last-child': {
                position: 'relative',
                '& button': {
                    background: '#c00',
                    color: '#fff',
                    minHeight: '65px',
                    position: 'absolute',
                    content: "",
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 1,
                    borderRadius: '0 0 3px 3px',
                }
            }

        },
    },
    icontext:{
        display:'none',
        [theme.breakpoints.up('xsm')]:{
            display:'block',
        }
    }

}));


export default useStyles;


// .supportmenu ul li:last-child{
//     position: 'relative',

//     button{
//         background: 'red',
//         color: 'white',
//     }
// }
// .supportmenu ul li:last-child::after{
//     min-height:' 10px',
//     width: '100%',
//     position: 'absolute',
//     background: 'red',
//     content: ""
//     z-index: 1,
//     /* top: 0; */
//     left: 0,
//     border-radius: '0 0 3px 3px',
//     bottom: '-6px',
// }

// @media only screen and (max-width:1023px){
//     .middleheader{
//         flex-flow: 'row wrap',
//         background: '#fff'.
//         height: 'auto'.
//     }
//     .searchTop{
//         flex:'1 1 100%',
//         order:3,
//         max-width: '100%',
//         padding: '10px 15px',
//         border-top: '1px solid #e7e7e7',
//     }
//     .searchbar{
//         margin:' 0 auto',
//     }
//     .logo{
//         margin-left: '38px', 
//         max-width: '132px',
//         width: '100%',
//     }
// }
// @media only screen and (max-width:767px){
//     .supportmenu ul li{
//         min-width: '45px',
//         min-height:'auto',
//         border-left: 0,
//     button{
//         min-height: 'auto',
//     }
//         .icontext
// {
//     display: 'none',
// }
//     }

// }
