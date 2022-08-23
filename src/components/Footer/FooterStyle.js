import { makeStyles } from '@mui/styles';
import color from '../../utils/color';
import typography from '../../utils/typography';
const useStyles = makeStyles((theme) => ({
  footerSection:{
    padding:"30px 0 15px",
    [theme.breakpoints.up('xsm')]:{
      padding:"50px 0 10px",
    }
  },
  accordionSummary:{
    '& svg':{
      display:'block',
      [theme.breakpoints.up('sm')]:{
        display:'none',
      }
    }
  },
  footerMenu:{
    display:'none',
    '& ul':{
      padding:'0px',
      '& li':{
        padding:' 3px 0',
        lineHeight:1.5,
      }
    } ,
    [theme.breakpoints.up('xsm')]:{
      display:'block',
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