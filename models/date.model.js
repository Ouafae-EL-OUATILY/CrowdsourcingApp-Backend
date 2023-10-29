const mongoose = require('mongoose');


const dateSchema = new mongoose.Schema({
    createdAt:{
        type: Date
    },
    postedAt:{
        type: Date
    },
    archivedAt:{
        type: Date
    },
    updatedAt:{
        type: Date
    },
})


const date = mongoose.model('date',dateSchema);

module.exports = date;
