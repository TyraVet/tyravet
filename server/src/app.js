const express = require('express');

/* Defining port */
const port = process.env.PORT || 3000;
/* Defining app */
const app = express();

app.get('/', (request, response) => {
	response.send('Server running');
});

app.listen(port, error => {
	if(error)
		return console.log(error);

	return console.log('Server is listening on ${port}');
});

module.exports = app;
