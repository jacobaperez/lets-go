const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const axios = require('axios');
const db = require('./database/index.js');

/* ------------------ SERVER  ------------------ */
let app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* ------------------ ROUTE HANDLING  ------------------ */
app.post('/', (req, res) => {

});

app.get('/', (req, res) => {

});

const port = 6969;
app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});
