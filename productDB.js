const env = require('dotenv');
env.config({ path: './config.env' });

const connectDB = require('./db/connect');
const productSchema = require('./models/products');
const productJson = require('./products.json');

const startDB = async() => {
    try {
        await connectDB(process.env.MONGODB_URL);
        // await productSchema.deleteMany();
        // await productSchema.create(productJson);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}

startDB();