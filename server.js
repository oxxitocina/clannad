const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dbConfig = require('./app/config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

const UserRoute = require('./app/routes/User')
app.use('/user',UserRoute)


app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});


app.use(express.static('app'))
app.use(express.static(__dirname+'app/public/css'))
app.use(express.static(__dirname+'app/public/img'))

app.set('views', './app/views')
app.set('view engine', 'ejs')

  app.get("/", function(req, res) {  
    res.render('index');
  });
  app.get("/menu", function(req, res) {  
    res.render('products');
  });
  app.get("/about", function(req, res) {  
    res.render('history');
  });
  app.get("/login", function(req, res) {  
    res.render('login');
  });
  app.get("/registration", function(req, res) {  
    res.render('register');
  });
  app.get("/cart", function(req, res) {  
    res.render('showcart');
  });
  app.get("/admin", function(req, res) {  
    res.render('adminlogin');
  });
