const mongoose=require('mongoose');

const usersSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true, 
        
    },
    image:{
        type:String,
        default:"https://res.cloudinary.com/ddoraw0mr/image/upload/v1714296089/tpvdehgcehngipwwyovx.jpg"
    },
    isadmin:{
        type:Boolean,
        required:true,
        default:false
    }
},{
    timestamps:true
})
const users= mongoose.model("users",usersSchema);
module.exports=users;