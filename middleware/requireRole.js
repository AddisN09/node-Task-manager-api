const {sendError}=require('../utils/sendError.js');
const { decryptData } = require('../utils/encrypt-decrypt.js');


async function requireRole(req,res){
     const role=await decryptData(req.user.role.data,req.user.role.iv);
      if(!req.user || role !== 'Admin'){
        return sendError(res,{message: `You are not authorized for this task`,statusCode:401});
      }
      return false;
}

module.exports={requireRole};