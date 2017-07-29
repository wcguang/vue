let express = require('express');
let expressStatic = require('express-static');
let bodyParser = require('body-parser');
let cookieSession = require('cookie-session');
let cookieParser = require('cookie-parser');
let cors = require('cors');
var server = express();
server.use(bodyParser());
server.use(cookieParser())
let mongodb = require('mongodb');
var mongoCt = mongodb.MongoClient;
server.use(cors({
    origin: ['http://localhost:8080'],
    method: ['GET', 'POST'],
    alloweHeaders: ['Content-Type', 'Authorization']
}));
server.use('/list', function(req, res) {
    mongoCt.connect('mongodb://localhost:27017/cook', function(err, db) {
        var con = db.collection('list')
        con.find().toArray(function(err, result) {
            // console.log(result)
            res.send(result)
        })
    })
})
server.use('/listimg', function(req, res) {
    mongoCt.connect('mongodb://localhost:27017/cook', function(err, db) {
        var con = db.collection('list_img')
        con.find().toArray(function(err, result) {
            // console.log(result)
            res.send(result)
        })
    })
})
server.use('/enter', function(req, res) {
    // console.log(res.body)
    mongoCt.connect('mongodb://localhost:27017/cook', function(err, db) {
        var con = db.collection('list')
        con.find().toArray(function(err, result) {
            // console.log(result)
            // res.send(result)
                console.log(res.body)
        })
    })
})

server.listen(8001, function() {
    console.log('loading....')
})
