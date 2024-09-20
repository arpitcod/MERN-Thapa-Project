const mongoose = require('mongoose');


const serviceSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    icon:{
        type:String,
        required:true
    }
},{timeseries:true});




const serviceModel = new mongoose.model("services",serviceSchema);


module.exports = serviceModel;