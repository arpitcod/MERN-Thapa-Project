require('dotenv').config();
const express = require('express');
const app = express();
const authRouter = require('./router/authRouter');
const connectDB = require('./utils/db');
const errorMiddleware = require('./middleware/errorMiddleware');
const contactRoute = require('./router/contactRouter');
const cors = require('cors');

// const corsOption={
//     method:"POST","DELETE","PUT",
// }

app.use(cors())
app.use(express.json())

// routes 
app.use('/api/auth',authRouter)
app.use('/api/form',contactRoute)


app.get('/',(rq,rs) =>{
    rs.send('hare krishna')
})

app.use(errorMiddleware);

const PORT = process.env.PORT;
connectDB().then(() =>{

    app.listen(PORT , () =>{
        console.log(`server running on ${PORT}`);
        
    })
});