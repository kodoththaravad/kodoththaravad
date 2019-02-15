/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var express = require('express');
var app = express();

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("kodothTharavad");

  //phoneNumber

  dbo.collection("memberDetails").find({},).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("kodothTharavad");
  var phoneNum = phoneNumber;
  var query = { phone: phoneNum };
  dbo.collection("memberDetails").find(query).toArray(function myFunction(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});