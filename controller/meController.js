const {send}=require('../utils/send.js');
const { decryptData } = require('../utils/encrypt-decrypt.js');

async function meController(req,res){
    const decryptedId=await decryptData(req.user.userId.data,req.user.userId.iv);
    const decryptedRole=await decryptData(req.user.role.data,req.user.role.iv);
    return send(res,200,{userId:decryptedId,role:decryptedRole});
}
module.exports={meController};