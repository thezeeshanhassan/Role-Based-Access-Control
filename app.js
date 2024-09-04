const express = require('express');
const path = require('path');
const User = require('./models/user');
const mongoose = require('mongoose');

const app = express();


main().then(() => {
    console.log("Connected to Database");
}).catch ((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect(`mongodb://127.0.0.1:27017/wanderLust`);
}

app.get(`/`, (req, res) => {
    res.send(`Working on the PORT ${port}`);
})

app.get('/adduser', async (req, res) => {
    
        let newUser = new User({
            username: "zeeshan",
            password : "zeeshan125",
            role: "manager" 
        });
        await newUser.save();
        res.status(200).send(newUser);
});


let port = 8000;
app.listen(port, () => {
    console.log(`App is Listening on the Port : ${port}`);
})

