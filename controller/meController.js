const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js')
const {cookieParser}=require('../utils/cookieParser.js');
const {getSession}=require('../utils/sessionManager.js');
const { decryptData } = require('../utils/encrypt-decrypt.js');



async function meController(req,res){
    const cookie=await cookieParser(req);
    const sessionId=cookie.sessionId;
    if(!sessionId){
         return sendError(res,{message:`Unauthorized no session`,statusCode:500});
    }
    const user=await getSession(sessionId);
    if(!user){
         return sendError(res,{message:`unauthorized you need to login first`,statusCode:400});
    }
    const decryptedId=await decryptData(user.userId.data,user.userId.iv);
    const decryptedRole=await decryptData(user.role.data,user.role.iv);
    return send(res,200,{userId:decryptedId,role:decryptedRole});

}
module.exports={meController};