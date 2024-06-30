const express = require('express');
const router = express.Router();

const Loan = require('../model/loan')

router.post('/:nomerid/:idbuku/:nik/:tglpinjam/:status', (req, res) => {

    console.log('datanya', req);

    const loan = new Loan({
        nomerid: req.params.nomerid,
        idbuku: req.params.idbuku,
        nik: req.params.nik,
        tglpinjam: req.params.tglpinjam,
        status: req.params.status,
    });
    loan.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));
    res.status(201).json({ success: true, message: 'Berhasil insert data!' });

});

router.get('/', (req, res) => {
    Loan.find()
        .then((loan) => {
            res.status(200).json(loan);
        })
        .catch(err => console.log(err));
});

router.get('/:nomerid', (req, res) => {
    const nomerid = req.params.nomerid;
    Loan.findOne({ nomerid: nomerid })
        .exec()
        .then((loan) => {
            res.status(200).json(loan);
        })
        .catch(err => console.log(err));
});


router.delete('/:nomerid', (req, res) => {
    const nomerid = req.params.nomerid;
    Loan.deleteOne({ nomerid: nomerid })
        .exec()
        .then(result => { res.status(200).json(result) })
        .catch(err => {
            console.log(err);
            res.status(500).json(result)
        });
});

module.exports = router;