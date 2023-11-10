const express = require('express');
const controllers = require('../controllers/productControllers')

const router = express.Router();
const product_controller = require('../controllers/productControllers')

router.route('/').get(product_controller.getAllProducts);

module.exports = router;
