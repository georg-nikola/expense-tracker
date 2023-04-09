import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import ImportDialog from './ImportDialog';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" flexGrow={1}>
          Expense Tracker
        </Typography>
        <Box>
        <ImportDialog />
          <LoginForm />
          <SignupForm />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;