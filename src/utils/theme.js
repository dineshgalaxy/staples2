import { createTheme} from '@mui/material/styles';
import breakpoints from "./breakpoints";
import color from "./color";
import Overide from "./Overide/Overide";
import typography from "./typography";
const theme = createTheme({

    ...color ,
    ...breakpoints,
    ...typography,
    ...Overide,
        // ...ButtonOverRide,
})

export default theme;