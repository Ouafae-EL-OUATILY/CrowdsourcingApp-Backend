const mongoose = require('mongoose');
const {Schema} = require("mongoose");



const suggestionSchema = new mongoose.Schema({
    translations: [{
        language: {
            type: String,
            default: 'en'
        },
        textQuestion: {
            type: String
        },
        textResponse: {
            type: String
        },
    }],
    job: {
        type: Schema.Types.ObjectId,
        ref: 'Job'
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // responder: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    suggestionState: {
        type: String,
        default: "active"
    }
},{timestamps: true})

// suggestionSchema.pre(/^find/,function (next){
//     this.populate({
//             path: 'author',
//             select: 'email'
//         })
//     next();
// })




const Suggestion = mongoose.model('Suggestion',suggestionSchema);

module.exports = Suggestion;
