const express = require('express')


const mongoose = require('mongoose');
const user =require('./user')
// Replace with your MongoDB URI

mongoose.connect('mongodb://127.0.0.1:27017/newtest')

// post user
// get users
// edit user
// delete user
// 
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// run()

app.get('/',async(req,res)=>{
    try{
        let users = await user.find({});
        res.json(users)
    
    }catch(err){
        console.log(err)
    }
})
app.post('/user',async(req,res)=>{
    try {
        const{email} = req.body
        
        // console.log(email)
        const User= await user.find({email})
        // console.log(User);
        
        if(User.length>0){
            res.json("user present")
        }else{
            const newUser = req.body;
            let data = await user.create(newUser)
            res.json(data)
            
        }
        // aghsdi@gmail.com

    } catch (error) {
        console.error(error)
    }

})
// app.post('/user',(req,res)=>{

// })
async function run(){
    try {
        // const User=await user.find({name:'abdwali'})
        // console.log(User)
        const User= await user.find({email:user.email})
        // console.log(User);
        
        if(!User){
            user.create({
            name:'abdui',
            age:23,
            email:"aGHSdi@gmail.com",
            hobbies:['wight lifthing','bowing'],
            address:{
                street:'kenya',
                city:'garissa'
            }
        
        })
        // console.log(User)
    }else{
        console.log("User already exists:",User);
    }

        
    } catch (error) {
        console.log(error.message)
    }



}

app.listen(3000,()=>{
    console.log("server is up and running!")
})