const express=require('express');
const app=express();
 const cors=require('cors');
 app.use(cors());
require('dotenv').config();
app.use(express.json());
const port=process.env.PORT||4005;
console.log(port);
const notes=require('./data/notes.js')
app.get('/send',(req,res)=>{
    res.json(notes);
})
app.get('/getbyid/:id',(req,res)=>{
    const note=notes.find((n)=>n._id===req.params.id)
    console.log(note);
    res.json(note);
})

app.listen(port,()=>{
    console.log(`server is started at ${port}`)
});