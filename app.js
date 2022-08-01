require("dotenv").config();
var express = require('express');
var path = require('path');
var routers = require('./routes/router');
var app = express();
var bd=require("./BDD/database")
var port=process.env.PORT;

// parametrer le view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());

// extraction des données du formulaire
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('/stylesheets',path.join(__dirname, 'public/stylesheets'));
app.set('/images',path.join(__dirname, 'public/images'));
app.set('/javascripts',path.join(__dirname, 'public/javascripts'));
app.use('/', routers);
app.use('/index', function (req, res, next) { 
  console.dir(req.originalUrl) 
  console.dir(req.baseUrl)
  console.dir(req.path) 
  next()
})


app.listen(port,()=>{
  console.log(`server on port ${port}`)
});

bd.query("CREATE DATABASE IF NOT EXISTS d_clic;");
bd.query("USE d_clic");
bd.query("CREATE TABLE IF NOT EXISTS apprenant  (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,firstname VARCHAR(255),lastname VARCHAR(255),avis TEXT,note int, formation VARCHAR(255))")
module.exports=app;