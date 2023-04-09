import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const TransactionForm = () => {
  return (
    <Box my={4}>
      <Typography variant="h5">Add a transaction</Typography>
      <Box component="form" mt={2}>
        <TextField
          fullWidth
          label="Description"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Amount"
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit">
          Add Transaction
        </Button>
      </Box>
    </Box>
  );
};

export default TransactionForm;
