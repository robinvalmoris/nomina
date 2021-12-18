const router=require('express').Router();
const userschema=require('../models/user');

router.get('/users',(req,res)=>{
	userschema.find()
	.then((data)=>{
		res.json(data);
	})
	.catch((err)=>{
		res.json({message:err});
	});
});

router.post('/users',(req,res)=>{
	const user= userschema(req.body);
	user.save()
	.then((data)=>{
		res.json(data);
	})
	.catch((err)=>{
		res.json({message:err});
	});
});

router.get('/users/:id',(req,res)=>{
	const{id}=req.params;
	userschema.findById(id)
	.then((data)=>{
		//console.log(data);
		res.json(data);
	})
	.catch((err)=>{
		res.json({message:err});
	});
});

router.put('/users/:id',(req,res)=>{
	const{id}=req.params;
	userschema.updateOne({_id:id},{$set:req.body})
	.then((data)=>{
		//console.log(data);
		res.json(data);
	})
	.catch((err)=>{
		res.json({message:err});
	});
});

router.delete('/users/:id',(req,res)=>{
	const{id}=req.params;
	userschema.remove({_id:id})
	.then((data)=>{
		//console.log(data);
		res.json(data);
	})
	.catch((err)=>{
		res.json({message:err});
	});
});

module.exports=router;