import React, { useState } from 'react';
import './DemoStyle.css';
import { Box } from '@mui/system';
import { List, Link, Typography } from "@mui/material";
import ListItem from '@mui/material/ListItem';

const SingleProject = ({ heading, title,children }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Box display="flex">
        <Box marginRight="20px" onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)} className="card-container" display="flex" alignItems="center" justifyContent="space-between">
          <Typography id="card-title">{title}</Typography>
        </Box>
        <Box onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)} className="card-container" display="flex" alignItems="center" justifyContent="space-between">
          <Typography id="card-title">{title}</Typography>
        </Box>
      </Box>
      <Box className={`Info ${hover ? "Show" : ""}`}>
    {children}
        <List>

          <ListItem>
            <Link href="#" underline="none" fontWeight="700">menu1</Link>
          </ListItem>
          <ListItem>
            <Link href="#" underline="none" fontWeight="700">menu1</Link>
          </ListItem>
          <ListItem>
            <Link href="#" underline="none" fontWeight="700">menu1</Link>
          </ListItem>
        </List>

      </Box>
      <Box className={`Info ${hover ? "Show" : ""}`}>

        <List>

          <ListItem>
            <Link href="#" underline="none" fontWeight="700">menu2</Link>
          </ListItem>
          <ListItem>
            <Link href="#" underline="none" fontWeight="700">menu2</Link>
          </ListItem>
          <ListItem>
            <Link href="#" underline="none" fontWeight="700">menu2</Link>
          </ListItem>
        </List>

      </Box>
    </>
  )
}


export default SingleProject;