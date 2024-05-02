const mongoose=require('mongoose');
const url="mongodb://localhost:27017/notes";
mongoose.connect(url);
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected to  mongodb');
})
db.on('disconnected',()=>{
    console.log('discnnected to  mongodb');
})
db.on('error',()=>{
    console.log('error occured in   mongodb connection');
})