const express = require('express');
const bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/users');



var app = express();

app.use(bodyParser.json());



//CRUD

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
})


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e);
    })
});

//GET todos/2131289d
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // var id = '5a8c906b33f7efc15aeab16a';


    //validate ID is correct using isValid
    //respond with 404 if its not found - send back empty body (send())
    if (!ObjectID.isValid(id)) {
       return res.status(404).send();
    }
//findById using the id param
    //success
    //if todo - send it back
    //if no todo - send back 404 with empty body
    

    Todo.findById(id).then((todo) =>{
        if(!todo){
            return res.status(404).send();
        }

        res.send({ todo });
    }).catch((e) => {
        res.status(400).send();
    })


    //error
    //400 - send() empty body back
});




app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = { app };