import minimist from 'minimist';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

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

function remove_grocery(arr, grocery) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if ((arr[i] = grocery)) {
      arr.splice(i, 1);
    }
  }
}

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
  res.status(200);
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.get('/login', (req, res) => {
  res.status(200);
});

app.get('/groceries', (req, res) => {
  res.status(200).json({ groceries: groceries });
});

app.post('/test', (req, res) => {
  res.status(200).send(req.body.grocery);
});

app.post('/add', (req, res) => {
  const grocery = req.body.grocery;
  groceries.push(grocery);
  res.status(200).json({ groceries: groceries });
});

app.post('/remove', (req, res) => {
  const grocery = req.body.grocery;
  remove_grocery(groceries, grocery);
  res.status(200).json({ groceries: groceries });
});

// Returns 404 for any undefined endpoints
app.use((req, res) => {
  res.status(404).send('404 NOT FOUND');
});
