//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


//this link can be amazon web services, heroku services, etc
// for now, it's local website
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false

    // }, (err, result) =>{
    //     if(err){
    //         return console.log('Unable to insert todo ', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //insert new doc into Users (name, age, location) insert using insertOne
    // db.collection('Users').insertOne({
    //     name:'Yousif',
    //     age: 25,
    //     location: 'Canada',
    //     completed: false

    // }, (err, result) =>{
    //     if(err){
    //         return console.log('Unable to insert user ', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    db.close();
});