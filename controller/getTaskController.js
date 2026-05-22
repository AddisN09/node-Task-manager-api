const {getTask}=require('../service/getTask.js');
const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');

async function getTaskController(req,res){
    try{
    const taskId=req.params.taskId;
    const result=await getTask(taskId);
    return send(res,200,result);
    }
    catch(err){
        return sendError(res,err);
    }
}

module.exports={getTaskController};