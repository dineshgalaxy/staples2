import color from "../color";
import typography from "../typography";
const ButtonOverRide = {
    MuiButton: {
      styleOverrides: {
        // sizeLarge: {
        //   padding: '8px 10px',
        //   minWidth: '264px',
        //   fontSize: typography.h5.fontSize,
        //   backgroundImage: 'linear-gradient(to bottom, #dd5404, #fa7f37)',

        // },
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
        endIcon:{
          margin:'0px 0 0 0'
        },
        root: {
          boxShadow: 'none',
          textTransform:'initial',
          border:'1px solid #444',
          color: color.palette.secondary.main,
          '&:hover': {
            boxShadow: 'none',
            backgroundColor:color.palette.secondary.main,
            color:'white',
            border:'1px solid #444'

          },
        },
      },
    },
    MuiIconButton:{
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor:color.palette.secondary.main,
          }
        }
      }
    }
};
export default ButtonOverRide;

