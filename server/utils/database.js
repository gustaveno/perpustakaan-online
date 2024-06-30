const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://veno:apik1234@cluster0.mfweyez.mongodb.net/pps?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// const member1 = new Member({
//     nama: 'Adi Husada',
//     nik: '3525015201880001',
//     alamat: '3525015201880001',
//     email: 'husada@yahoo.com',
// });

// member1.save().then((member) => console.log(member));