var express = require('express');
var app = express();

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/documentation', (requset, response) => {
  response.sendFile(__dirname + '/documentation.html');
});

app.use('/assets', express.static(__dirname + '/assets'));

app.listen(3000, () => {
  console.log('Working!');
});