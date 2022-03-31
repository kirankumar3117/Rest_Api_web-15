const express=require("express");

const router=express.Router();

const Homekitchen=require("../../model/home.model/home.kitchen.model")


router.post("/",(req,res)=>{
    try{

        //even though we alredy said what we needed in schema this is for more accuracy
    const user=Homekitchen.create(
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
        const user=await Homekitchen.findByIdAndDelete(req.params.id);
        res.status(200).send(user)
    }catch(err){
        console.log({message:err.message})
    }
})

router.get("/", async (req, res) => {
    try {
     
  
      const page = req.query.page || 1;
      const pagesize = req.query.pagesize || 25; 
  
      const skip = (page - 1) * pagesize;
      const user = await Homekitchen.find()
        .skip(skip) 
        .limit(pagesize) 
        .lean()
        .exec();
  
      const totalPages = Math.ceil(
        (await Homekitchen.find().countDocuments()) / pagesize);
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  module.exports=router;