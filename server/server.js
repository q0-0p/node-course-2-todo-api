const express = require('express');
const bodyParser=require('body-parser');


const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/users');



var app = express();

app.use(bodyParser.json());



//CRUD

app.post('/todos', (req, res) =>{
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    }, (e) =>{
        res.status(400).send(e);
    });
})


//GET todos/2131289d





app.listen(3000, () =>{
    console.log('Started on port 3000');
});

module.exports = {app};