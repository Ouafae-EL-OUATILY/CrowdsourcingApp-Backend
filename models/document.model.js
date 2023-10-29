const mongoose = require('mongoose');
const {Schema} = require("mongoose");



const docSchema = new mongoose.Schema({
    translations: [{
        language: {
            type: String,
            default: 'en'
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    file: {
        type: String
    },
    job: {
        type: Schema.Types.ObjectId,
        ref: 'Job'
    }
})


const Document = mongoose.model('Document',docSchema);

module.exports = Document;
