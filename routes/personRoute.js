const express= require('express');
const router= express.Router();
const person= require('./../models/person');
router.post("/",async (req,res)=>{
        try{
           const data= req.body;
            const people= new person(data);
            const response= await people.save();
            console.log("data saved...");
            res.status(200).json(response);
        }
        catch(err){
            res.status(500).json({err:"internal server error"});
            console.log({err});
        }
});
router.get('/',async (req,res)=>{
        try{
            const data= await person.find();
            console.log("data showed to user successfully...");
            res.status(200).json(data);

        }
        catch(err){
            console.log({err});
            res.status(500).json({err:"internal server error"});
        }
    });
    router.get("/:type",async(req,res)=>{
        try{
            const type= req.params.type;
            if(type=="manager"||type=="chef"||type=="waiter"){
                const response= await person.find({work:type});
                console.log("data fetched ");
                res.status(200).json(response);
            }else{
                res.status(404).send("invalid request");
            }
        }
        catch(err){
            console.log({err});
            res.status(500).json({err:"internal server error"});
        }
    });
    router.put("/:key",async(req,res)=>{
        try{
            const personId= req.params.key;
            const updateData= req.body;
            const response= await person.findByIdAndUpdate(personId,updateData,{
                new:true,
                runValidators:true
            });
            if(!response){
                return res.status(404).json("data not found");
            }
            console.log("data updated successfully");
            res.status(200).json(response);
        }
        catch(err){
            console.log(err);
            res.status(500).json({err:"internal server error"});
        }
    })
    router.delete("/:key",async(req,res)=>{
        try{
            const personId= req.params.key;
            const response= await person.findByIdAndDelete(personId);
        
        if(!response){
            return res.status(404).json("data not found");
        }
        console.log("data deleted successfully");
        res.status(200).json({message:"data deleted successfully"});
    }
        catch(err){
            console.log(err);
            res.status(500).json({err:"internal server error"});
        }
    });
    module.exports= router;