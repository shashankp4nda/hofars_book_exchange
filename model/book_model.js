const mongoose = require('mongoose');
const validator = require('validator');

const bookSchema = mongoose.Schema({
    title: {
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
    }
})

const Book = mongoose.model('books', bookSchema);

module.exports = Book;