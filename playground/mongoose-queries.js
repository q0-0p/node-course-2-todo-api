const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users')
// var id = '5a8c906b33f7efc15aeab16a';
var id = '5a8c7bb00534ad624a8bc14a';

User.findById(id).then((user)=>{
    if(!user){
        return console.log('Id not found');
    }
    console.log( user)
    console.log(JSON.stringify(user,undefined,2))
}).catch((e) => console.log(e));



// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }




// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos', todos);
// });


// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log('Todos', todo);
// });


// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo)
// }).catch((e) => console.log(e));


