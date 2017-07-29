let express=require('express');
let mongodb=require('mongodb');
let mongoCt=mongodb.MongoClient;
let router=express.Router();
router.get('/',function(req,res){
	mongoCt.connect('mongodb://localhost:27017/app',function(err,db){
		var con=db.collection('user');
		con.find({username:req.query.username}).toArray(function(err,result){
			console.log(result.length)
			// res.cookie('name','333',{path:'/',time:60*60*60})
			if(result.length=='0'){
				res.send('用户名不存在')
			}else{
				if(result[0].password==req.query.password){
					// res.cookie('name',req.query.username,{path:'/',time:60*60*60})
					res.send()
					res.redirect('http://localhost:8090/my')
					

				}else{
					res.send('用户名或密码错误')
				}
			
			}
		})
	})
})
module.exports=router;


