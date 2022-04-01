const mongoose=require("mongoose");

const menfootwearSchema=new mongoose.Schema({
    name:{type:String,required:true},
    image_url:{type:String,required:true},
    strikedoffprice:{type:Number,required:true},
    discount:{type:Number,required:true},
    price:{type:Number,required:true},
    //star:{type:Number,required:true},

},{
    versionKey:false
});

const menfootwear= mongoose.model("menfootwear",menfootwearSchema);

module.exports=menfootwear;

