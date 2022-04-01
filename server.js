
const app=require("./index");

var cors = require('cors')
const connect=require("./config/db")

var whitelist = ['http://example1.com', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
 

app.listen(PORT,async()=>{
    try{
        await connect();
        console.log("connected to MongoDB Atlas")
    }catch(err){
        console.log({message:err.message})
    }
    console.log("Listening on port NO:-",PORT)
});


