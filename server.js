// Start Server
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});
const app = require('./app');


const dataBase = process.env.DATABASE;
const port = process.env.PORT;

mongoose.connect(dataBase,()=> {
    console.log('Connected');
});


app.listen(port,()=>{
    console.log(`App Running in port ${port}`);
});
