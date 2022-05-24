const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const database = require('./database')

database();

app.get('/',(req,res)=>{
    res.send('HELLOO');
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen('3000', () => {
        console.log('Listening to port 3000');
    })
})