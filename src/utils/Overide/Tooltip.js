import color from "../color";

const Tooltip = {
    MuiTooltip: {
        styleOverrides: {
            
            tooltip:{
                backgroundColor: 'white',
                color:color.palette.secondary.main,
                width:'206px',
                fontSize:'12px',
                lineHeight:'15px',
                textAlign:'center',
                borderRadius:'10px',
                padding:'8px 2px'
            },
            arrow:{
                color: 'white',
            }
        },


    },
};
export default Tooltip;