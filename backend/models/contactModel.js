const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})


const contactModel = new mongoose.model('contact' ,contactSchema)

module.exports = contactModel;