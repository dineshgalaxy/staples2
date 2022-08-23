import { makeStyles } from '@mui/styles';
import color from '../../../utils/color';
import typography from '../../../utils/typography';
const useStyles = makeStyles((theme) => ({
  accordionSummary:{
      '& a':{
        color:color.palette.secondary.main,
        textTransform:'uppercase',
      },
    '& svg':{
      color:color.palette.common.black,
      
    }
  },
  
  mobilemenu:{
      
      '& li':{
        '& a':{
          fontSize:typography.mdsm.fontSize,
          color:color.palette.secondary.main,
        }
      }
  },
  navMenu:{
    position:'absolute',
    padding:'20px 16px 16px 16px',
    zIndex:2,
    left: '-100%',
    top: '9.2rem' ,
    flexDirection: 'column',
    backgroundColor:color.palette.common.white,
    minHeight: 'auto',
    width: '100%',
    transition:' 0.3s',
    '&.active':{
        left: 0,
      }
  },
  humburger:{
    display:'inline-block',
    [theme.breakpoints.up('xsm')]:{
        display:'none',
    }
},
}));


export default useStyles;