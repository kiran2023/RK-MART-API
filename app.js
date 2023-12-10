const express = require('express');
const app = express();
const products_route = require('./routes/productRoutes');

app.use('/', products_route);

module.exports = app;
