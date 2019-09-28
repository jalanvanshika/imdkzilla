const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;

var db;
MongoClient.connect("mongodb+srv://jalanvanshika:VnjcMpI3K1RjpfZc@cluster0-pt4iq.mongodb.net/test?retryWrites=true&w=majority&authSource=admin", { useNewUrlParser: true, useUnifiedTopology: true },
function(err, client) {
    if (err) {
        return console.log(err);
    }
    else{
        db = client.db();

        // db.collection("users").find({}).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        // });
}});

const app = express();

app.use(bodyParser.json());

app.get("/", function(req, res){
    res.send("HELLO");
});

app.get('/datas', function(req, res) {
    db.collection('users', function(err, collection) {
        collection.find().toArray(function(err, result) {
            res.send(result);
        });
    });
});

app.listen(4000, function(){
    console.log("Server started on port 4000");
});