import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    socialMedia:{
        display:'flex',
        alignItems:'center',
        '& svg':{
            fontSize: '40px',
            color: '#fff'
        }
   
   },
   footmid:{
       display:'flex ',
       flexWrap:'wrap',
       justifyContent:'space-between',
       [theme.breakpoints.up('sm')]:{
           flexWrap:'nowrap'
       }
   },
   midImg:{
    display:' flex',
    '& img':{
        width: '100%',
        height:'auto'
    }
}
}));


export default useStyles;
