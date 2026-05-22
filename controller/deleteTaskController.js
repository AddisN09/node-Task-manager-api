const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');
const {deleteTask}=require('../service/deleteTask.js');

async function deleteTaskController(req,res){
    try{
       const taskId=req.params.taskId;
       let result=await deleteTask(taskId);
       return send(res,200,{message:`User successfully deleted`});
    }
    catch(err){
        return sendError(res,err);
    }
}
module.exports={deleteTaskController};