import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


export default function HeadBar() {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          {/* //add icon there  we can add icon here in this section */}
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Covid
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
