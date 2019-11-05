require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use('*', (request, response) => {
    response.send('Sorry that does not exist');
});

app.get('/hello', (request, response) => {
    response.status(200).send('hello');
});

app.listen(PORT, () => {
    console.log('Listening');
});