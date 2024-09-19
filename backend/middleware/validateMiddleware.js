const validate = (schema) => async (rq,rs,next) =>{

    try {
        const parseBody = await schema.parseAsync(rq.body);
        rq.body = parseBody;

        next();
    } catch (err) {
        const status = 422;
       const message = err.errors[0].message;
       //    rs.status(400).send({message:message});
       
       const error ={
           status,
           message
        }
        
        console.log(error);
        next(error);
    }
}


module.exports = validate;