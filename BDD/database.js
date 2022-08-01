require("dotenv").config();
var apprenant=require("./models/models.js");
const mysql = require('mysql');
var app=require("../app");

const db = mysql.createConnection({
    host: process.env.HOST,
 
    user: process.env.USER,
 
    password: process.env.PASSWORD,
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  });
  
module.exports=db;