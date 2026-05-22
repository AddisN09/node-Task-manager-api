const {getAllTasks}=require('../service/getAllTasks.js');
const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');

async function getAllTasksController(req,res){
    try{
        let tasks=await getAllTasks();
        return send(res,200,tasks);
    }
    catch(err){
        return sendError(res,err);
    }
}

module.exports={getAllTasksController};