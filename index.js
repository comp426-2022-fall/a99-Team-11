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

let groceries = [];

function remove_grocery(arr, grocery) {
	for(let i = arr.length - 1; i >= 0; i--){
		if(arr[i] = grocery){
			arr.splice(i, 1);
		}
	}
}

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../public', "index.html"));	
	res.status(200);
});

app.get('/login', (req, res) => {
	res.status(200);

});

app.post('/add', (req, res) => {
	const grocery = req.body.grocery;
	groceries.push(grocery);
	res.status(200).json({"groceries": groceries});
});

app.post('/remove', (req, res) => {
	const grocery = req.body.grocery;
	remove_grocery(groceries, grocery);	
	res.status(200).json({"groceries": groceries});
});





// Returns 404 for any undefined endpoints
app.use((req, res) => {
        res.status(404).send("404 NOT FOUND");
});



app.listen(port, () =>{
        console.log("Listening on port " + port);
});
