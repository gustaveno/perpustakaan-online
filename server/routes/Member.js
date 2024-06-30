const express = require('express');
const router = express.Router();

const Member = require('../model/member')

router.post('/', (req, res) => {

    console.log('datanya', req.body);

    const member = new Member({
        nama: req.body.nama,
        nik: req.body.nik,
        alamat: req.body.alamat,
        email: req.body.email,
    });
    member.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));
    res.status(201).json({ success: true, message: 'Berhasil insert data!' });

});

router.get('/', (req, res) => {
    Member.find()
        .then((member) => {
            res.status(200).json(member);
        })
        .catch(err => console.log(err));
});

router.get('/:nik', (req, res) => {
    const nik = req.params.nik;
    Member.findOne({ nik: nik })
        .exec()
        .then((member) => {
            res.status(200).json(member);
        })
        .catch(err => console.log(err));
});

router.put('/:nik', (req, res) => {
    const nik = req.params.nik;
    Member.updateOne({ nik: nik }, {
        nama: req.body.nama,
        nik: req.body.nik,
        alamat: req.body.alamat,
        email: req.body.email,
    }).exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
});

router.delete('/:nik', (req, res) => {
    const nik = req.params.nik;
    Member.deleteOne({ nik: nik })
        .exec()
        .then(result => { res.status(200).json(result) })
        .catch(err => {
            console.log(err);
            res.status(500).json(result)
        });
});

module.exports = router;