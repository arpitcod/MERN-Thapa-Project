const jwt = require('jsonwebtoken');
const userModel = require("../models/userModel");


const authMiddleware = async (rq,rs,next) =>{
    try {
    // token 
 
    const token = rq.header('Authorization').split(" ")[1]
    console.log("token -->",token);
    
        
    if (!token) {
        return rs.status(401).json({
            message:"unauthorized , token not provided"
        })
    }


    // const jwtToken = token.split(' ')[1];
    // console.log("jwt token --> ",jwtToken);
    

    // verify token 
    const tokenVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("verified token -->",tokenVerified);
    

    //get user includ token
    const userData = await userModel.findById(tokenVerified.id).select('-password');
    // const userData = await userModel.findOne({id:tokenVerified?._id}).select('-password');

    if (!userData ) {
        return rs.status(401).json({
            message:"unauthorized : invalid token"
        })
    }
    
    
    rq.token = token;
    rq.user = userData;
    rq.userId = userData._id;
  
    next();
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = authMiddleware