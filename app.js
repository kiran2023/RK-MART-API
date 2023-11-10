const express = require('express');
const app = express();
const products_route = require('./routes/productRoutes');

app.get('/', (request, response)=>{
    response.status(200).send({
        MESSAGE: "STARTED"
    })
});

app.use('/api/products', products_route);

module.exports = app;