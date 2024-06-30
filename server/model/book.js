const mongoose = require('mongoose');

const Book = mongoose.model('books', {
    _id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    },
    pageCount: {
        type: Number,
        required: true,
    },
    publishedDate: {
        type: Date,
        required: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
    },
    longDescription: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    authors: {
        type: [{}]
    },
    categories: {
        type: [{}]
    }
});

module.exports = Book;