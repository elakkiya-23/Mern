const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

//MongoDB Connection

const mongoURI = 'mongodb+srv://elakkiyacdeloitte:Elakkiya@cluster0.kz1ct.mongodb.net/';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongodb connected.....'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Connected to Mongodb');
});

app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, uname: 'Elakkiya' },
        { id: 2, uname: 'C' }
    ]
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});