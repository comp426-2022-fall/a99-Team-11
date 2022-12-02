import './App.css';
import React from 'react';
import Typography from '@mui/material/Typography';
import ButtonAppBar from './components/Appbar';
import OutlinedCard from './components/ListCard';

function App() {
  return (
    <div className="App">
      <ButtonAppBar className="Top" />
      <Typography variant="h1" component="h2" className="Title">
        Personalized Grocery List
      </Typography>
      <OutlinedCard />
    </div>
  );
}

export default App;
