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
const HomeController=require("./controller/home.controller/home.controller");
const HomeKitchenController=require("./controller/home.controller/home.kitchen.controller");
const KidsToysController=require("./controller/kids.controller/kids.toys.controller");
const KidsClothingController=require("./controller/kids.controller/kids.clothing.controller");
const BeautyController=require("./controller/beauty.controller");
const RandomController=require("./controller/random.controller");

app.use("/men/perfume",MenWatchController)
app.use("/men/footwear",MenFootwearController)
app.use("/men",MenClothingController)
app.use("/women/ethicwear",WomenEthicWearController)
app.use("/women",WomenFootWearController)

//changed to watch - perfume cause we don't have any data on watches
app.use("/women/perfume",WomenWatchController)
app.use("/home",HomeController)
app.use("/home/kitchen",HomeKitchenController)
app.use("/kid/toy",KidsToysController)
app.use("/kid",KidsClothingController)
app.use("/beauty",BeautyController)
app.use("/random",RandomController)


module.exports=app
