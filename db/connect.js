const mongoose = require('mongoose');

const connectDB = (URI) => {
    console.log("Connected DB")
    return mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connectDB;