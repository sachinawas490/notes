const cloudinary = require("cloudinary");
const users = require("../modals/usermodal");
cloudinary.config({
	cloud_name: "ddoraw0mr",
	api_key: "655994916721559",
	api_secret: "8rFPGJvWfAgrQGM2xJaCSvl6U4c",
});
const generatetoken=require('../jwt/generatetoken')
const setdata = async (req, res) => {
	const { username, email, password, isadmin } = req.body;
  if(!username||!email||!password||!isadmin){
    res.status(401).json({"message":"enter data in all field's "})
    return ;
  }
	try {
		const result = await cloudinary.uploader.upload(req.file.path);
		console.log(result);
		const newuser = new users({
			username,
			email,
			password,
			isadmin,
			imgpath: result.url,
		});
		const temp = await newuser.save();
		console.log(newuser, "    ", temp);
        res.status(201).json({"message":"registration successfull ! ",username});
	} catch (err) {
		res.status(401).json({"messsage":err})
	}
};

const login=async (req,res)=>{
    console.log("login")
     const {email,password}=req.body;
     
    try {
        const finduser=await users.findOne({email,password})
    if(finduser){
		// console.log(finduser);
		const token=await generatetoken(finduser._id);
		const userWithToken = { ...finduser.toObject(), token };
		console.log(finduser)
		res.status(201).json({"message":userWithToken});

	} 
    } catch (error) {
        res.status(401).json({"message":"error occurend in login ! try again"}); 
    }
}
const getuserdata=async(req,res)=>{
	console.log("called")
   const response=await users.find();
   console.log(response);
   res.send(response);
}
module.exports = { setdata, login ,getuserdata};
