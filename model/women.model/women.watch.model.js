const mongoose=require("mongoose");

const womenwatchSchema=new mongoose.Schema({
    name:{type:String,required:true},
    image_url:{type:String,required:true},
    strikedoffprice:{type:Number,required:false},
    discount:{type:Number,required:false},
    price:{type:Number,required:false},
    //star:{type:Number,required:true},

},{
    versionKey:false
});

const womenwatch= mongoose.model("womenwatch",womenwatchSchema);

module.exports=womenwatch;

