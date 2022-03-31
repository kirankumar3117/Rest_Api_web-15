const express=require("express");

const app=express();

app.use(express.json());

require("dotenv").config()

PORT=process.env.PORT || 6550


module.exports=app;
