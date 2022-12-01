import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import minimist from 'minimist';
import express from 'express';
import path from 'path';

const args = minimist(process.argv.slice(2));

ReactDOM.render(<App />, document.getElementById('root'));

let port = 5000;

if(args.port){
        port = args.port;
}


const app = express();
app.use(express.static('public'));



app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));	
	res.status(200);
});

app.get('/login', (req, res) => {
	res.status(200);

});

app.post('/add', (req, res) => {
	const grocery = req.body.grocery;
});

app.post('/removed', (req, res) => {
	const grocery = req.body.grocery;
});





// Returns 404 for any undefined endpoints
app.use((req, res) => {
        res.status(404).send("404 NOT FOUND");
});



app.listen(port, () =>{
        console.log("Listening on port " + port);
});
