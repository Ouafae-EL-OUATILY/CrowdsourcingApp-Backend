const mongoose = require('mongoose');
const Client = require('./client.model');
const Freelancer = require('./freelancer.model');
const {Schema} = require("mongoose");


const reviewSchema = new mongoose.Schema({
    // translations: [{
    //     language: {
    //         type: String,
    //         default: 'en'
    //     },
        title: {
            type: String,
        },
        commentary :{
            type: String
        },
    // }],
    score: {
        type: Number,
        min:1,
        max:5
    },
    createdAt: {
      type: Date,
        default:  Date.now()
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: 'Client'
    },
    freelancer: {
        type: Schema.Types.ObjectId,
        ref: 'Freelancer'
    }
},{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

reviewSchema.pre(/^find/,function (next){
    this.populate({
        path: 'client',
        select: ['translations.firstName','translations.lastName'],
    })
    next();
})

const Review = mongoose.model('Review',reviewSchema);

module.exports = Review;
