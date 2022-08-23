import zIndex from '@mui/material/styles/zIndex';
import { makeStyles } from '@mui/styles';
import typography from '../../../utils/typography';
const useStyles = makeStyles((theme) => ({
    menubar:
    {
        display:'none',
        padding:'6px 0',
        '& ul': {
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            '& li': {
                padding: '6px 10px',
               
                [theme.breakpoints.up('md')]:{
                    padding: '6px 25px',
                } ,
                '& a': {
                    textTransform: 'uppercase',
                    fontSize: typography.sm.fontSize,
                    textDecoration: 'none',
                    color: '#444',
                    fontWeight: 500,
                    fontFamily:typography.fontFamily.MotivaMedium,

                    '& i': {
                        fontSize: '16px',
                        paddingLeft: ' 9px',
                    },
                    [theme.breakpoints.up('md')]:{
                        fontSize: typography.mdsm.fontSize
                    } ,
                },
               
            }
        },
        [theme.breakpoints.up('xsm')]:{
           display:'block'
        } ,
    },
   
    menuItem: {
            minWidth: '920px',
            width: '100%',
            boxShadow: 'none',
            minHeight:' auto',
            borderRadius:'0px',
            zIndex:2,
    
    },
    sideBarMenu: {
        width: '100%',
        padding: '0px',
        maxWidth: '230px',
        height: 'auto',
        background: '#f3f3f3',
    
    
        // display:'flex',
        // flexDirection:'column',
        '& li':{
            padding: '6px 10px',
            whiteSpace:'normal',
            borderBottom:'1px solid #e4e4e4',
            '&:hover':{
                color: '#c00',
                backgroundColor:' #fff',
        },
        '& a':{
            '&:hover':{
                color: '#c00',
               
        },
        }
        }
       
},
megaMenu:{
    padding:'30px 20px',
    '& ul':{
        '& a':{
            '&:hover':{
                color: '#c00',
               
        },
        }
    }
},


}));


export default useStyles;
  
//   .navmenu ul li:hover ul.megamenu{
//     display: block;
  
//   }
//   .navmenu ul li:hover ul.megamenu li{
//     width: 150px;
//     margin: 20px;
   
//   }
  
//   .navmenu ul li:hover ul.megamenu li a:hover{
//     background-color: black;
//     color: white;
//   }
  