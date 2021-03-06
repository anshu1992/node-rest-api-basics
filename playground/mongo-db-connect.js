const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  var db = client.db('TodoApp');  

  if (err) {
    return console.log('Unable to connect to MongoDb server.');
  }

  console.log('Connected to MongoDB server.');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: 'false'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo.', err);
    }
    console.log(JSON.stringify(result.ops), undefined, 2);
  });

  client.close();
});