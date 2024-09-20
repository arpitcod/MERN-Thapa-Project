const serviceModel = require('../models/serviceModel')

 const serviceController = async (rq,rs) =>{

    try {
        const getServiceData = await serviceModel.find();

        if (!getServiceData) {
            return rs.status(404).json({
                success:false,
                message:"service data not found"
            })
        }

        return rs.status(200).json({
            length:getServiceData.length,
            success:true,
            getServiceData
        })
    } catch (error) {
        console.log(error);

        return rs.status(500).json({
            success:false,
            message:"internel server error"
        })
        
    }
}

module.exports = {serviceController};