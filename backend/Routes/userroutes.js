const express=require('express');
const router=express.Router();
const {setdata,login,getuserdata}=require('../controller/userController.js')

const multer=require('multer');
const path=require('path');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,`images`);
    },
    filename:(req,file,cb)=>{
        cb(null,`image${Date.now()}${path.extname(file.originalname)}`);
    }

})
const upload=multer({storage:storage});


router.post('/setdata',upload.single('image'),setdata)
router.post('/getdata',login);
router.get('/getuserdata',getuserdata)
module.exports=router;