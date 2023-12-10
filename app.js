const cors = require('cors');

const express = require('express');
const app = express();
const products_route = require('./routes/productRoutes');

var corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PUT, PATCH, DELETE, HEAD',
    credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json());

app.use('/', products_route);

module.exports = app;
