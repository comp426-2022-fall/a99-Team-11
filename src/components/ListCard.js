import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import './ListCard.css';
import { Typography } from '@mui/material';

export default function OutlinedCard() {
  const [checked, setChecked] = React.useState([0]);
  const [groceries, setGroceries] = React.useState([]);
  const [curr, setCurr] = React.useState('');

  const onAdd = (tmp) => {
    console.log(tmp);
    setGroceries(prevState);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card className="Items">
        <CardContent>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={(newValue) => setCurr(newValue.target.value)}
          />
          <Button
            size="large"
            onClick={() => setGroceries([...groceries, curr])}
          >
            Add
          </Button>
        </CardContent>
      </Card>
      <Card variant="outlined" className="Items">
        <CardContent>
          <Typography>Your List</Typography>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            {groceries.length == 0
              ? 'No groceries yet!'
              : groceries.map((value) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <ListItem key={value} disablePadding>
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(value)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={value} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
          </List>
        </CardContent>
        <CardActions>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
