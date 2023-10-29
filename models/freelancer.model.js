const mongoose = require('mongoose');
const User = require('./user.model');
const {Schema} = require("mongoose");


const freelancerSchema = new mongoose.Schema({
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
        },
        expertise: {
            type: String
        },
        bio: {
            type: String
        }
    }
    ],
    role: {
        type: String,
        default: 'freelancer'
    },
    hourlyRate: {
        type: Number
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
});

freelancerSchema.pre(/^find/, function (next) {
    this.find({objectState: {$eq: 'active'}});
    next();
});

freelancerSchema.pre(/^find/,function (next){
    this.populate({
        path: 'reviews',
        select: 'score'
    });
    next();
});
const Freelancer =  User.discriminator('Freelancer',freelancerSchema);


module.exports = Freelancer;

// get random number from array
