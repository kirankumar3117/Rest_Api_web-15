
const app=require("./index");

const connect=require("./config/db")

app.listen(PORT,async()=>{
    try{
        await connect();
        console.log("connected to MongoDB Atlas")
    }catch(err){
        console.log({message:err.message})
    }
    console.log("Listening on port NO:-",PORT)
})