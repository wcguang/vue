let express=require('express');
let mongodb=require('mongodb');
let mongoCt=mongodb.MongoClient;
let router=express.Router();
router.post('/',function(req,res){
	mongoCt.connect('mongodb://localhost:27017/app',function(err,db){
		var con=db.collection('user');
		con.find({username:req.body.username}).toArray(function(err,result){
			// console.log(req.body)
			console.log(result.length)
			if(result.length=='0'){
				if(req.body.password==req.body.nextpassword){
					con.save({username:req.body.username,password:req.body.password})
					res.redirect('http://localhost:8090/login')
				}else{
					res.send('两次输入密码不一致')
				}
			}else{
				res.send('用户名亦存在')
			}
		})
	})
});
module.exports=router;