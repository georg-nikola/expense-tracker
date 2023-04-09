import React from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <TransactionForm />
        <TransactionList />
      </Container>
    </>
  );
}

export default App;
