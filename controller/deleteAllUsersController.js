const {deleteAllUsers}=require('../service/deleteAllUsers.js');
const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');

async function deleteAllUsersController(req,res){
    try{
    const result=await deleteAllUsers();
    return send(res,200,{message:`All users successfully deleted`});
    }
    catch(err){
        return sendError(res,err);
    }
}

module.exports={deleteAllUsersController};