

const errorMiddleware = (err ,rq,rs,next) =>{
    const status = err.status || 500;
    const message = err.message || 'error in backend';
    // const extraMessage = err.extraMessage || ''

    const error ={
        status,
        // extraMessage,
        message
    }
    
    return rs.status(status).send({

        success:false,
        message
    })
}

module.exports = errorMiddleware;