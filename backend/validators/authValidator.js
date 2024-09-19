const {z} = require('zod');


const signupSchema = z.object({
    username:z.string({required_error:"name is required"})
            .trim()
            .min(3 , {message:"username min 3 character valid"})
            .max(20,{message:"username max 20 character valid"}),

    email:z.string({required_error:"email is required"})
            .trim()
            .email({message:"invalid email"})
            .min(3 , {message:"min 3 character valid"})
            .max(30,{message:"max 30 character valid"}),

    phone:z.string({required_error:"phone is required"})
            .trim()
            .min(10,{message:"phone min 10 character valid"})
            .max(20,{message:"phone max 20 character valid"}),
    
    password:z.string({required_error:"password is required"})
            .trim()
            .min(6,{message:"password min 6 character valid"})
            .max(50,{message:"password max 50 characher valid"}),

})


module.exports = signupSchema;