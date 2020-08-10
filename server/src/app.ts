import express from 'express';

const app = express();
const port = 3000;

app.get('/', (request, response) => {
	response.send('It works!');
});

app.listen(port, error => {
	if(error)
		return console.log(error);

	return console.log(`Server is listening on ${port}`);
});
