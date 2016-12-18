'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname + './../src/client')));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));