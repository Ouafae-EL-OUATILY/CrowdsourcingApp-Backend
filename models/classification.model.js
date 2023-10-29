const mongoose = require('mongoose');


// further research
const classificationSchema = new mongoose.Schema({
    translations: [{
        language: {
            type: String,
            default: 'en'
        },
        category: {
            type: String
        },
        subCategory: {
            type: String
        }
    }]
})

const Classification = mongoose.model('Classification',classificationSchema);


module.exports = Classification;



