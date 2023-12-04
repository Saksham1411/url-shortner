const express = require('express');
const app = express();
const PORT = 5000;

const urlRoute = require('./routes/url');
const {connectDB} = require('./connect');

//middleware
app.use(express.json());

//Routes
app.use('/url',urlRoute);


const start = async()=>{
    try {
        await connectDB("mongodb://127.0.0.1:27017/short-url");
        app.listen(PORT,()=> console.log('server is running...'));
    } catch (error) {
        console.log(error);
    }
}

start();