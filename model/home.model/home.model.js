const mongoose=require("mongoose");

const homeSchema=new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    mrp:{type:Number,required:true},
    discount:{type:Number,required:true},
    rs:{type:Number,required:true},
    star:{type:Number,required:true},

});

const home= mongoose.model("home",homeSchema);

module.exports=home;

