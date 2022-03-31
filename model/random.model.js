const mongoose=require("mongoose");

const randomSchema=new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    mrp:{type:Number,required:true},
    discount:{type:Number,required:true},
    rs:{type:Number,required:true},
    star:{type:Number,required:true},

},{
    versionKey:false
});

const random= mongoose.model("random",randomSchema);

module.exports=random;

