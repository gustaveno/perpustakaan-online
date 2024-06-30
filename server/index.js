require('./utils/database');

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')

const members = require('./routes/Member');
const books = require('./routes/Book');
const loans = require('./routes/Loan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/members', members)
app.use('/books', books)
app.use('/loans', loans)

app.listen(port, () => {
  console.log(`Library App | listening at http://localhost:${port}`);
})
