const express=require("express");

const app=express();

app.use(express.json());

require("dotenv").config()

PORT=process.env.PORT || 6550


const MenWatchController=require("./controller/men.controller/men.watch.controller");
const MenFootwearController=require("./controller/men.controller/men.footwear.controller");
const MenClothingController=require("./controller/men.controller/men.clothing.controller");
const WomenEthicWearController=require("./controller/women.controller/women.ehicwear.controller");

app.use("/men/watch",MenWatchController)
app.use("/men/footwear",MenFootwearController)
app.use("/men/clothing",MenClothingController)
app.use("/women/ethicwear",WomenEthicWearController)


module.exports=app
