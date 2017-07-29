let express = require('express');
let mongodb = require('mongodb');
var mongoCt = mongodb.MongoClient;
var router = express.Router()
router.get('/', function(req, res) {
    mongoCt.connect('mongodb://localhost:27017/app', function(err, db) {
        var con = db.collection('list');
        con.find().toArray(function(err, result) {
            // console.log(result)
            res.send(result);
        })
    })
})
module.exports=router;