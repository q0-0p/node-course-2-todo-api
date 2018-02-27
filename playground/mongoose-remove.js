const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users')

Todo.remove({}).then((result) =>{
    console.log(result);
});

Todo.findOneAndRemove({_id: '12q1234qq'}).then((todo) =>{
    
})
Todo.findByIdAndRemove('12q1234qq').then((todo) =>{
    console.log(todo);
});