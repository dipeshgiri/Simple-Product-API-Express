 const mongoose=require('mongoose')
 const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Product name must be provided'],
    },
    price:{
        type:Number,
        required:[true,'Product price must be Provided'],
    },
    featured:{
        type:Boolean,
        Default:false,
    },
    rating:{
        type:Number,
        Default:2.5,
    },
    createdAt:{
        type:Date,
        Default:Date.now(),
    },
    company:{
        type:String,
        enum: {
            values:['ikea', 'liddy', 'caressa', 'marcos'],
            message:'{VALUE} is not supported',
        },
    },
 })

module.exports=mongoose.model('Product',productSchema)