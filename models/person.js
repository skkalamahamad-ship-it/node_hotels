const mongoose= require('mongoose');
const schema= mongoose.Schema({
    name:{
        type: String,
        required: true
    
    },
    age:{
    type: Number,
    required:true,
    default:45
    
},
work:{
    type: String,
    enum:["waiter","manager","chef","owner"],
    required: true
},
mobile:{
    type: String,
    required: true,
    unique: true
},
email:{
    type: String,
    required: true,
    unique: true
},
address:{
    type: String,
    required: true,
},
salary:{
    type: Number,
    required: true
}
});
const person= mongoose.model("Person",schema);
module.exports= person;