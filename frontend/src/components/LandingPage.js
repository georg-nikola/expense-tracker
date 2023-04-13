import React from 'react';
import { Box, Typography } from '@mui/material';

const LandingPage = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        Welcome to Expense Tracker
      </Typography>
      <Typography variant="body1">
        Expense Tracker is a simple app that helps you keep track of your
        income and expenses. You can manually add transactions or import them
        from your bank statements. To get started, please log in or sign up for
        an account.
      </Typography>
    </Box>
  );
};

export default LandingPage;
