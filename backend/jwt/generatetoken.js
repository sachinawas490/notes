const jwt=require('jsonwebtoken');

const generatetoken=async(id)=>{
    return jwt.sign({id},process.env.TOKEN,{expiresIn:'3d'});
}
module.exports=generatetoken;