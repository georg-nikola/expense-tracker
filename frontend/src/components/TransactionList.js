import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const transactions = [
  { id: 1, description: 'Groceries', amount: -50 },
  { id: 2, description: 'Salary', amount: 1000 },
];

const TransactionList = () => {
  return (
    <Box my={4}>
      <Typography variant="h5">Transactions</Typography>
      <List>
        {transactions.map((transaction) => (
          <ListItem key={transaction.id}>
            <ListItemText
              primary={transaction.description}
              secondary={`Amount: ${transaction.amount}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TransactionList;
