import { makeStyles } from '@mui/styles';
import color from '../../utils/color';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
  accordionSummary:{
    '& svg':{
      display:'block',
      [theme.breakpoints.up('sm')]:{
        display:'none',
      }
    }
  },
  footerMenu:{

    [theme.breakpoints.up('xsm')]:{
      display:'none',
    }
  },
  mobilemenu:{
      '& li':{
        '& a':{
          fontSize:typography.mdsm.fontSize,
        }
      }
  }

}));


export default useStyles;