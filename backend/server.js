const express = require('express');
const cors = require('cors');
const app = express();

const port = 5555;

app.get('/', (req, res, next) => {
	res.status(200).send(`Hello, world!`);
});

app.use(cors());
app.use(express.json());

console.log(`listening on port ${port}`);

app.listen(5555);
