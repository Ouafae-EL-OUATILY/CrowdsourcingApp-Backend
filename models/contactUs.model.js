const mongoose = require('mongoose');



const contactSchema = new mongoose.Schema({
    translations: [{
        language: {
            type: String,
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        subject: {
            type: String
        },
        details: {
            type: String
        }
    }],
    email: {
        type: String,
    },
    objectState: {
        type: String,
        default: "active"
    }
});

contactSchema.pre(/^find/, function (next) {
    this.find({objectState: {$eq: 'active'}});
    next();
});



const Contact = mongoose.model('Contact', contactSchema);


module.exports = Contact;
