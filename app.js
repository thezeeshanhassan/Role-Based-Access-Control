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
    await mongoose.connect(`mongodb://127.0.0.1:27017/rbac`);
}

app.get(`/`, (req, res) => {
    res.send(`Working on the PORT ${port}`);
})

// app.get('/adduser', async (req, res) => {
//         let password = "hamza@125";
//         let newUser = new User({
//             username: "hamza",
//             role: "employee" 
//         });
        
//         User.register(newUser, password, (err) => {
//             if (err) {
//               console.log(err);
//               return res.status(500).json({ error: err.message });
//             }
//             res.send(newUser);
//           });
// });

app.get('/login', (req ,res) => {
    res.send("Working on Login")
})


let port = 8000;
app.listen(port, () => {
    console.log(`App is Listening on the Port : ${port}`);
})

