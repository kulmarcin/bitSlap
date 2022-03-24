import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuMobile from './menuMobile';
import Menu from './menu';

import useMediaQuery from '@mui/material/useMediaQuery';

export default function ButtonAppBar() {
  const matches = useMediaQuery('(max-width: 600px)');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginRight: 1
          }}
        >
          {matches && <MenuMobile />}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: matches ? 'center' : 'left'
            }}
          >
            BitSlap
          </Typography>
          {!matches && <Menu />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
