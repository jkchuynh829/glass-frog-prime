'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname + './../client/public/')));

app.get('/dogood', (req, res) => {
  res.render('/index.html');
});

app.get('/', (req, res) => {
  res.render('/signin.html');
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
