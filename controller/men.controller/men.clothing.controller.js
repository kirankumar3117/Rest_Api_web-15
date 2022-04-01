const express=require("express");
var cors = require('cors')
const router=express.Router();

const Menclothing=require("../../model/men.model/men.clothing.model")

var corsOptions = {
  origin: 'https://obscure-journey-64084.herokuapp.com/men',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
 
router.post("/",(req,res)=>{
    try{

        //even though we alredy said what we needed in schema this is for more accuracy
    const user=Menclothing.create(
        // name:req.body.name,
        // image:req.body.image,
        // mrp:req.body.mrp,
        // discount:req.body.discount,
        // rs:req.body.rs,
        // star:req.body.star
        req.body
    );
   // user.save();
    res.status(200).send(user)
}catch(err){
    res.status(400).send("somthing is missing in post body" , {message:err.message})
}


});

router.delete("/:id",async(req,res)=>{
    try{
        const user=await Menclothing.findByIdAndDelete(req.params.id);
        res.status(200).send(user)
    }catch(err){
        console.log({message:err.message})
    }
})

router.get("/", cors(corsOptions),async (req, res) => {
    try {
     
  
      const page = req.query.page || 1;
      const pagesize = req.query.pagesize || 25; 
  
      const skip = (page - 1) * pagesize;
      const user = await Menclothing.find()
        .skip(skip) 
        .limit(pagesize) 
        .lean()
        .exec();
  
      const totalPages = Math.ceil(
        (await Menclothing.find().countDocuments()) / pagesize);
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  module.exports=router;