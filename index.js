const express = require("express");
const { default: mongoose } = require("mongoose");
const fileUpload = require('express-fileupload')
const app = express();
const UserController = require('./controllers/UserController')
const database = require('./database')

database();

app.set('view engine','ejs');
app.use(express.json())
app.use(fileUpload());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home');
})

app.post('/add', UserController.addUser);

app.get('/all',UserController.showAll)

app.post('/:id/delete',UserController.delUser);

// app.post('/:id/update',UserController.delUser);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen('3000', () => {
        console.log('Listening to port 3000');
    })
})