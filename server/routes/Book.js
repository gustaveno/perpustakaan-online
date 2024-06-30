const express = require('express');
const router = express.Router();

const Book = require('../model/book')

router.get('/', (req, res) => {
    Book.find()
        .then((Book) => {
            res.status(200).json(Book);
        })
        .catch(err => console.log(err));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Book.findOne({ _id: id })
        .exec()
        .then((Book) => {
            res.status(200).json(Book);
        })
        .catch(err => console.log(err));
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Book.deleteOne({ _id: id })
        .exec()
        .then(result => { res.status(200).json(result) })
        .catch(err => {
            console.log(err);
            res.status(500).json(result)
        });
});

module.exports = router;