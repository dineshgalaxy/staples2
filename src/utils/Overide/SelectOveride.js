import color from "../color";
import typography from "../typography";
const  SelectOveride = {
    MuiSelect: {
      styleOverrides: {
        icon: {
            height: '50px',
            borderRadius: '0 16px 16px 0',
            minWidth: '44px',
            top: '0px',
            color: 'transparent'
        },
        iconFilled: {
            right: 0
        },
        select: {
            position: 'relative',
            '&:before': {
                content: '"\\e900"',
                position: 'absolute',
                right: '8px',
                top: '14px',
                zIndex: '9',
                fontFamily: 'icomoon !important',
                fontSize: typography.h4.fontSize,
                color:color.palette.secondary.main,
                '@media (min-width: 600px)': {
                    right: '-6px',
                    top: '17px',
                    fontSize: typography.h2.fontSize,
                  }
            },
            '&:focus': {
                backgroundColor: 'transparent'
            }
        }
      },
    },

    // MuiPopover: {
    //     paper: {
    //         borderRadius: '16px'
    //     }
    // }
};
export default  SelectOveride;

