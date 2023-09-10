require('dotenv').config();

require('express-async-errors')

const express = require('express');
const app = express();

const connectDb=require('./db/connect');
const productRouter=require('./routes/products');


const notFoundMiddleware=require('./middleware/not-found')
const errorMiddleware=require('./middleware/errorhandler')

//middleware

app.use(express.json())

//routes

app.get('/',(req,res)=>{
    res.send('<h1>Store API</h1><a href="/app/v1/products">Products</a>')
})

app.use('/api/v1/products',productRouter) 
//product routes

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const PORT=process.env.PORT || 5500;
const start=async()=>{
    try{
        //connect DB
        await connectDb(process.env.MONGO_URI)
        app.listen(PORT,console.log(`Server is Listening to Port ${PORT}... `))
    }catch(error){
        console.log(error)
    }
}

start()