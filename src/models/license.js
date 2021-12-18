const mongoose=require('mongoose');

const licenseSchema=mongoose.Schema({
	name:{
		type:String,
		require:true
	},
	lastname:{
		type:String,
		require:true
	},
	id_number:{
		type:String,
		require:true
	},
	type:{
		type:String,
		require:true
	},
	description:{
		type:String,
		require:true
	},
	pay:{
		type:Boolean,
		require:true
	},
	pass:{
		type:Boolean,
		require:false
	},
	date:{
		type:Date,
		require:true
	},
	days:{
		type:Number,
		require:true
	}
});

module.exports=mongoose.model('License',licenseSchema);