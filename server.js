const express= require('express');
const app= express();
const db= require('./db');
require('dotenv').config();
const port = process.env.PORT || 3000;
const bodyParser= require('body-parser');
const menu= require('./models/menu');
app.get("/",(req,res)=>{
    res.send("hello sir welcome to our hotel");
});
app.use(bodyParser.json());
        const personRoute= require('./routes/personRoute');
        app.use("/person",personRoute);
        const menuRoutes= require('./routes/menuRoutes');
        app.use("/menu",menuRoutes);
        
app.listen(port,()=>{
    console.log("servre is live on port", port);
});