'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const db = require('./../database/database.js');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname + './../client/public/')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('/index.html');
});

// CRUD
app.post('/manage', db.create);
app.get('/manage', db.read);
// app.put('/manage', db.udpate); 
// app.delete('/manage', db.delete);


app.listen(PORT, () => console.log(`Server running on ${PORT}`));
