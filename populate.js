require('dotenv').config()

const connectDb=require('./db/connect')
const product=require('./models/product')
const jsonproduct=require('./products.json')


const start=async()=>{
    try{
        await connectDb(process.env.MONGO_URI)
        await product.deleteMany();
        await product.create(jsonproduct)
        console.log("Success")
        process.exit(0)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

start()