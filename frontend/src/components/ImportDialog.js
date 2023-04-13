import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

const ImportDialog = ({ isLoggedIn }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {isLoggedIn && (
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          Import Transactions
        </Button>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Import Transactions</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To import transactions, please paste your bank transaction data in
            the field below.
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            label="Transaction Data"
            multiline
            rows={6}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} color="primary">
            Import
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImportDialog;
