const {getUser}=require('../service/getUser.js');
const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');


async function getUserController(req,res){
    try{
     const username=req.username;
     const result= await getUser(username);
     return send(res,200,result);
    }
    catch(err){
        return sendError(res,err);
    }
}

module.exports={getUserController};