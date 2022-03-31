const express=require("express");

const router=express.Router();

const Womenfootwear=require("../../model/women.model/women.footwear.model")


router.post("/",(req,res)=>{
    try{

        //even though we alredy said what we needed in schema this is for more accuracy
    const user= Womenfootwear.create(req.body,{new:true});
   // user.save();
   
// const user=ScrapProducts()
// .then(mapToModel)
// .then(function(data) {
//   return Product.create(data)
// })
    res.status(200).send(user)
}catch(err){
    res.status(400).send({message:err.message})
}


});

router.delete("/:id",async(req,res)=>{
    try{
        const user=await Womenfootwear.findByIdAndDelete(req.params.id);
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
      const user = await Womenfootwear.find()
        .skip(skip) 
        .limit(pagesize) 
        .lean()
        .exec();
  
      const totalPages = Math.ceil(
        (await Womenfootwear.find().countDocuments()) / pagesize);
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  module.exports=router;