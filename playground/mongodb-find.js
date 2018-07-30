const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

const uri = "mongodb+srv://kwlai0927:aaaa8888@clusterfree-msnlo.mongodb.net/TodoApp?retryWrites=true"

MongoClient.connect(uri, (err, client) => {

    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db("TodoApp")

    db.collection('Todos').find({
        _id:  new ObjectID('5b5ecb3055acad02eca995d1')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    client.close();
});