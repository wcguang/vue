let express=require('express');
let expressStatic=require('express-static');
let bodyParser=require('body-parser');
let cookieSession=require('cookie-session');
let cookieParser=require('cookie-parser');
let cors=require('cors');
let mongodb=require('mongodb');
var mongoCt=mongodb.MongoClient;
var server=express();
server.use(bodyParser());
server.use(cookieParser())

// mongoCt.connect('mongodb://localhost:27017/app',function(err,db){
// 	var con=db.collection('list');
// 	con.find().toArray(function(err,result){
// 		console.log(result)
// 	})
// })

server.use(cors({
	origin:['http://localhost:8090'],
	method:['GET','POST'],
	alloweHeaders:['Content-Type', 'Authorization']
}));
server.use('/login',require('./router/login.js'));
server.use('/user',require('./router/user.js'));
server.use('/reg',require('./router/reg.js'));
server.use('/list',require('./router/list.js'));
server.listen(8080,function(){
	console.log('loading....')
})
