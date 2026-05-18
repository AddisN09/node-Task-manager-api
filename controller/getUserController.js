const {getUser}=require('../service/getUser.js');
const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');


async function getUserController(req,res){
    try{
     const userId=req.params.userId;
     const result= await getUser(userId);
     return send(res,200,result);
    }
    catch(err){
        return sendError(res,err);
    }
}

module.exports={getUserController};