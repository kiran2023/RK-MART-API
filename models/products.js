const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Stock: {
        required: [true, "Required Field"],
        type: Number
    },
    packed: {
        // required: [true, "Required Field"],
        type: String
    },
    category: {
        required: [true, "Required Field"],
        type: String,
        enum: {
            values: ["groceries", "beverages", "household"],
        }
    },
    uniqueId: {
        required: [true, "Required Field"],
        type: Number
    },
    filterValue: {
        required: [true, "Required Field"],
        type: Number
    },
    value: {
        required: [true, "Required Field"],
        type: Number
    },
    image: {
        required: [true, "Required Field"],
        type: String
    },
    alt: {
        required: [true, "Required Field"],
        type: String
    },
    title: {
        required: [true, "Required Field"],
        type: String
    },
    productName: {
        required: [true, "Required Field"],
        type: String
    },
    quantity: {
        required: [true, "Required Field"],
        type: String
    },
    rating: {
        required: [true, "Required Field"],
        type: Array
    },
    ratingAverage: {
        required: [true, "Required Field"],
        type: Number
    },
    originalAmount: {
        required: [true, "Required Field"],
        type: Number
    },
    discounted: {
        required: [true, "Required Field"],
        type: Number
    },
    actualAmount: {
        required: [true, "Required Field"],
        type: Number
    }
});

module.exports = mongoose.model('Product', productSchema);