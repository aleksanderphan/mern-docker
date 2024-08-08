const express = require('express');
const connectDB = require('./db');
const routes = require('./routes/books');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// use the cors middleware with the
// origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as a middleware
// for the router path
app.use('/', routes);

// Connect Database
connectDB();

const port = process.env.PORT || 8082;
app.listen(port, '0.0.0.0', () =>
  console.log(`Server running on port ${port}`)
);
