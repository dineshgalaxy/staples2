import { makeStyles } from '@mui/styles';
import typography from '../../../utils/typography';
import color from '../../../utils/color';
const useStyles = makeStyles((theme) => ({
    selectContainer:{
        borderRight:'1px solid #e7e7e7',
        padding:' 10px 20px 8px 0',
        '& select':{
            border:'0px',
            background:color.palette.common.white,
            fontSize:typography.xs.fontSize,
            color:color.palette.secondary.dark,
            
        }
    }


}));


export default useStyles;