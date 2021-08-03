const mongoose = require('mongoose');
const validator = require('validator');

const bookSchema = mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    MRP: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    genre: {
        type: String,
    },
    yearOfRelease: {
        type: String,
    },
    bookRating: {
        type: String,
        default:"0",
    },
    LenderName:{
        type:String,
    },
    bookID: {
        type: String, 
        default:String(Date.now()),
    },

})

const Book = mongoose.model('books', bookSchema);

module.exports = Book;