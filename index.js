const express=require("express");

const app=express();

app.use(express.json());

require("dotenv").config()

PORT=process.env.PORT || 6550


const MenWatchController=require("./controller/men.controller/men.watch.controller");
const MenFootwearController=require("./controller/men.controller/men.footwear.controller");
const MenClothingController=require("./controller/men.controller/men.clothing.controller");
const WomenEthicWearController=require("./controller/women.controller/women.ehicwear.controller");
const WomenFootWearController=require("./controller/women.controller/women.footwear.controller");
const WomenWatchController=require("./controller/women.controller/women.watch.controller");

app.use("/men/watch",MenWatchController)
app.use("/men/footwear",MenFootwearController)
app.use("/men/clothing",MenClothingController)
app.use("/women/ethicwear",WomenEthicWearController)
app.use("/women/footwear",WomenFootWearController)
app.use("/women/watch",WomenWatchController)


module.exports=app
