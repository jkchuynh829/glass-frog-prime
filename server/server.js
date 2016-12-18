'use strict';

const express = require('express');
const path = require('path');
const webpack = require('webpack');
const config = require('')

const app = express();

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname + './../src')));

app.get('/', (req, res) => {
  const index = path.resolve(__dirname + './../src/client/index.html');
  console.log('SERVE', index);
  res.render(index);
});

app.listen(8080, () => console.log('Server running on 8080...'));