import { makeStyles } from '@mui/styles';
import color from '../../utils/color';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
  accordionSummary:{
    '& svg':{
      color:color.palette.common.white,
      
    }
  },
  
  mobilemenu:{
      
      '& li':{
        '& a':{
          fontSize:typography.mdsm.fontSize,
        }
      }
  },
  footerMenu:{
    display:'block',
    [theme.breakpoints.up('xsm')]:{
        display:'none'
    }
  }

}));


export default useStyles;