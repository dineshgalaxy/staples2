import color from "../color";
import typography from "../typography";

const InputOveride = {
    MuiInputBase: {
        styleOverrides: {
            root:{
                '@media (max-width: 600px)': {
                    fontSize:typography.sm.fontSize,
                  }
            }
        },


    },
};
export default InputOveride;