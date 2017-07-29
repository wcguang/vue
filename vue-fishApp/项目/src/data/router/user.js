let express = require('express');
let mongodb = require('mongodb');
var mongoCt = mongodb.MongoClient;
var router = express.Router()
router.get('/', function(req, res) {
    mongoCt.connect('mongodb://localhost:27017/app', function(err, db) {
        var con = db.collection('user');
        console.log(req.cookies)
        if (req.cookies.name) {
            con.find({ username: req.cookies.name }).toArray(function(err, result) {
                // console.log(req.cookies.name)
                console.log(result[0].username)
                res.send(result[0].username);
                // res.send(req.cookies.name);
            })
        }else{
        	res.send('cookie不存在 ')
        }
    })
})
module.exports = router;
