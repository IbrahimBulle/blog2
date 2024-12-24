const mongoose =require('mongoose')
const userSchema=new mongoose.Schema({
    name:String,
    age:{
       type: Number,
       min:1,
       max:100,
    //    validate:{
    //     validator:v=>v%2===0,
    //     message:props=>`${props.value} is not even number`
    //    }
    },
    email:{
        minLength:10,
        masLenght:100,
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    created:{
       type: Date,
       immutable:true,
       default:()=>Date.now(),
    },
    updated:{
        type:Date,
        default:()=>Date.now(),
    },
    bestfriend: mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    address:{
        street:String,
        city:String
    }
})
module.exports=mongoose.model('user',userSchema)