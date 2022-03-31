const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://heroku:heroku@heroku.n0azc.mongodb.net/snapdeal")
}

module.exports=connect;
