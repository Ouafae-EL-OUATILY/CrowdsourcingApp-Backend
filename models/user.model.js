const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const validator = require('validator');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true,'Email Already Used'],
        lowercase: true
    },
    phoneNumber: {
        type: String,
        unique: [true,'Phone Number Already Used']
    },
    image: {
      type: String
    },
    password: {
        type: String,
        required: true,
    },
    passwordConfirm: {
        type: String,
        required: true,
        validate: {
            // Only Works on Save
            validator: function(el){
                return el === this.password;
            },
            message: 'Passwords are not the same'
        }
    },
    objectState: {
        type: String,
        default: "active"
    },
    address: {
        type: String,
    },
    city: {
        type: String
    },
    country: {
        type: String
    }
}, {timestamps: true});


userSchema.pre('save',async function(next){
    // if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password,12);

// delete passwordConfirm
    this.passwordConfirm = undefined;
    next();
});



const User = mongoose.model('User', userSchema);

module.exports = User;
