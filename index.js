
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/UserRoute.js'

const app=express();
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));

dotenv.config()
mongoose.connect(process.env.MONGO_DB,
{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>
app.listen(process.env.PORT,()=>
console.log(`Listening at ${process.env.PORT}`))
).catch((error)=>console.log(error));

app.use('/auth',AuthRoute)
app.use('/user',UserRoute)
app.use('/post',PostRoute)
