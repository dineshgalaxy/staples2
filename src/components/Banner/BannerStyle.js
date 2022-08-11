import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import color from '../../utils/color';
const useStyles = makeStyles((theme) => ({
    rightArrow:{
        display: "none", 
        justifyContent:'center',
        alignItems:'center',
        background:' rgba(0,0,0,.3)',
        right:'0' ,
        position:'absolute',
        top:'50%',
        transform:' translate(0, -50%)',
        width:'50px',
        height:'50px',
        borderRadius:'50%',
        cursor:'pointer',
        
        '& svg':{
            fontSize:'28px',
            color:color.palette.common.white,
        },
        [theme.breakpoints.up('sm')]:{
                display:'flex'
        }   
    },
    dots:{
       '& li':{
        width:'6px',
        '& button::before':{
            fontSize:'10px',
            width:'6px'
        }  
       },
       '& li.slick-active button::before':{
           color:'white' 
       }
    },
    slider:{
        height:'490px'
    },
 
}));


export default useStyles;