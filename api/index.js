const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
const secret = "asdsjahdsiadsajhdsa";

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://nwHacks:ilovehackathons25@nwhacks.2bl0d.mongodb.net/?retryWrites=true&w=majority&appName=nwHacks'); 

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({
            username, 
            password:bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch(e) {
        console.log(e);
        res.status(400).json(e);
    }
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;

    const userDoc = await User.findOne({username:username});
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
        jwt.sign({username, id: userDoc._id}, secret, {}, (err, token)).then();
        if (err) throw err; 
        res.cookie('token', token).json("ok");
    } else {
        res.status(400).json("Wrong credentials");
    }

 })

app.listen(4000); 

// connection - string 
// mongodb+srv://nwHacks:ilovehackathons25@nwhacks.2bl0d.mongodb.net/?retryWrites=true&w=majority&appName=nwHacks