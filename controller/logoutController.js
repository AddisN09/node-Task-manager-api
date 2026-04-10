const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');
const {logout}=require('../service/logoutService.js');
async function logoutController(req,res){
    try{
       const sessionId=req.sessionId;
       await logout(sessionId);
       res.setHeader('set-cookie', `sessionId=; HttpOnly; Max-Age=0;`);
       return  send(res,200,{message:`logout successfully`});
    }
    catch(err){
        return sendError(res,err);
    }
}

module.exports={logoutController};