import './App.css';
import React from 'react';
import Typography from '@mui/material/Typography';
import ButtonAppBar from './components/Appbar';
import OutlinedCard from './components/ListCard';

function App() {
  const [data, setData] = React.useState(null);

  const getUserData = async () => {
    const response = await fetch('/api');
    const jsonData = await response.json();
    setData(jsonData.message);
  };

  React.useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? 'Loading...' : data}</p>
      </header>
      <ButtonAppBar className="Top" />
      <Typography variant="h1" component="h2" className="Title">
        Personalized Grocery List
      </Typography>
      <OutlinedCard />
    </div>
  );
}

export default App;
