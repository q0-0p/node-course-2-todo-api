//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //5a8c6bd002b305c3c5a390e0
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a8c6bd002b305c3c5a390e0')
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a8c721302b305c3c5a39447')
    }, {
        $inc:{
            age: 1
        },
        $set:{
            name: "Yousif"
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    })





    //db.close();
});