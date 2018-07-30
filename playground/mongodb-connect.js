const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

const uri = "mongodb+srv://kwlai0927:aaaa8888@clusterfree-msnlo.mongodb.net/TodoApp?retryWrites=true"

MongoClient.connect(uri, (err, client) => {

    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db("TodoApp")

    // db.collection("Todos").insertOne({
    //     text: 'Something to do'
    //     , completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to inser todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    

    db.collection("Users").insertOne({
        name: 'Lavend'
        , age: 27
        , location: 'Taiwan'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to inser todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});