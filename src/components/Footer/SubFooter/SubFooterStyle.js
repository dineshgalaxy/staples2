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
       justifyContent:'space-between'
   },
   midImg:{
    display:' flex',

    '& img':{
        width: '100%'
    }
}
}));


export default useStyles;
