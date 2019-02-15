var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("kodothTharavad");
  var myobj = { name: "Mithun", address: "Alackuzhi House, PO Bare, Kasaragod", phone: "+919496148548" };
  dbo.collection("memberDetails").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});