import color from "../color";
import typography from "../typography";
const ButtonOverRide = {
  MuiButton: {
    styleOverrides: {
      sizeLarge: {
        padding: '8px 10px',
        width: '100%',
        maxHeight: '37px',
        fontSize: typography.mdsm.fontSize,
        backgroundColor: color.palette.primary.main,
        borderRadius: '18px',
        border: '0',
        color: color.palette.common.white,
        transition: ' all .3s ease',
        fontFamily: typography.fontFamily.MotivaMedium,
        '&:hover': {
          boxShadow: 'none',
          border: '1px solid #c00',
          backgroundColor:color.palette.common.white,
          color: color.palette.primary.main,
          transition: ' all .3s ease',
        },
      },
      // sizeMedium: {
      //   padding: '8px 10px',
      //   minWidth: '223px',
      //   fontSize: '18px',
      //   backgroundImage: 'linear-gradient(to bottom, #dd5404, #fa7f37)',

      // },
      sizeSmall: {
        padding: '8px 10px',
        fontSize: typography.h6.fontSize,
        minWidth: '168px',
        backgroundImage: 'linear-gradient(to bottom, #dd5404, #fa7f37)',

      },
      endIcon: {
        margin: '0px 0 0 0'
      },
      text:{
        border:0,
      },
      root: {
        boxShadow: 'none',
        textTransform: 'initial',
        border: '1px solid #444',
        color: color.palette.secondary.main,
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: color.palette.secondary.main,
        }
      }
    }
  }
};
export default ButtonOverRide;

