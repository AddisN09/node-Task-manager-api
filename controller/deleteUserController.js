const {deleteUser}=require('../service/deleteUser.js');
const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');

async function deleteUserController(req,res){
    try{
       await deleteUser(req.params.userId);
       return send(res,200,{message:`user with userId ${req.params.userId} successfully deleted`});
    }
    catch(err){
        return sendError(res,err);
    }
}
module.exports={deleteUserController};