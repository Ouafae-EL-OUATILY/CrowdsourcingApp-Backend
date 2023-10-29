const mongoose = require('mongoose');
const User = require('./user.model');
const {Schema} = require("mongoose");


const adminSchema = new mongoose.Schema({
    translations: [{
        language: {
            type: String,
            default: 'en'
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    }],
    role: {
        type: String,
        default: 'admin'
    },
});




module.exports = User.discriminator('Admin',adminSchema);
