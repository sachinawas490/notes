const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
require('dotenv').config();
app.use(express.json());
const port=process.env.PORT||4005;
app.use(express.urlencoded({ extended: true }))
const notes=require('./data/notes.js')
require('./db.js')
const userrouter=require('./Routes/userroutes.js');
// app.use('/setdata',userrouter);
app.use('/user',userrouter);

app.listen(port,()=>{
    console.log(`server is started at ${port}`)
});