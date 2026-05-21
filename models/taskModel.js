const {idGenerator}=require('../utils/idGenerator.js');

async function taskModel(title,description,userId,status='pending',dueDate=null,complited=false){
    return {
        taskId:`task-${await idGenerator()}`,
        title,
        description,
        status,
        createdAt:new Date().toISOString(),
        dueDate,
        complited,
        userId,
    }
}
 
module.exports={taskModel};