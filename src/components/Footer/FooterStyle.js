import { makeStyles } from "@mui/styles";
import color from "../utils/color";
import typography from "../utils/typography";
const useStyles = makeStyles((theme) => ({
  footermenu: {
    "& li": {
      paddingLeft: "15px",
      "& a:hover": {
        color: color.palette.primary.main,
        transition: "0.5s ease",
      },
    },
  },
}));

export default useStyles;
