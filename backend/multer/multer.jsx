const multer=require('multer');
const path=require('path')
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images');
    },
    filename:(req,file,cb)=>{
        cb(null,`image${Date.now()}abc${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage})

const userrouter=require('./Routes/userroutes.js');
// app.use('/setdara',userrouter);
app.post("/set/setdata",upload.single('image'),async (req,res)=>{
    const {username,email,password}=req.body;
    console.log("usercontroller");
    console.log(req.body);
    console.log(req.file.path)
})