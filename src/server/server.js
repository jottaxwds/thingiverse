const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// To read env variables from .env file!
require('dotenv').config();

const test = require('./routes/api/test');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.SERVER_PORT || '9001';

// THE CORS KILLER:
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // CORS
  next();
});

app.use('/api/test', test);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
