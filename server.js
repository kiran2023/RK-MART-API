const env = require('dotenv');
env.config({ path: './config.env' });

const app = require('./app');
const connectDB = require('./db/connect');
const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log("Server Started and Listening");
        });
    } catch (error) {
        console.log(error);
    }
}

startServer();