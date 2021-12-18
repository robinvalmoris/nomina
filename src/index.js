const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const userAPI=require('./routes/users');
const licenseAPI=require('./routes/licenses');

mongoose.connect(process.env.nominaDB)
.then(()=>console.log('Established DB connection'))
.catch((error)=>console.log(error));

const app=express();
const port=process.env.PORT || 3000;

app.use(express.json());
app.use('/users_api', userAPI);
app.use('/licenses_api',licenseAPI);

app.get('/',(req,res)=>{
	res.send("Welcome to my Nomina's APIs");
});

app.listen(port,()=>console.log('Established connection'));