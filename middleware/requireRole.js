const {sendError}=require('../utils/sendError.js');
const { decryptData } = require('../utils/encrypt-decrypt.js');


async function requireRole(req,res){
      if(!req.user || req.user.role !== 'Admin'){
        return sendError(res,{message: `You are not authorized for this task`,statusCode:401});
      }
      return false;
}

module.exports={requireRole};