const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const {username, password} = req.body;
    res.json({requestData:{username, password}});
});

app.listen(4000); 

// connection string 
// mongodb+srv://nwHacks:ilovehackathons25@nwhacks.2bl0d.mongodb.net/?retryWrites=true&w=majority&appName=nwHacks