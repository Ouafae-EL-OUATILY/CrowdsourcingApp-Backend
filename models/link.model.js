const mongoose = require('mongoose');
const {Schema} = require("mongoose");


const linkSchema = new mongoose.Schema({
    translations: [{
        language: {
            type: String,
            default: 'en'
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        }
    }],
    linkPath: {
        type: String
    }
});

const Link = mongoose.model('Link',linkSchema);

module.exports = Link;
