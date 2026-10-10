//  const dns = require('dns');
//  dns.setServers(['8.8.8.8', '1.1.1.1']);
// const mongoose= require('mongoose');
// require('dotenv').config();
// // const url= process.env.local;
//  const url=process.env.url;
// mongoose.connect(url);
// const db= mongoose.connection;
// db.on("connected",()=>{
//     console.log("mongodb server is connected");
// });
// db.on("disconnected",()=>{
//     console.log("mongodb servre is disconnected");

// });
// db.on("error",(err)=>{
//     console.log({err});
// });
// module.exports= db;
const dns = require('dns');

dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoose = require('mongoose');

require('dotenv').config();

const url = process.env.url;

const db = mongoose.connection;

db.on("connected", () => {
    console.log("MongoDB server is connected");
});

db.on("disconnected", () => {
    console.log("MongoDB server is disconnected");
});

db.on("error", (err) => {
    console.error("MongoDB error:", err.message);
});

mongoose.connect(url)
    .then(() => {
        console.log("MongoDB connection successful");
    })
    .catch((err) => {
        console.error("MongoDB initial connection failed:", err);
    });

module.exports = db;