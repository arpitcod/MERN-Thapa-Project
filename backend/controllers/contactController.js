const contactModel = require('../models/contactModel');


 const contactFormController = async (req,res) =>{
    try {

        const response = await req.body;

        await new contactModel(response).save()

        return res.status(201).send({
            success:true,
            response
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"internal server error"
        })
    }
 }

 module.exports = {contactFormController};