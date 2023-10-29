const mongoose = require('mongoose');
const User = require('./user.model');
const {Schema} = require("mongoose");


const clientSchema = new mongoose.Schema({
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
        default: 'client'
    },
    Jobs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Job'
        }
    ]
});

// clientSchema.pre(/^find/,function (next){
//     this.populate({
//         path: 'Jobs',
//         select: 'title'
//     });
//     next();
// });



module.exports = User.discriminator('Client',clientSchema);
