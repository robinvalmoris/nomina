const router=require('express').Router();
const licenseschema=require('../models/license');

router.get('/licenses',(req,res)=>{
	licenseschema.find()
	.then((data)=>{
		res.json(data);
	})
	.catch((err)=>{
		res.json({message:err});
	});
});

router.post('/licenses',(req,res)=>{
	const user= licenseschema(req.body);
	user.save()
	.then((data)=>{
		res.json(data);
	})
	.catch((err)=>{
		res.json({message:err});
	});
});

router.get('/licenses/:id',(req,res)=>{
	const{id}=req.params;
	licenseschema.findById(id)
	.then((data)=>{
		//console.log(data);
		res.json(data);
	})
	.catch((err)=>{
		res.json({message:err});
	});
});

router.put('/licenses/:id',(req,res)=>{
	const{id}=req.params;
	licenseschema.updateOne({_id:id},{$set:req.body})
	.then((data)=>{
		//console.log(data);
		res.json(data);
	})
	.catch((err)=>{
		res.json({message:err});
	});
});

router.delete('/licenses/:id',(req,res)=>{
	const{id}=req.params;
	licenseschema.remove({_id:id})
	.then((data)=>{
		//console.log(data);
		res.json(data);
	})
	.catch((err)=>{
		res.json({message:err});
	});
});

module.exports=router;