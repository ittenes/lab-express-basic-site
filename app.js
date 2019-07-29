const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.get('/about', (request, response, next) => {
  response.sendFile(`${__dirname}/views/about.html`);
});

app.get('/project', (request, response, next) => {
  response.sendFile(`${__dirname}/views/project.html`);
});


app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
