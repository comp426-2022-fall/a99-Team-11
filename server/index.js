import minimist from 'minimist';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Database from 'better-sqlite3';
// import { add_item, delete_items, list_items, login } from './db_ops';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const args = minimist(process.argv.slice(2));

let port = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

if (args.port) {
  port = args.port;
}

app.use(express.static(path.resolve(__dirname, '../client/build')));

let groceries = [];

// Creation of Database
let db = new Database('./grocery.db');

/* ---------------------------------------------
Creation of table grocery_list
Columns :
id PK and auto increment 
item not null 
will return error as table is already created 
-----------------------------------------------*/

let table =
  'CREATE TABLE grocery_list (\
        id INTEGER PRIMARY KEY AUTOINCREMENT ,\
        item TEXT NOT NULL );';

try {
  db.exec(table);
  console.log('Table created');
} catch (error) {
  console.error(error.message);
}

function remove_grocery(arr, grocery) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === grocery) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
  res.status(200);
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.get('/login', (req, res) => {
  res.status(200);
});

app.post('/login', (req, res) => {
  //  take user_name and passwrod
  // call the function
  //  output=login(user_name,password)
  // if (length(output>1))
  res.status(200);
});

app.get('/groceries', (req, res) => {
  // The db will return all the items so storing it in a variable to render it
  // let list=list_items
  // res.status(200).json({ groceries: groceries });
  let list_items = `select * from grocery_list`;
  try {
    let list = db.prepare(list_items);
    res.status(200).json({ groceries: list.all() });
  } catch (error) {
    console.error(error);
  }
});

app.post('/test', (req, res) => {
  res.status(200).send(req.body.grocery);
});

app.post('/add', (req, res) => {
  const grocery = req.body.grocery;
  //add_item(grocery)
  // groceries.push(grocery);
  // res.status(200).json({ groceries: groceries });
  let add_items_grocery = `INSERT INTO grocery_list (item) values ('${grocery}')`;
  try {
    db.exec(add_items_grocery);
    console.log('Record added successfully');
    let list = db.prepare(`select * from grocery_list`);
    res.status(200).json({ groceries: list.all() });
  } catch (error) {
    console.error(error);
  }
});

app.post('/remove', (req, res) => {
  const grocery = req.body.grocery;
  // delete_items(grocery)
  let delete_items = `Delete from  grocery_list where item = '${grocery}'`;
  try {
    db.exec(delete_items);
    console.log('Item deleted successfully');
    let list = db.prepare(`select * from grocery_list`);
    res.status(200).json({ groceries: list.all() });
  } catch (error) {
    console.error(error.message);
  }
});

// Returns 404 for any undefined endpoints
app.use((req, res) => {
  res.status(404).send('404 NOT FOUND');
});
