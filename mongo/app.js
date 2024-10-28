const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/Users.js');
const app = express();
const PORT = 3000;

app.use(express.json());

//MongoDB Connection

const mongoURI = 'mongodb+srv://elakkiyacdeloitte:Elakkiya@cluster0.kz1ct.mongodb.net/testDB?retrywrites=true&w=majority';
mongoose.connect(mongoURI)
    .then(() => console.log('Mongodb connected.....'))
    .catch(err => console.log(err));



app.get('/', (req, res) => {
    res.send('Connected to Mongodb');
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.join(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/api/users', async (req, res) => {
    try {
        const userData = req.body;
        const user = await User.create(userData);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).send(err);
    }
})
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});