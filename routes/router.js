var express = require('express');
var router = express.Router();
var bodyparser=require('body-parser');
var urlencodeParser=bodyparser.urlencoded({extended:false});
var message="veuillez completer tous les champs svp";
var apprenant=require('../BDD/models/models.js');
var db=require("../BDD/database");

router.get('/', function(req, res, next) {
  db.query("CREATE DATABASE IF NOT EXISTS d_clic;");
  db.query("USE d_clic");
  db.query("SELECT * FROM apprenant WHERE 1",(err,res1)=>{
    if(err){throw err;}
    else{
      // console.log(res1)
      res.status(200).render('index', { title: 'D_CLIC',res1});
    }
  })
});

router.get('/contact', function(req, res, next) {
  db.query("CREATE DATABASE IF NOT EXISTS d_clic;");
  db.query("USE d_clic");
  db.query("SELECT * FROM apprenant WHERE 1",(err,res1)=>{
    if(err){throw err;}
    else{
      console.log(res1)
      res.status(200).render('contact', { title: 'D_CLIC',res1});
    }
  })
});

router.get('/marketing', function(req, res, next) {
  db.query("CREATE DATABASE IF NOT EXISTS d_clic;");
  db.query("USE d_clic");
  db.query("SELECT * FROM `apprenant` ORDER BY `apprenant`.`note` DESC",(err,res1)=>{
    if(err){throw err;}
    else{
      // console.log(res1)
      res.status(200).render('marketing', { title: 'D_CLIC',res1});
    }
  })
});


router.get('/uxui', function(req, res, next) {
  db.query("CREATE DATABASE IF NOT EXISTS d_clic;");
  db.query("USE d_clic");
  db.query("SELECT * FROM `apprenant` ORDER BY `apprenant`.`note` DESC",(err,res1)=>{
    if(err){throw err;}
    else{
      // console.log(res1)
      res.status(200).render('uxui', { title: 'D_CLIC',res1});
    }
  })
});

router.get('/frontend', function(req, res, next) {
  db.query("CREATE DATABASE IF NOT EXISTS d_clic;");
  db.query("USE d_clic");
  db.query("SELECT * FROM `apprenant` ORDER BY `apprenant`.`note` DESC",(err,res1)=>{
    if(err){throw err;}
    else{
      // console.log(res1)
      res.status(200).render('frontend', { title: 'D_CLIC',res1});
    }
  })
});

router.get('/signup', function(req, res, next) {
  db.query("CREATE DATABASE IF NOT EXISTS d_clic;");
  db.query("USE d_clic");
  db.query("SELECT * FROM apprenant WHERE 1 ",(err,res1)=>{
    if(err){throw err;}
    else{
      // console.log(res1)
      res.status(200).render('signup', { title: 'D_CLIC',res1});
    }
  })
});

router.get('/backend', function(req, res, next) {
  db.query("CREATE DATABASE IF NOT EXISTS d_clic;");
  db.query("USE d_clic");
  db.query("SELECT * FROM `apprenant` ORDER BY `apprenant`.`note` DESC ",(err,res1)=>{
    if(err){throw err;}
    else{
      // console.log(res1)
      res.status(200).render('backend', { title: 'D_CLIC',res1});
    }
  })
});

module.exports = router;

router.post('/contact', urlencodeParser,function(req, res) {
 if(req.body.firstname !=""&& req.body.lastname !=""&& req.body.note!="" && req.body.avis !="" && req.body.note>-1 && req.body.note<6){
    var user=new apprenant(req.body.firstname,req.body.lastname,req.body.avis ,req.body.note,req.body.formation);
    db.query("CREATE DATABASE IF NOT EXISTS d_clic;");
    db.query("USE d_clic");
    db.query("CREATE TABLE IF NOT EXISTS apprenant  (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,firstname VARCHAR(255),lastname VARCHAR(255),avis TEXT,note int, formation VARCHAR(255))")
    let sql='INSERT INTO apprenant SET ?';
    db.query(sql,user,(err,resl)=>{
      if(err){throw err;}
      else{
        // console.log(resl);
        res.redirect("/");
      }
    });
 }else{
  res.render("contact",{message});
 }
});






