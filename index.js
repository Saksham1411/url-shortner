const express = require('express');
const path = require('path');
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');
const { connectDB } = require('./connect');

const app = express();
const PORT = 5000;

app.set("view engine", "hbs");
app.set("views", path.resolve("./views"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/url', urlRoute);
app.use('/user',userRoute);
app.use('/', staticRoute);


const start = async () => {
    try {
        await connectDB("mongodb://127.0.0.1:27017/short-url");
        app.listen(PORT, () => console.log('server is running...'));
    } catch (error) {
        console.log(error);
    }
}

start();