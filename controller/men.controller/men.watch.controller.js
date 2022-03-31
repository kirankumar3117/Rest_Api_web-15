const express=require("express");

const router=express.Router();

const Menwatch=require("../../model/men.model/men.watch.model")


router.post("/men/watch",(req,res)=>{
    try{
    const user= new Menwatch({
        name:req.body.name,
        image:req.body.image,
        mrp:req.body.mrp,
        discount:req.body.discount,
        rs:req.body.rs,
        star:req.body.star
    });

    res.status(200).send(user)
}catch(err){
    res.status(400).send("somthing is missing in post body" , {message:err.message})
}


});

router.get("men/watch",async(req,res)=>{
    try{
        const user=await find().lean().exec();
        res.status(200).send(user)
    }catch(err){
        console.log("get request denied",{message:err.message})
    }
})