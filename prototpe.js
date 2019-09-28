const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb+srv://user:imdkzilla@cluster0-pt4iq.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true },
function(err, client) {
    const db = client.db(test);

    db.collection("users").insertOne(
        {
            name: "Alice",
            age: 20
        },

    function(err){
        if (err) {
            return console.log(err);
        }

        console.log("Inserted");
    }
  );
});
const app = express();

app.use(bodyParser.json());

app.get("/", function(req, res){
    res.send("HELLO");
});

app.post("/write", function(req, res){
    const text = req.body.text;
    fs.writeFile("temp.txt", text, function(err){
        if (err) {
            res.status(500).json({success: false});
        }
        else {
            res.json({success: true});
        }

    });


    
});

app.listen(4000, function(){
    console.log("Server started on port 4000");
});