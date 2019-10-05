const express = require('express');
const app = express()

app.get('/', (req, res) => res.send('This Is Simple Node Js Dockerized Application.'));

app.listen(3030, () => {
console.log('Rest API is running on port 3030!');
});