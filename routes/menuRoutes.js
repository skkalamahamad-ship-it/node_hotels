const express= require('express');
const router= express.Router();
const menu= require('./../models/menu');
const person = require('../models/person');
router.post("/",async(req,res)=>{
        try{
            const data= req.body;
            const menuItem= new menu(data);
            const response= await menuItem.save();
            console.log("data saved successfully");
            res.status(200).json(response);
        }
        catch(err){
            console.log({err});
            res.status(500).json({err:"internal server error"});

        }
    });
    router.get("/",async(req,res)=>{
        try{
            const data=await  menu.find();
            res.status(200).json(data);
            console.log("menu data showed to client successfully");
        }
        catch(err){
            console.log(err);
            res.status(500).json({err:"internal server error"});
        }});
        router.get("/:key",async(req,res)=>{
            try{
                const key= req.params.key;
                if(key=="sweet"||key=="sour"||key=="spicy"){
                    const response= await menu.find({taste:key});
                    res.status(200).json(response);
                    console.log("data fetched");
                }else{
                    res.status(404).send("invalid request");
                }
            }
            catch(err){
                console.log({err});
                res.status(500).json({err:"internal server error"});
            };
        });
        router.put("/:key",async(req,res)=>{
            try{
                const id= req.params.key;
                const updateid= req.body;
                const response= await menu.findByIdAndUpdate(id,updateid,{
                    new:true,
                    runValidators:true}
                )
                if(!response){
                    return res.status(404).json("data not found");
                }
                console.log("data upadted succesfully");
                res.status(200).json(response);
            }
                catch(err){
                    console.log(err);
                    res.status(500).json({error:"internal server error"});
            }
        });
        router.delete("/:key",async(req,res)=>{
            try{
                const id= req.params.key;
                const response= await menu.findByIdAndDelete(id);
                if(!response){
                    return res.status(404).json("data not found");
                }
                console.log("data deleted successfully");
                res.status(200).json("data deleted");
            } 
            catch(err){
                console.log(err);
                res.status.json({err:"internal server error"});
            }
        })
        // comment added for testing purpose.
    module.exports= router;