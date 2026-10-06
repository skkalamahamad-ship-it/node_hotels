const mongoose= require('mongoose');
const url= 'mongodb://127.0.0.1:27017/hotel';
mongoose.connect(url);
const db= mongoose.connection;
db.on("connected",()=>{
    console.log("mongodb server is connected");
});
db.on("disconnected",()=>{
    console.log("mongodb servre is disconnected");

});
db.on("error",(err)=>{
    console.log({err});
});
module.exports= db;