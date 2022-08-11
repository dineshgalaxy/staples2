import SelectOveride from "./SelectOveride";
import ButtonOverRide from "./ButtonOveride";
import ListItem from './ListItem';
import Accordion from "./Accordion";
import Tooltip from "./Tooltip";
import InputOveride from "./InputOveride";
const Overide = {
        components: {

        ...ButtonOverRide,
        ...SelectOveride,
        ...ListItem,
        ...Accordion,
        ...Tooltip,
        ...InputOveride
        }
}

export default Overide;