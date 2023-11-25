//? productModel is model with various methids with it where find(), findById etc.. can be used in order to perform some actions.
//! --> Link : https://mongoosejs.com/docs/queries.html

const productModel = require('../models/products');

const getAllProducts = async (request, response) => {
    let { category, productName, ratingAverage, currentPrice, sort, select } = request.query;

    let updatedProductRequiredData = {}

    if(category){
        updatedProductRequiredData.category = {$regex: category, $options:"i"}
    }
    if(productName){
        updatedProductRequiredData.productName = {$regex: productName, $options:"i"}
    }
    if(ratingAverage){
        updatedProductRequiredData.ratingAverage = ratingAverage
    }
    if(currentPrice){
        updatedProductRequiredData.currentPrice = currentPrice
    }

    let updatedData = productModel.find(updatedProductRequiredData);

    if(sort){
        let sortData = sort.replaceAll(","," ");
        updatedData = updatedData.sort(sortData);
    }

    if(select){
        let selectedData = select.replaceAll(","," ");
        updatedData = updatedData.select(selectedData);
    }

    let page = Number(request.query.page)||1;
    let limit = Number(request.query.limit)||30;

    let displayProductsPerPage = (page-1) * limit;

    updatedData = updatedData.skip(displayProductsPerPage).limit(limit);

    let allProducts = await updatedData;
    response.status(200).json({
        allProducts
    });
}

module.exports = { getAllProducts }
