import React from "react";
import { Box, Container } from "@mui/system";
import useStyles from "./TopHeaderStyle";
import Link from '@mui/material/Link';
import typography from "../../../utils/typography";
import Button from '@mui/material/Button';
const TopHeader = () => {
  const classes = useStyles();
  return (
    <Box borderBottom="1px solid #e7e7e7">
      <Container maxWidth="xl">
       <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box className={classes.selectContainer} width="40px" fontSize="12px">
          <select>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>

        </Box>
        <Box>
      
              <Link padding='2px 0 2px 8px' href="#" fontSize={typography.xs} borderLeft='1px solid #e7e7e7' color="#2a78c6" underline="none">Live chat</Link>
        </Box>
       </Box>
      </Container >
    </Box>

  );
}

const options = [
  {
    label: "EN",
    value: "EN",
  },
  {
    label: "FR",
    value: "FR",
  },
  
];
export default TopHeader;