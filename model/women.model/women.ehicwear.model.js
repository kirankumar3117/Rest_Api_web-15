const mongoose=require("mongoose");

const womenethicwearSchema=new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    mrp:{type:Number,required:true},
    discount:{type:Number,required:true},
    rs:{type:Number,required:true},
    star:{type:Number,required:true},

});

const womenethicwear= mongoose.model("womenethicwear",womenethicwearSchema);

module.exports=womenethicwear;

