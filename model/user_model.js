const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    imageUrl: {
        type: String,
        default: "a"
    },

    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not a valid Email")
            }
        }
    },

    password: {
        type: String,
        required: true
    },

    rating: {
        type: String,
        default: "0"
    },

    phNo:{
        type:String,
        required: true,
        
    },
    address:{
        type:String,
    },
    country:{
        type:String,
    },
    zipcode:{
        type:String,
    },
    student:{
        type: Boolean,
        required: true,
    },
    classs:{
        type:String,
    },
    borrowed: [{type: String}], 
    lended: [{type: String}],


})

const User = mongoose.model('users', userSchema);

module.exports = User;