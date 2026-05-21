const {send}=require('../utils/send.js');
const {sendError}=require('../utils/sendError.js');
const {createTask}=require('../service/createTask.js');

async function createTaskController(req,res){
    try{
        const body=req.bodyContent;
        const result=await createTask(body);
        return send(res,201,{message:`Task created Successfullt`}); 
    }
    catch(err){
         return sendError(res,err);
    }
}

module.exports={createTaskController};