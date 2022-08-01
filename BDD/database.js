var apprenant=require("./models/models.js");
const mysql = require('mysql');
var app=require("../app");
const db = mysql.createConnection({
    host: "localhost",
 
    user: "root",
 
    password: "",
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  });
  
module.exports=db;