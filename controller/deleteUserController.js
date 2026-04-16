const {deleteUser}=require('../service/deleteUser.js');
const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');

async function deleteUserController(req,res){
    try{
       await deleteUser(req.username);
       return send(res,200,{message:`user with username ${req.username} successfully deleted`});
    }
    catch(err){
        console.log(err);
        return sendError(res,err);
    }
}
module.exports={deleteUserController};