const mongoose = require('mongoose');

const Loan = mongoose.model('loan', {
    nomerid: {
        type: String,
        required: true,
    },
    idbuku: {
        type: String,
        required: true,
    },
    nik: {
        type: String,
        required: true,
    },
    tglpinjam: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});

module.exports = Loan;