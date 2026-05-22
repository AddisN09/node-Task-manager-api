const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');
const {deleteAllTasks}=require('../service/deleteAllTasks.js');

async function deleteAllTasksController(req,res){
    try{
         await deleteAllTasks();
         return send(res,200,{message:`All tasks successfully deleted`});
    }
    catch(err){
        return sendError(res,err);
    }
}

module.exports={deleteAllTasksController};