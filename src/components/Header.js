// src/components/Header.js
import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import ImportDialog from './ImportDialog';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" flexGrow={1}>
          Expense Tracker
        </Typography>
        <Box>
          <ImportDialog isLoggedIn={isLoggedIn} />
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
