const mongoose = require('mongoose');

const Member = mongoose.model('member', {
    nama: {
        type: String,
        required: true,
    },
    nik: {
        type: String,
        required: true,
    },
    alamat: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

module.exports = Member;