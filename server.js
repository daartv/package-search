var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  PackageModel = require('./api/models/packageSearchModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/packageSearch', { useNewUrlParser: true, useUnifiedTopology: true });

const dbCheck = async function () {
  const db = await mongoose.connection.db;
  const dbname = db.databaseName;
  console.log(`connected to Database: ${dbname}`);
};

mongoose.connection.on('connected', async () => {
    console.log('Mongoose connected!');
    dbCheck();
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/packageSearchRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('package search RESTful API server started on: ' + port);