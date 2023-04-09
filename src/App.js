import React, { useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Container maxWidth="md">
        {isLoggedIn ? (
          <>
            <TransactionForm />
            <TransactionList />
          </>
        ) : (
          <LandingPage />
        )}
      </Container>
    </>
  );
}

export default App;
