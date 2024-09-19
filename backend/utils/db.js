const mongoose = require('mongoose');




const connectDB = async () =>{
    try {
        
        await mongoose.connect(process.env.MONGO_URL)
        console.log('database successfully connected');
        
    } catch (error) {
        console.log('database connection faild')
    }
}


module.exports = connectDB;