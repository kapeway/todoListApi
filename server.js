var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');

console.log('Initialized express');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {
  useMongoClient: true,
  /* other options */
}); 

console.log('Established database connection');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log('initialing json parsing');

var routes = require('./api/routes/todoListRoutes');
routes(app);



app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
