import { makeStyles } from '@mui/styles';
import color from '../../../utils/color';
import typography from '../../../utils/typography';
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
        maxWidth: '140px',
        width:'100%',
        [theme.breakpoints.up('lg')]: {
            maxWidth: '160px',
            width:'100%'
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
        width:'100%',
        alignItems: ' center',
        justifyContent: 'space-between',
        [theme.breakpoints.up('xsm')]: {
            width:'685px',
        }
    },
    // inputBox: {
      
    //     [theme.breakpoints.up('lg')]: {
          
    //     }
    // },
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
        },
        
    },
    formControl:{
            flexGrow:'1'
    },
    search: {
        display: ' flex',
        flexGrow: 1,
        [theme.breakpoints.up('lg')]: {
            flexGrow: 1,
        }
    },
    inkAndtoner: {
        marginLeft: ' 10px',
        '& button':{
            padding: '6px 4px' ,
            whiteSpace:'nowrap',
            fontSize:typography.mdsm.fontSize,
            '& span':{
                display:'none',
                [theme.breakpoints.up('sm')]: {
                    display:'inherit',
                }
            },
            [theme.breakpoints.up('sm')]: {
                padding: '6px 20px',
                fontSize:typography.md.fontSize,
            }
            
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: ' 20px',
        }
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
                    flexDirection:'column',
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
    },
    humburger:{
        display:'inline-block',
        [theme.breakpoints.up('xsm')]:{
            display:'none',
        }
    }

}));


export default useStyles;


