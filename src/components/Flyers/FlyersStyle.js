import { makeStyles } from '@mui/styles';
import color from '../../utils/color';
const useStyles = makeStyles((theme) => ({
    flyer:{
        padding: '10px 20px',
        height:'100%',
        [theme.breakpoints.up('sm')]: {
            padding: '0px 20px',
            
        }
    }
}));


export default useStyles;

