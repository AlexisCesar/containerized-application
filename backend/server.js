const express = require('express');
const cors = require('cors');
const app = express();

const port = 5555;

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
	res.status(200).send(`Hello, world!`);
});

console.log(`listening on port ${port}`);

app.listen(5555);
